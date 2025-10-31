import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Poppins, Courier_Prime, Press_Start_2P } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _poppins = Poppins({ weight: ["400", "600", "700", "800"], subsets: ["latin"] })
const _courierPrime = Courier_Prime({ weight: ["400", "700"], subsets: ["latin"] })
const _pressStart2P = Press_Start_2P({ weight: "400", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ranjith N M | Software Engineer",
  description: "Portfolio of Ranjith N M - Aspiring Software Engineer | Creative Problem Solver | Gamer",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_pressStart2P.className} antialiased`}>{children}</body>
    </html>
  )
}
