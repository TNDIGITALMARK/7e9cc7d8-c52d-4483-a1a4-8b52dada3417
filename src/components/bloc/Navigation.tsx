'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[hsl(var(--primary))] text-white sticky top-0 z-50 shadow-md">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[hsl(var(--accent))] rounded flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <span className="font-bold text-xl tracking-tight">BLOC Food</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="hover:text-[hsl(var(--accent))] transition-colors font-medium"
            >
              MENU
            </Link>
            <Link
              href="/impact"
              className="hover:text-[hsl(var(--accent))] transition-colors font-medium"
            >
              COMMUNITY
            </Link>
            <Link
              href="/catering"
              className="hover:text-[hsl(var(--accent))] transition-colors font-medium"
            >
              CATERING
            </Link>
            <Link
              href="/about"
              className="hover:text-[hsl(var(--accent))] transition-colors font-medium"
            >
              ABOUT US
            </Link>
            <button className="btn-primary">
              ORDER NOW
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 space-y-4">
            <Link
              href="/"
              className="block hover:text-[hsl(var(--accent))] transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              MENU
            </Link>
            <Link
              href="/impact"
              className="block hover:text-[hsl(var(--accent))] transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              COMMUNITY
            </Link>
            <Link
              href="/catering"
              className="block hover:text-[hsl(var(--accent))] transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              CATERING
            </Link>
            <Link
              href="/about"
              className="block hover:text-[hsl(var(--accent))] transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT US
            </Link>
            <button className="btn-primary w-full">
              ORDER NOW
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
