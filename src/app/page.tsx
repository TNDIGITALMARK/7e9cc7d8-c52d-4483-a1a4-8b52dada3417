'use client';

import Navigation from '@/components/bloc/Navigation';
import Footer from '@/components/bloc/Footer';
import Hero from '@/components/bloc/Hero';
import DishCard from '@/components/bloc/DishCard';
import { heritageDishes } from '@/lib/data/mockData';
import { Heart, Leaf, Users } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <Hero
        title="BLOC Food: Where Heritage Meets Modern Cuisine"
        subtitle="Experience authentic soul and Native American traditions in every dish. More than a meal - a movement."
        backgroundImage="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1600&h=900&fit=crop"
        ctaPrimary={{ text: "Explore Menu", href: "#menu" }}
        ctaSecondary={{ text: "Book Catering", href: "/catering" }}
      />

      {/* Our Story Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-[hsl(var(--secondary))] leading-relaxed mb-4">
              Founded by Samuel Ambrose, BLOC Food is more than a restaurant—it's a movement celebrating
              the rich culinary heritage of Black and Native American traditions. We believe food is a
              bridge between cultures, a healer of communities, and a powerful force for unity.
            </p>
            <p className="text-lg text-[hsl(var(--secondary))] leading-relaxed">
              Every dish honors ancestral wisdom while embracing modern health and sustainability. We source
              exclusively from local minority-owned farms, ensuring purpose and pride in every meal.
            </p>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[hsl(var(--accent))]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={40} className="text-[hsl(var(--accent))]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Cultural Pride</h3>
              <p className="text-[hsl(var(--secondary))]">
                Honoring Black and Native American culinary traditions with authenticity and respect
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[hsl(var(--accent))]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf size={40} className="text-[hsl(var(--accent))]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Local Sourcing</h3>
              <p className="text-[hsl(var(--secondary))]">
                100% minority-owned supplier partnerships ensuring quality and community impact
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[hsl(var(--accent))]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={40} className="text-[hsl(var(--accent))]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community First</h3>
              <p className="text-[hsl(var(--secondary))]">
                Every meal contributes to cultural education and community empowerment initiatives
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Menu Section */}
      <section id="menu" className="section-spacing bg-[hsl(var(--background))]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Culinary Journey</h2>
            <p className="text-lg text-[hsl(var(--secondary))] max-w-3xl mx-auto">
              Each dish tells a story of heritage, unity, and modern innovation. Experience flavors
              that nourish both body and soul.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {heritageDishes.map((dish) => (
              <DishCard
                key={dish.id}
                name={dish.name}
                description={dish.description}
                culturalOrigin={dish.culturalOrigin}
                ingredients={dish.ingredients}
                price={dish.price}
                imageUrl={dish.imageUrl}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-primary">
              View Full Menu & Order Online
            </button>
          </div>
        </div>
      </section>

      {/* Fresh From Our Farm Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Fresh From Our Farm Partners</h2>
              <p className="text-lg text-[hsl(var(--secondary))] mb-6 leading-relaxed">
                We work directly with local minority-owned farms to bring you the freshest, most
                flavorful ingredients. Every purchase supports family farms and strengthens our
                community's food system.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[hsl(var(--accent))] rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Johnson Family Farms</h4>
                    <p className="text-sm text-[hsl(var(--secondary))]">
                      Organic greens and root vegetables from a third-generation Black-owned farm
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[hsl(var(--accent))] rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Red Cedar Indigenous Foods</h4>
                    <p className="text-sm text-[hsl(var(--secondary))]">
                      Traditional ingredients and wild-harvested goods from Native American cooperative
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[hsl(var(--accent))] rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Heritage Grains Collective</h4>
                    <p className="text-sm text-[hsl(var(--secondary))]">
                      Ancient grains and traditional corn varieties from minority-owned cooperative
                    </p>
                  </div>
                </div>
              </div>
              <button className="btn-secondary mt-8">
                Meet Our Suppliers
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop"
                alt="Farm fresh produce"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-spacing bg-[hsl(var(--primary))] text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6 text-light">
            Ready to Experience BLOC Food?
          </h2>
          <p className="text-xl mb-8 text-light-secondary max-w-2xl mx-auto">
            Join us in celebrating heritage, supporting local communities, and enjoying exceptional cuisine
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Order for Pickup or Delivery
            </button>
            <button className="btn-secondary">
              Book Catering for Your Event
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}