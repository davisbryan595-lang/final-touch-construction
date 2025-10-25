import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Final Touch Landscaping | Professional Lawn & Landscape Design",
  description:
    "Premium landscaping services in Van Nuys, CA. Expert lawn maintenance, landscape design, hardscaping, and more. Get your free quote today!",
  generator: "v0.app",
  openGraph: {
    title: "Final Touch Landscaping | Professional Lawn & Landscape Design",
    description:
      "Premium landscaping services in Van Nuys, CA. Expert lawn maintenance, landscape design, hardscaping, and more.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Final Touch Landscaping",
              image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
              description:
                "Professional landscaping services including lawn maintenance, landscape design, hardscaping, and more.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1710 Akin Road",
                addressLocality: "Van Nuys",
                addressRegion: "CA",
                postalCode: "91405",
                addressCountry: "US",
              },
              telephone: "(618) 308-1119",
              email: "Finaltouchlandscaping75@gmail.com",
              priceRange: "$$",
              areaServed: {
                "@type": "City",
                name: "Van Nuys, CA",
              },
              sameAs: [
                "https://www.facebook.com/finaltouchlandscaping",
                "https://www.instagram.com/finaltouchlandscaping",
              ],
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  )
}
