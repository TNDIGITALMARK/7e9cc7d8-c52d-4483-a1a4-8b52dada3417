'use client';

import { Check } from 'lucide-react';

interface CateringPackageProps {
  name: string;
  description: string;
  guestRange: string;
  priceRange: string;
  features: string[];
  highlighted?: boolean;
}

export default function CateringPackage({
  name,
  description,
  guestRange,
  priceRange,
  features,
  highlighted = false,
}: CateringPackageProps) {
  return (
    <div
      className={`card ${
        highlighted
          ? 'border-2 border-[hsl(var(--accent))] shadow-lg'
          : ''
      }`}
    >
      {highlighted && (
        <div className="bg-[hsl(var(--accent))] text-white text-center py-2 -mx-6 -mt-6 mb-6 rounded-t-[var(--radius)] font-semibold">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className="text-[hsl(var(--secondary))] mb-4">{description}</p>
      <div className="flex items-baseline gap-2 mb-6">
        <span className="text-4xl font-bold text-[hsl(var(--accent))]">
          {priceRange}
        </span>
        <span className="text-[hsl(var(--secondary))] text-sm">
          {guestRange}
        </span>
      </div>
      <div className="border-t border-[hsl(var(--border))] pt-6 space-y-3 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <Check
              size={20}
              className="text-[hsl(var(--accent))] flex-shrink-0 mt-0.5"
            />
            <p className="text-sm">{feature}</p>
          </div>
        ))}
      </div>
      <button className="btn-primary w-full">
        Request Quote
      </button>
    </div>
  );
}
