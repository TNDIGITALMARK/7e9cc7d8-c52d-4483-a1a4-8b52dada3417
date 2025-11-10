'use client';

import { LucideIcon } from 'lucide-react';

interface ImpactMetricProps {
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
}

export default function ImpactMetric({
  icon: Icon,
  value,
  label,
  description,
}: ImpactMetricProps) {
  return (
    <div className="card text-center">
      <div className="w-16 h-16 bg-[hsl(var(--accent))]/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon size={32} className="text-[hsl(var(--accent))]" />
      </div>
      <h3 className="text-4xl font-bold text-[hsl(var(--accent))] mb-2">
        {value}
      </h3>
      <h4 className="text-lg font-semibold mb-2">{label}</h4>
      <p className="text-sm text-[hsl(var(--secondary))]">{description}</p>
    </div>
  );
}
