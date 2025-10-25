"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { BeforeAfterSlider } from "./before-after-slider"

const projects = [
  {
    id: 1,
    title: "Modern Backyard Transformation",
    category: "design",
    image: "https://images.pexels.com/photos/3935321/pexels-photo-3935321.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    before: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    after: "https://images.pexels.com/photos/3935321/pexels-photo-3935321.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description: "Complete landscape redesign with new hardscaping, planting beds, and irrigation system.",
    client: "The Johnson Family",
  },
  {
    id: 2,
    title: "Lawn Restoration Project",
    category: "lawn",
    image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    before: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    after: "https://images.pexels.com/photos/3935321/pexels-photo-3935321.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description: "Comprehensive lawn care including aeration, seeding, and treatment program.",
    client: "Smith Residence",
  },
  {
    id: 3,
    title: "Hardscape Installation",
    category: "hardscape",
    image: "https://images.pexels.com/photos/416994/pexels-photo-416994.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    before: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    after: "https://images.pexels.com/photos/416994/pexels-photo-416994.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description: "Beautiful patio and walkway installation with decorative stone.",
    client: "Williams Estate",
  },
  {
    id: 4,
    title: "Seasonal Cleanup",
    category: "maintenance",
    image: "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    before: "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    after: "https://images.pexels.com/photos/3935321/pexels-photo-3935321.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description: "Spring cleanup and preparation for the growing season.",
    client: "Brown Property",
  },
  {
    id: 5,
    title: "Tree & Shrub Care",
    category: "maintenance",
    image: "https://images.pexels.com/photos/3571468/pexels-photo-3571468.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    before: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    after: "https://images.pexels.com/photos/3571468/pexels-photo-3571468.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description: "Professional tree trimming and shrub maintenance.",
    client: "Davis Home",
  },
  {
    id: 6,
    title: "Complete Landscape Design",
    category: "design",
    image: "https://images.pexels.com/photos/3935321/pexels-photo-3935321.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    before: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    after: "https://images.pexels.com/photos/3935321/pexels-photo-3935321.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description: "Full property landscape design and installation.",
    client: "Miller Residence",
  },
]

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const categories = ["all", "lawn", "hardscape", "design", "maintenance"]
  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((p) => p.category === selectedCategory)

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Our </span>
            <span className="text-primary">Projects</span>
          </h2>
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
            Explore our portfolio of completed landscaping projects
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all capitalize ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "glass text-foreground hover:border-primary"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
                className="glass rounded-lg overflow-hidden cursor-pointer group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <p className="text-primary text-sm font-semibold mb-2 capitalize">{project.category}</p>
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-foreground/70 text-sm">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="glass rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="relative h-96">
                  <Image
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                    quality={90}
                  />
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold"
                  >
                    ×
                  </motion.button>
                </div>

                <div className="p-8 space-y-6">
                  <div>
                    <p className="text-primary text-sm font-semibold mb-2 capitalize">{selectedProject.category}</p>
                    <h2 className="text-3xl font-bold text-foreground mb-2">{selectedProject.title}</h2>
                    <p className="text-foreground/80">{selectedProject.description}</p>
                  </div>

                  <div className="bg-background/50 rounded-lg p-4">
                    <p className="text-sm text-foreground/60">Client</p>
                    <p className="text-lg font-semibold text-foreground">{selectedProject.client}</p>
                  </div>

                  <BeforeAfterSlider
                    before={selectedProject.before}
                    after={selectedProject.after}
                    title="Before & After"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
