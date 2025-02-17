"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-gray-800 to-purple-700 shadow-md animate__animated animate__fadeIn">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white transform transition duration-500 hover:scale-110">
            Agentia AI
          </Link>
          <div className="hidden sm:flex space-x-6">
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/models"
                  className="text-gray-300 hover:text-white transition duration-300 transform hover:scale-110"
                >
                  AI Models
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="text-gray-300 hover:text-white transition duration-300 transform hover:scale-110"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition duration-300 transform hover:scale-110"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition duration-300 transform hover:scale-110"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <Link href="/signin">
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg shadow-md transition duration-300 transform hover:scale-110">
                Sign In
              </button>
            </Link>
          </div>
          <button className="sm:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="sm:hidden mt-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link href="/models" className="text-gray-300 hover:text-white transition duration-300">
                  AI Models
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-300 hover:text-white transition duration-300">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/signin">
                  <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg shadow-md transition duration-300 w-full">
                    Sign In
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}

