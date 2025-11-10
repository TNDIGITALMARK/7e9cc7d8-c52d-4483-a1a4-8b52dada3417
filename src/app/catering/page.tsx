'use client';

import Navigation from '@/components/bloc/Navigation';
import Footer from '@/components/bloc/Footer';
import Hero from '@/components/bloc/Hero';
import CateringPackage from '@/components/bloc/CateringPackage';
import { cateringPackages, testimonials } from '@/lib/data/mockData';
import { Calendar, Clock, Users, Utensils, Star } from 'lucide-react';
import { useState } from 'react';

export default function CateringPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    guestCount: '',
    eventType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you! We will contact you within 24 hours to discuss your catering needs.');
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <Hero
        title="Catering & Events"
        subtitle="Transform your gathering into a meaningful cultural experience with BLOC Food catering"
        backgroundImage="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1600&h=900&fit=crop"
      />

      {/* Why Choose BLOC Catering */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose BLOC Food Catering</h2>
            <p className="text-xl text-[hsl(var(--secondary))] leading-relaxed">
              We don't just cater events—we create transformative cultural experiences that educate,
              unite, and inspire your guests while supporting local communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[hsl(var(--accent))]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils size={40} className="text-[hsl(var(--accent))]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Heritage Cuisine</h3>
              <p className="text-[hsl(var(--secondary))]">
                Authentic dishes celebrating Black and Native American culinary traditions
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[hsl(var(--accent))]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={40} className="text-[hsl(var(--accent))]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community Impact</h3>
              <p className="text-[hsl(var(--secondary))]">
                Portion of proceeds support local minority suppliers and cultural initiatives
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[hsl(var(--accent))]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar size={40} className="text-[hsl(var(--accent))]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Cultural Education</h3>
              <p className="text-[hsl(var(--secondary))]">
                Story cards and optional presentations about dish origins and significance
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[hsl(var(--accent))]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={40} className="text-[hsl(var(--accent))]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Full Service</h3>
              <p className="text-[hsl(var(--secondary))]">
                Professional setup, service staff, and complete event coordination
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Catering Packages */}
      <section className="section-spacing bg-[hsl(var(--background))]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Catering Packages</h2>
            <p className="text-lg text-[hsl(var(--secondary))] max-w-3xl mx-auto">
              Choose the package that fits your event size and needs. All packages are customizable
              to accommodate dietary restrictions and cultural preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cateringPackages.map((pkg, index) => (
              <CateringPackage
                key={index}
                name={pkg.name}
                description={pkg.description}
                guestRange={pkg.guestRange}
                priceRange={pkg.priceRange}
                features={pkg.features}
                highlighted={pkg.highlighted}
              />
            ))}
          </div>

          <div className="mt-12 p-8 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Package?</h3>
            <p className="text-[hsl(var(--secondary))] mb-6">
              We're happy to create a tailored catering solution for your unique event needs,
              dietary requirements, or cultural preferences.
            </p>
            <button className="btn-primary">
              Contact Us for Custom Quote
            </button>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-8 text-center">Perfect For These Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Juneteenth Celebrations',
              'Family Reunions',
              'Cultural Heritage Events',
              'Community Gatherings',
              'Corporate Diversity Events',
              'Wedding Receptions',
              'Nonprofit Fundraisers',
              'Educational Workshops',
              'Holiday Celebrations',
              'Church & Faith Events',
              'Indigenous Peoples Day',
              'Black History Month Events'
            ].map((eventType, index) => (
              <div
                key={index}
                className="p-4 bg-[hsl(var(--background))] rounded-lg border border-[hsl(var(--border))] hover:border-[hsl(var(--accent))] transition-colors"
              >
                <p className="font-semibold text-center">{eventType}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-spacing bg-[hsl(var(--background))]">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-12 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-[hsl(var(--accent))] fill-current"
                    />
                  ))}
                </div>
                <p className="text-[hsl(var(--foreground))] mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-[hsl(var(--border))] pt-4">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-[hsl(var(--secondary))]">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Quote Form */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Request a Catering Quote</h2>
              <p className="text-lg text-[hsl(var(--secondary))]">
                Tell us about your event and we'll create a custom proposal within 24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Estimated Guest Count *
                  </label>
                  <input
                    type="number"
                    required
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                    className="w-full"
                    placeholder="50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Event Type *
                  </label>
                  <select
                    required
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full"
                  >
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="reunion">Family Reunion</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="cultural">Cultural Celebration</option>
                    <option value="nonprofit">Nonprofit Event</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Additional Details
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full"
                  placeholder="Tell us about your event, dietary restrictions, cultural preferences, or any special requests..."
                />
              </div>

              <div className="text-center">
                <button type="submit" className="btn-primary">
                  Request Catering Quote
                </button>
                <p className="text-sm text-[hsl(var(--secondary))] mt-4">
                  We'll respond within 24 hours with a detailed proposal
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-spacing bg-[hsl(var(--primary))] text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6 text-light">
            Questions About Catering?
          </h2>
          <p className="text-xl mb-8 text-light-secondary max-w-2xl mx-auto">
            Our catering team is here to help you plan the perfect culturally meaningful event
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Call (555) 123-4567
            </button>
            <button className="btn-secondary">
              Email hello@blocfood.com
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
