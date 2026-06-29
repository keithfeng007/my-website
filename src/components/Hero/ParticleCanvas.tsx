import { useRef, useEffect } from 'react'
import { useTheme } from '../../contexts/ThemeContext'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
}

const PARTICLE_COLORS = {
  light: ['rgba(100,149,237,0.5)', 'rgba(255,255,255,0.6)', 'rgba(70,130,180,0.4)'],
  dark: ['rgba(168,85,247,0.5)', 'rgba(34,211,238,0.5)', 'rgba(139,92,246,0.4)'],
}

const MAX_PARTICLES = 80
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

function createParticle(width: number, height: number, colors: string[]): Particle {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.6,
    vy: (Math.random() - 0.5) * 0.6,
    radius: Math.random() * 2 + 1,
    color: colors[Math.floor(Math.random() * colors.length)],
  }
}

function calcParticleCount(width: number, height: number): number {
  return Math.min(Math.floor((width * height) / 10000), MAX_PARTICLES)
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animFrameRef = useRef<number>(0)
  const particlesRef = useRef<Particle[]>([])
  const { theme } = useTheme()

  useEffect(() => {
    const mq = window.matchMedia(REDUCED_MOTION_QUERY)
    if (mq.matches) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const colors = PARTICLE_COLORS[theme]

    const setSize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    setSize()

    const count = calcParticleCount(canvas.width, canvas.height)
    particlesRef.current = Array.from({ length: count }, () =>
      createParticle(canvas.width, canvas.height, colors),
    )

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particlesRef.current) {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()
      }

      animFrameRef.current = requestAnimationFrame(draw)
    }

    draw()

    let resizeTimer: ReturnType<typeof setTimeout>
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        setSize()
        const newCount = calcParticleCount(canvas.width, canvas.height)
        const current = particlesRef.current
        if (newCount > current.length) {
          for (let i = current.length; i < newCount; i++) {
            current.push(createParticle(canvas.width, canvas.height, colors))
          }
        } else if (newCount < current.length) {
          current.length = newCount
        }
      }, 200)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animFrameRef.current)
      window.removeEventListener('resize', handleResize)
      clearTimeout(resizeTimer)
    }
  }, [theme])

  const mq = window.matchMedia(REDUCED_MOTION_QUERY)
  if (mq.matches) return null

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-60"
      aria-hidden="true"
    />
  )
}