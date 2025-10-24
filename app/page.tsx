"use client"

import { useEffect, useState } from "react"
import Preloader from "@/components/preloader"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Gallery from "@/components/gallery"
import Pricing from "@/components/pricing"
import SpecialOffer from "@/components/special-offer"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import CursorTrail from "@/components/cursor-trail"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading && <Preloader />}
      <CursorTrail />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Pricing />
      <SpecialOffer />
      <Contact />
      <Footer />
    </>
  )
}
