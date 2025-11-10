'use client';

import Navigation from '@/components/bloc/Navigation';
import Footer from '@/components/bloc/Footer';
import Hero from '@/components/bloc/Hero';
import ImpactMetric from '@/components/bloc/ImpactMetric';
import { impactMetrics, supplierSpotlights } from '@/lib/data/mockData';
import { DollarSign, Users, BookOpen, Heart, Target, Sparkles } from 'lucide-react';

const iconMap = {
  DollarSign,
  Users,
  BookOpen,
  Heart
};

export default function ImpactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <Hero
        title="Community Impact & Cultural Healing"
        subtitle="Every meal creates positive change. See how BLOC Food empowers communities through food."
        backgroundImage="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1600&h=900&fit=crop"
      />

      {/* Mission Statement */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">More Than a Restaurant</h2>
            <p className="text-xl text-[hsl(var(--secondary))] leading-relaxed mb-8">
              BLOC Food exists to create cultural healing, economic empowerment, and community unity
              through every dish we serve. We measure our success not just in meals sold, but in
              lives touched and communities strengthened.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-[hsl(var(--background))] rounded-lg">
                <Target size={40} className="text-[hsl(var(--accent))] mx-auto mb-3" />
                <h4 className="font-bold mb-2">Our Mission</h4>
                <p className="text-sm text-[hsl(var(--secondary))]">
                  Bridge cultures through food while empowering minority suppliers
                </p>
              </div>
              <div className="p-6 bg-[hsl(var(--background))] rounded-lg">
                <Heart size={40} className="text-[hsl(var(--accent))] mx-auto mb-3" />
                <h4 className="font-bold mb-2">Our Values</h4>
                <p className="text-sm text-[hsl(var(--secondary))]">
                  Faith, integrity, cultural pride, and community-first thinking
                </p>
              </div>
              <div className="p-6 bg-[hsl(var(--background))] rounded-lg">
                <Sparkles size={40} className="text-[hsl(var(--accent))] mx-auto mb-3" />
                <h4 className="font-bold mb-2">Our Vision</h4>
                <p className="text-sm text-[hsl(var(--secondary))]">
                  Nationwide movement celebrating heritage through sustainable food systems
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="section-spacing bg-[hsl(var(--background))]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Impact by the Numbers</h2>
            <p className="text-lg text-[hsl(var(--secondary))] max-w-3xl mx-auto">
              Transparent reporting of how BLOC Food creates measurable community impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => {
              const IconComponent = iconMap[metric.icon as keyof typeof iconMap];
              return (
                <ImpactMetric
                  key={index}
                  icon={IconComponent}
                  value={metric.value}
                  label={metric.label}
                  description={metric.description}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Supplier Spotlights */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Meet Our Supplier Partners</h2>
            <p className="text-lg text-[hsl(var(--secondary))] max-w-3xl mx-auto">
              100% of our ingredients come from local minority-owned farms and cooperatives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supplierSpotlights.map((supplier, index) => (
              <div key={index} className="card">
                <div className="h-48 bg-[hsl(var(--muted))] rounded-[var(--radius-sm)] mb-4 flex items-center justify-center">
                  <Heart size={60} className="text-[hsl(var(--accent))]" />
                </div>
                <h3 className="text-xl font-bold mb-2">{supplier.name}</h3>
                <p className="text-sm text-[hsl(var(--secondary))] italic mb-3">
                  {supplier.location}
                </p>
                <p className="text-[hsl(var(--foreground))] mb-4">
                  {supplier.description}
                </p>
                <div className="border-t border-[hsl(var(--border))] pt-4">
                  <p className="text-xs text-[hsl(var(--secondary))] font-semibold mb-2 uppercase tracking-wide">
                    Products Supplied:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {supplier.products.map((product, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))] px-2 py-1 rounded"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-primary">
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      {/* Community Programs */}
      <section className="section-spacing bg-[hsl(var(--background))]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Community Programs</h2>

            <div className="space-y-8">
              <div className="card">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-[hsl(var(--accent))]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen size={32} className="text-[hsl(var(--accent))]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Heritage Cooking Classes</h3>
                    <p className="text-[hsl(var(--secondary))] mb-4">
                      Monthly workshops teaching traditional Black and Native American cooking techniques.
                      Participants learn cultural significance, ingredient sourcing, and sustainable practices
                      while preparing authentic heritage dishes.
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="text-[hsl(var(--accent))] font-semibold">
                        📅 Monthly sessions
                      </span>
                      <span className="text-[hsl(var(--accent))] font-semibold">
                        👥 12-15 participants
                      </span>
                      <span className="text-[hsl(var(--accent))] font-semibold">
                        💰 Scholarship available
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-[hsl(var(--accent))]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users size={32} className="text-[hsl(var(--accent))]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Community Event Sponsorships</h3>
                    <p className="text-[hsl(var(--secondary))] mb-4">
                      We donate catering services for community organizations hosting cultural celebrations,
                      educational events, and unity gatherings. Priority given to grassroots organizations
                      focused on cultural healing and empowerment.
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="text-[hsl(var(--accent))] font-semibold">
                        🎉 45+ events annually
                      </span>
                      <span className="text-[hsl(var(--accent))] font-semibold">
                        🤝 Non-profit priority
                      </span>
                      <span className="text-[hsl(var(--accent))] font-semibold">
                        📋 Apply online
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-[hsl(var(--accent))]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart size={32} className="text-[hsl(var(--accent))]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Supplier Development Fund</h3>
                    <p className="text-[hsl(var(--secondary))] mb-4">
                      10% of all profits invested directly into helping minority-owned farms and food
                      producers scale their operations, access resources, and reach new markets. We provide
                      technical assistance, equipment grants, and business mentorship.
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="text-[hsl(var(--accent))] font-semibold">
                        💵 10% profit commitment
                      </span>
                      <span className="text-[hsl(var(--accent))] font-semibold">
                        🌱 Growth support
                      </span>
                      <span className="text-[hsl(var(--accent))] font-semibold">
                        🎓 Mentorship included
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-spacing bg-[hsl(var(--primary))] text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Join the Movement
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Every meal you enjoy with BLOC Food creates positive ripple effects throughout the community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Support Through Orders
            </button>
            <button className="btn-secondary">
              Become a Supplier Partner
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
