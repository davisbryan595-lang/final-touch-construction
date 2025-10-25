"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    text: "Final Touch completely transformed our backyard. The team was professional, punctual, and the results exceeded our expectations. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Property Manager",
    image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    text: "We've been using Final Touch for our commercial properties for 3 years. Their consistency and attention to detail is unmatched.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Homeowner",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    text: "The team listened to our vision and brought it to life beautifully. Our lawn has never looked better. Thank you!",
    rating: 5,
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Business Owner",
    image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    text: "Professional, reliable, and affordable. Final Touch is our go-to landscaping company. Couldn't ask for better service.",
    rating: 5,
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [autoplay])

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
    setAutoplay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoplay(false)
  }

  return (
    <section id="testimonials" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">What Our </span>
            <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-foreground/80 text-lg">Real feedback from satisfied customers</p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-lg p-8 md:p-12"
            >
              <div className="flex flex-col items-center text-center space-y-6">
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <span key={i} className="text-primary text-2xl">
                      ★
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xl text-foreground/90 italic leading-relaxed">"{testimonials[current].text}"</p>

                {/* Author */}
                <div className="flex flex-col items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                    <Image
                      src={testimonials[current].image || "/placeholder.svg"}
                      alt={testimonials[current].name}
                      fill
                      className="object-cover"
                      quality={90}
                    />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{testimonials[current].name}</p>
                    <p className="text-primary text-sm">{testimonials[current].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary hover:bg-primary/10 transition-colors"
            >
              ←
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => {
                    setCurrent(index)
                    setAutoplay(false)
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current ? "bg-primary w-8" : "bg-foreground/30"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary hover:bg-primary/10 transition-colors"
            >
              →
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
