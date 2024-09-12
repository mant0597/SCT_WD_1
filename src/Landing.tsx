'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    const target = document.getElementById('hero-section')
    if (target) {
      observer.observe(target)
    }

    return () => {
      if (target) {
        observer.unobserve(target)
      }
    }
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center ">
              <a href="#" className="text-2xl p-1 font-bold text-blue-700">
                SkillCraft  
              </a>
              
              <a href="#" className="text-2xl p-1 font-bold text-blue-500">
                Technology
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                      isScrolled
                        ? 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                        : 'text-gray-900 hover:bg-white/30 hover:text-blue-600'
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main>
        <section id="hero-section" className="h-screen flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-900">
            Welcome to Our Landing Page
          </h1>
        </section>
        <section id="features" className="min-h-screen bg-gray-100 flex items-center justify-center">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900">
            Features Section
          </h2>
        </section>
        <section id="pricing" className="min-h-screen flex items-center justify-center">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900">
            Pricing Section
          </h2>
        </section>
        <section id="contact" className="min-h-screen bg-gray-100 flex items-center justify-center">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900">
            Contact Section
          </h2>
        </section>
      </main>
    </div>
  )
}