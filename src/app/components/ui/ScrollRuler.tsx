'use client'

import { useEffect, useRef, RefObject } from 'react'

interface ScrollRulerProps {
  scrollContainerRef?: RefObject<HTMLElement | null>
}

const TICK_GAP = 9        // px entre cada línea
const MAJOR_EVERY = 10    // cada 10 ticks, uno "mayor"
const BUMP_RADIUS = 55    // radio (px) del efecto ola alrededor del centro
const SCROLL_SPEED = 0.6  // velocidad de la franja respecto al scroll real
const SMOOTHING = 0.15    // 0-1, menor = más suave/lento
const FADE_WIDTH = 80     // px de ancho para el gradiente de desvanecido lateral

export default function ScrollRuler({ scrollContainerRef }: ScrollRulerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)
  const targetScroll = useRef(0)
  const currentOffset = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const scrollEl: HTMLElement | Window =
      scrollContainerRef?.current ?? window

    const dpr = window.devicePixelRatio || 1

    function resize() {
      const rect = canvas!.getBoundingClientRect()
      canvas!.width = rect.width * dpr
      canvas!.height = rect.height * dpr
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    function onScroll() {
      targetScroll.current =
        scrollEl instanceof Window ? scrollEl.scrollY : scrollEl.scrollTop
    }
    scrollEl.addEventListener('scroll', onScroll, { passive: true })

    function draw() {
      currentOffset.current +=
        (targetScroll.current - currentOffset.current) * SMOOTHING

      const rect = canvas!.getBoundingClientRect()
      const width = rect.width
      const height = rect.height
      const centerX = width / 2

      ctx!.clearRect(0, 0, width, height)

      const scrollOffsetPx = currentOffset.current * SCROLL_SPEED
      const firstTick = Math.floor((scrollOffsetPx - centerX) / TICK_GAP) - 2
      const lastTick = Math.ceil((scrollOffsetPx + centerX) / TICK_GAP) + 2

      for (let i = firstTick; i <= lastTick; i++) {
        const worldX = i * TICK_GAP
        const screenX = worldX - scrollOffsetPx + centerX

        if (screenX < -10 || screenX > width + 10) continue

        // --- Opacidad en los bordes ---
        const distanceToEdge = Math.min(screenX, width - screenX)
        const fadeAlpha = Math.max(0, Math.min(1, distanceToEdge / FADE_WIDTH))

        if (fadeAlpha <= 0) continue

        const isMajor = i % MAJOR_EVERY === 0

        // --- efecto "ola" cerca del centro ---
        const dist = Math.abs(screenX - centerX)
        const bump = Math.max(0, 1 - dist / BUMP_RADIUS)
        const waveScale = bump * bump

        const baseH = isMajor ? height * 0.3 : height * 0.32
        const tickHeight = baseH + waveScale * height * 0.3

        ctx!.strokeStyle = isMajor
          ? `rgba(255, 255, 255, ${0.55 * fadeAlpha})`
          : `rgba(255, 255, 255, ${0.25 * fadeAlpha})`
        ctx!.lineWidth = isMajor ? 1.4 : 1

        const topY = height * 0.18
        ctx!.beginPath()
        ctx!.moveTo(screenX, topY)
        ctx!.lineTo(screenX, topY + tickHeight)
        ctx!.stroke()
      }

      // --- marcador central fijo (más opaco que antes, ligeramente superior a las líneas mayores) ---
      ctx!.strokeStyle = 'rgba(255, 255, 255, 0.75)'
      ctx!.lineWidth = 2
      ctx!.beginPath()
      ctx!.moveTo(centerX, height * 0.18)
      ctx!.lineTo(centerX, height * 0.74)
      ctx!.stroke()

      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('resize', resize)
      scrollEl.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafRef.current)
    }
  }, [scrollContainerRef])

  return (
    <div className="fixed top-0 inset-x-0 z-40 h-12 pointer-events-none flex justify-center">
      <canvas ref={canvasRef} className="h-full w-[280px]" />
    </div>
  )
}