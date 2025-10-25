"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface BeforeAfterSliderProps {
  before: string
  after: string
  title: string
}

export function BeforeAfterSlider({ before, after, title }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.touches[0].clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden cursor-col-resize group"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* After Image */}
        <div className="absolute inset-0">
          <Image src={after || "/placeholder.svg"} alt="After" fill className="object-cover" quality={90} />
        </div>

        {/* Before Image */}
        <motion.div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPosition}%` }}>
          <Image src={before || "/placeholder.svg"} alt="Before" fill className="object-cover" quality={90} />
        </motion.div>

        {/* Slider Handle */}
        <motion.div
          className="absolute top-0 bottom-0 w-1 bg-primary"
          style={{ left: `${sliderPosition}%` }}
          animate={{
            boxShadow: [
              "0 0 10px rgba(0, 255, 65, 0.5)",
              "0 0 20px rgba(0, 255, 65, 0.8)",
              "0 0 10px rgba(0, 255, 65, 0.5)",
            ],
          }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
            <div className="flex gap-1">
              <div className="w-0.5 h-4 bg-primary-foreground" />
              <div className="w-0.5 h-4 bg-primary-foreground" />
            </div>
          </div>
        </motion.div>

        {/* Labels */}
        <div className="absolute top-4 left-4 text-sm font-semibold text-white bg-black/50 px-3 py-1 rounded">
          Before
        </div>
        <div className="absolute top-4 right-4 text-sm font-semibold text-white bg-black/50 px-3 py-1 rounded">
          After
        </div>
      </motion.div>
    </div>
  )
}
