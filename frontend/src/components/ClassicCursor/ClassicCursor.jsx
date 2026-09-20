import { useEffect, useRef, useState } from 'react'

export default function ClassicCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [trailPosition, setTrailPosition] = useState({ x: -100, y: -100 })
  const [active, setActive] = useState(false)
  const [visible, setVisible] = useState(false)
  const targetPosition = useRef({ x: -100, y: -100 })

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return undefined

    document.body.classList.add('cursor-enabled')

    let animationFrame

    const updateTrail = () => {
      setTrailPosition(current => {
        const next = {
          x: current.x + (targetPosition.current.x - current.x) * 0.16,
          y: current.y + (targetPosition.current.y - current.y) * 0.16,
        }
        return next
      })
      animationFrame = requestAnimationFrame(updateTrail)
    }

    const handlePointerMove = event => {
      const nextPosition = { x: event.clientX, y: event.clientY }
      targetPosition.current = nextPosition
      setPosition(nextPosition)
      setVisible(true)
      setActive(Boolean(event.target.closest('a, button, input, textarea, select, [role="button"]')))
    }
    const handlePointerLeave = () => setVisible(false)

    window.addEventListener('pointermove', handlePointerMove)
    document.addEventListener('mouseleave', handlePointerLeave)
    animationFrame = requestAnimationFrame(updateTrail)

    return () => {
      document.body.classList.remove('cursor-enabled')
      window.removeEventListener('pointermove', handlePointerMove)
      document.removeEventListener('mouseleave', handlePointerLeave)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <span
      aria-hidden="true"
      className={`classic-cursor ${active ? 'classic-cursor-active' : ''} ${visible ? 'classic-cursor-visible' : ''}`}
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
    >
      <span
        className="classic-cursor-trail"
        style={{ transform: `translate3d(${trailPosition.x - position.x}px, ${trailPosition.y - position.y}px, 0)` }}
      />
      <span className="classic-cursor-dot" />
    </span>
  )
}