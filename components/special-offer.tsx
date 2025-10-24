"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function SpecialOffer() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentOffer, setCurrentOffer] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const offers = [
    {
      title: "💥 Limited-Time Offer!",
      description: "10% OFF Your First Full Detail!",
      code: "SHINE10",
    },
    {
      title: "🎉 Spring Special!",
      description: "15% OFF All Exterior Work",
      code: "SPRING15",
    },
    {
      title: "👥 Returning Customer",
      description: "20% OFF Your Next Project",
      code: "RETURN20",
    },
  ]

  const handleClose = () => {
    setIsVisible(false)
  }

  const handleBooking = () => {
    const element = document.getElementById("contact")
    element?.scrollIntoView({ behavior: "smooth" })
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-md w-full bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] rounded-lg p-8 border-2 border-[#00ff41] shadow-2xl shadow-[#00ff41]/30"
          >
            {/* Close button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleClose}
              className="absolute top-4 right-4 w-8 h-8 bg-[#00ff41] text-black rounded-full flex items-center justify-center font-bold hover:bg-[#00cc33] transition-colors"
            >
              ✕
            </motion.button>

            {/* Offer carousel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentOffer}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-6"
              >
                <h3 className="text-2xl font-poppins font-bold text-white mb-2">{offers[currentOffer].title}</h3>
                <p className="text-xl text-[#00ff41] font-poppins font-bold mb-4">{offers[currentOffer].description}</p>
                <div className="bg-[#00ff41]/10 border border-[#00ff41] rounded-lg p-4 mb-6">
                  <p className="text-gray-400 text-sm mb-2 font-urbanist">Use code:</p>
                  <p className="text-2xl font-poppins font-bold text-[#00ff41]">{offers[currentOffer].code}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Buttons */}
            <div className="space-y-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleBooking}
                className="w-full py-3 bg-[#00ff41] text-black font-poppins font-bold rounded-lg hover:bg-[#00cc33] transition-colors"
              >
                Book Now
              </motion.button>

              {/* Offer indicators */}
              <div className="flex justify-center gap-2">
                {offers.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentOffer(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentOffer ? "bg-[#00ff41] w-6" : "bg-gray-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
