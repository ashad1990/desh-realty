"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Home } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-dark text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Home className="text-primary" size={28} />
            <span className="text-xl font-bold">Desh Realty</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/services" className="hover:text-primary transition-colors">
              Services
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className="block py-2 hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block py-2 hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="block py-2 hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Services
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
