'use client';

import Navigation from '@/components/bloc/Navigation';
import Footer from '@/components/bloc/Footer';
import Hero from '@/components/bloc/Hero';
import { Heart, Target, Award, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <Hero
        title="About BLOC Food"
        subtitle="A movement celebrating cultural heritage, community healing, and culinary excellence"
        backgroundImage="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600&h=900&fit=crop"
      />

      {/* Founder Story */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Meet Samuel Ambrose</h2>
              <p className="text-lg text-[hsl(var(--secondary))] mb-4 leading-relaxed">
                Samuel Ambrose founded BLOC Food with a simple yet powerful vision: to create a space
                where Black and Native American culinary traditions could merge, thrive, and educate
                future generations.
              </p>
              <p className="text-lg text-[hsl(var(--secondary))] mb-4 leading-relaxed">
                Growing up between two rich cultural worlds, Samuel witnessed firsthand how food serves
                as a bridge between communities, a teacher of history, and a catalyst for healing. BLOC
                Food embodies his commitment to honoring ancestral wisdom while embracing modern innovation.
              </p>
              <p className="text-lg text-[hsl(var(--secondary))] leading-relaxed">
                "Every dish we serve carries the stories of generations. When people taste our food, they're
                not just experiencing flavors—they're connecting with cultural heritage, supporting local
                communities, and participating in a movement toward unity and healing."
              </p>
              <div className="mt-6 p-6 bg-[hsl(var(--background))] rounded-lg">
                <p className="font-semibold italic text-[hsl(var(--accent))]">
                  "Food is medicine, food is history, food is community. At BLOC Food, we honor all three."
                </p>
                <p className="text-sm text-[hsl(var(--secondary))] mt-2">
                  — Samuel Ambrose, Founder
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&h=600&fit=crop"
                alt="Founder Samuel Ambrose"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-spacing bg-[hsl(var(--background))]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-[hsl(var(--secondary))] max-w-3xl mx-auto">
              These principles guide every decision we make and every dish we create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[hsl(var(--accent))]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart size={24} className="text-[hsl(var(--accent))]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Faith & Integrity</h3>
                  <p className="text-[hsl(var(--secondary))]">
                    Grounded in faith and committed to operating with complete transparency and ethical practices
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[hsl(var(--accent))]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award size={24} className="text-[hsl(var(--accent))]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Cultural Pride</h3>
                  <p className="text-[hsl(var(--secondary))]">
                    Celebrating Black and Native American heritage with authenticity, respect, and educational purpose
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[hsl(var(--accent))]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target size={24} className="text-[hsl(var(--accent))]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Community Empowerment</h3>
                  <p className="text-[hsl(var(--secondary))]">
                    Every action creates positive economic impact and strengthens local minority-owned businesses
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[hsl(var(--accent))]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={24} className="text-[hsl(var(--accent))]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Health & Innovation</h3>
                  <p className="text-[hsl(var(--secondary))]">
                    Honoring traditional recipes while embracing modern health practices and sustainable sourcing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision for the Future */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Vision for the Future</h2>

            <div className="space-y-8">
              <div className="border-l-4 border-[hsl(var(--accent))] pl-6">
                <h3 className="text-2xl font-bold mb-3">Frozen Meal Line</h3>
                <p className="text-[hsl(var(--secondary))]">
                  Bringing BLOC Food's heritage meals to homes nationwide through a carefully crafted frozen
                  meal line that maintains cultural authenticity and nutritional integrity. Making our mission
                  accessible to families everywhere.
                </p>
              </div>

              <div className="border-l-4 border-[hsl(var(--accent))] pl-6">
                <h3 className="text-2xl font-bold mb-3">Franchise Expansion</h3>
                <p className="text-[hsl(var(--secondary))]">
                  Growing the BLOC Food movement through carefully selected franchise partnerships that share
                  our commitment to cultural authenticity, community impact, and local sourcing. Each location
                  will serve as a cultural hub in its community.
                </p>
              </div>

              <div className="border-l-4 border-[hsl(var(--accent))] pl-6">
                <h3 className="text-2xl font-bold mb-3">BLOC Food Truck</h3>
                <p className="text-[hsl(var(--secondary))]">
                  Taking our heritage cuisine directly to communities through a mobile food truck that serves
                  neighborhoods, attends cultural events, and brings educational programming about food heritage
                  wherever it's needed most.
                </p>
              </div>

              <div className="border-l-4 border-[hsl(var(--accent))] pl-6">
                <h3 className="text-2xl font-bold mb-3">Cultural Education Center</h3>
                <p className="text-[hsl(var(--secondary))]">
                  Establishing a dedicated space for cooking classes, cultural workshops, and community
                  gatherings that deepen understanding of Black and Native American culinary traditions while
                  building connections across diverse communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="section-spacing bg-[hsl(var(--primary))] text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Be Part of the Movement
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Whether you're a customer, supplier partner, or community member, there's a place for you
            in the BLOC Food family
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Order Our Heritage Meals
            </button>
            <button className="btn-secondary">
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
