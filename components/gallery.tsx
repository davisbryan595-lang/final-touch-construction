"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useInView } from "react-intersection-observer"

export default function Gallery() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      alt: "Beautiful lawn maintenance",
      category: "Lawn Care",
    },
    {
      src: "https://images.pexels.com/photos/3935321/pexels-photo-3935321.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      alt: "Landscape design project",
      category: "Design",
    },
    {
      src: "https://images.pexels.com/photos/3707440/pexels-photo-3707440.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      alt: "Hardscape patio installation",
      category: "Hardscaping",
    },
    {
      src: "https://images.pexels.com/photos/3571468/pexels-photo-3571468.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      alt: "Tree and shrub care",
      category: "Tree Service",
    },
    {
      src: "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      alt: "Seasonal garden cleanup",
      category: "Cleanup",
    },
    {
      src: "https://images.pexels.com/photos/3639361/pexels-photo-3639361.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      alt: "Garden mulching installation",
      category: "Mulching",
    },
  ]

  return (
    <section id="gallery" ref={ref} className="py-20 px-4 bg-gradient-to-b from-[#1a1f3a] to-[#0a0e27]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">
            Our <span className="text-[#00ff41]">Gallery</span>
          </h2>
          <p className="text-gray-400 text-lg font-urbanist">
            Showcase of our finest construction and renovation projects
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(index)}
              className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <p className="text-[#00ff41] text-sm font-poppins font-bold">{image.category}</p>
                  <p className="text-white font-urbanist">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl h-96"
            >
              <Image
                src={galleryImages[selectedImage].src || "/placeholder.svg"}
                alt={galleryImages[selectedImage].alt}
                fill
                className="object-cover rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-[#00ff41] text-black rounded-full flex items-center justify-center font-bold hover:bg-[#00cc33] transition-colors"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
