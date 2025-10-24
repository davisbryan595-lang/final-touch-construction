"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Particle {
  id: number
  x: number
  y: number
}

export default function CursorTrail() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [nextId, setNextId] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newParticle: Particle = {
        id: nextId,
        x: e.clientX,
        y: e.clientY,
      }

      setParticles((prev) => [...prev, newParticle].slice(-20))
      setNextId((prev) => prev + 1)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [nextId])

  return (
    <>
      {particles.map((particle, index) => (
        <motion.div
          key={particle.id}
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed w-2 h-2 bg-[#00ff41] rounded-full pointer-events-none"
          style={{
            left: particle.x,
            top: particle.y,
            boxShadow: "0 0 10px rgba(0, 255, 65, 0.6)",
          }}
        />
      ))}
    </>
  )
}
