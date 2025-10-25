"use client"

import { Preloader } from "@/components/preloader"
import { AnimatedBackground } from "@/components/animated-background"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { Testimonials } from "@/components/testimonials"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import SpecialOffer from "@/components/special-offer"

export default function Home() {
  return (
    <main className="relative bg-background text-foreground overflow-hidden">
      <Preloader />
      <AnimatedBackground />
      <SpecialOffer />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <ContactForm />
        <Footer />
      </div>
    </main>
  )
}
