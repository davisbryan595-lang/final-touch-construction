"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2800)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27]"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Animated background elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute inset-0 opacity-20"
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00ff41] rounded-full blur-3xl" />
        </motion.div>

        <div className="relative z-10 text-center">
          {/* Logo animation */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto relative">
              {/* House outline animation */}
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2">
                <motion.path
                  d="M 20 80 L 50 30 L 80 80 Z"
                  stroke="#00ff41"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5 }}
                />
                <motion.rect
                  x="35"
                  y="50"
                  width="30"
                  height="30"
                  stroke="#00ff41"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                />
              </svg>

              {/* Shine trail effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00ff41] to-transparent opacity-50"
                animate={{
                  x: [-100, 100],
                }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          {/* Text animation */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl font-poppins font-bold text-white mb-4"
          >
            Final Touch
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-[#00ff41] text-lg font-poppins font-bold"
          >
            Building Your Dreams...
          </motion.p>

          {/* Loading bar */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="mt-8 h-1 bg-gradient-to-r from-[#00ff41] to-transparent rounded-full"
          />
        </div>
      </div>
    </motion.div>
  )
}
