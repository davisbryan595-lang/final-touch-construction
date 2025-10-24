import type React from "react"
import type { Metadata } from "next"
import { Poppins, Urbanist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-urbanist",
})

export const metadata: Metadata = {
  title: "Final Touch Construction | Professional Building & Renovation Services",
  description:
    "Professional construction and renovation services in Marysville, CA. Interior & exterior work, full renovations, and expert craftsmanship. Call (618) 308-1119 today!",
  keywords: "construction Marysville, home renovation, building contractor, construction services CA",
  openGraph: {
    title: "Final Touch Construction | Professional Building & Renovation Services",
    description: "Professional construction and renovation services in Marysville, CA",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Final Touch Construction LLC",
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/finaltouch-dbXFjiA8VbSt3aQgn2ejkhL76EEatS.jpg",
              description: "Professional construction and renovation services",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Marysville",
                addressRegion: "CA",
              },
              telephone: "(618) 308-1119",
              areaServed: ["Marysville", "Surrounding Areas"],
              serviceType: ["Construction", "Renovation", "Interior Work", "Exterior Work"],
            }),
          }}
        />
      </head>
      <body className={`${poppins.variable} ${urbanist.variable} font-urbanist antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
