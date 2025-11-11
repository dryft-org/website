"use client"

import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/95 border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
            <span className="text-primary-foreground font-bold text-lg">D</span>
          </div>
          <span className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">DRYFT</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#mission" className="text-sm font-medium hover:text-primary transition-colors">
            Mission
          </Link>
          <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="#vehicles" className="text-sm font-medium hover:text-primary transition-colors">
            Vehicles
          </Link>
          <Link href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
            FAQ
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex gap-4">
          <Link
            href="#contact"
            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors font-medium text-sm"
          >
            Contact
          </Link>
          <Link
            href="#partner"
            className="px-6 py-2 rounded-full bg-primary text-primary-foreground hover:bg-accent transition-colors font-medium text-sm"
          >
            Partner With Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background p-4">
          <nav className="flex flex-col gap-4">
            <Link href="#mission" className="text-sm font-medium hover:text-primary">
              Mission
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-primary">
              Services
            </Link>
            <Link href="#vehicles" className="text-sm font-medium hover:text-primary">
              Vehicles
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-primary">
              FAQ
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
            <Link href="#partner" className="text-sm font-medium hover:text-primary">
              Partner
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
