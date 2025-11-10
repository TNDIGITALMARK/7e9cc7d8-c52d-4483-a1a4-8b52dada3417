'use client';

import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--primary))] text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-light">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 flex-shrink-0 text-[hsl(var(--accent))]" />
                <p className="text-sm text-light-secondary">
                  123 Heritage Street<br />
                  Community Center, CA 90210
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="flex-shrink-0 text-[hsl(var(--accent))]" />
                <p className="text-sm text-light-secondary">(555) 123-4567</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="flex-shrink-0 text-[hsl(var(--accent))]" />
                <p className="text-sm text-light-secondary">hello@blocfood.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-light">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-sm text-light-secondary hover:text-[hsl(var(--accent))] transition-colors">
                  Heritage Menu
                </a>
              </li>
              <li>
                <a href="/impact" className="text-sm text-light-secondary hover:text-[hsl(var(--accent))] transition-colors">
                  Community Impact
                </a>
              </li>
              <li>
                <a href="/catering" className="text-sm text-light-secondary hover:text-[hsl(var(--accent))] transition-colors">
                  Catering Services
                </a>
              </li>
              <li>
                <a href="/about" className="text-sm text-light-secondary hover:text-[hsl(var(--accent))] transition-colors">
                  Our Story
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-light">Follow Us</h3>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[hsl(var(--accent))] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[hsl(var(--accent))] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[hsl(var(--accent))] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
            <p className="text-sm text-light-secondary mb-3">Stay updated with our latest offerings</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[hsl(var(--accent))]"
              />
              <button className="btn-primary">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm text-light-muted">
            © {new Date().getFullYear()} BLOC Food. All rights reserved. Created with pride and purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}
