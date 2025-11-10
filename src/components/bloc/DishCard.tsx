'use client';

interface DishCardProps {
  name: string;
  description: string;
  culturalOrigin: string;
  ingredients: string[];
  price: string;
  imageUrl: string;
}

export default function DishCard({
  name,
  description,
  culturalOrigin,
  ingredients,
  price,
  imageUrl,
}: DishCardProps) {
  return (
    <div className="card group">
      <div className="relative overflow-hidden rounded-[var(--radius-sm)] mb-4">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-[hsl(var(--accent))] text-white px-3 py-1 rounded-full text-sm font-semibold">
          {price}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-[hsl(var(--secondary))] text-sm italic mb-3">
        {culturalOrigin}
      </p>
      <p className="text-[hsl(var(--foreground))] mb-4 text-sm leading-relaxed">
        {description}
      </p>
      <div className="border-t border-[hsl(var(--border))] pt-4">
        <p className="text-xs text-[hsl(var(--secondary))] font-semibold mb-2 uppercase tracking-wide">
          Key Ingredients:
        </p>
        <div className="flex flex-wrap gap-2">
          {ingredients.map((ingredient, index) => (
            <span
              key={index}
              className="text-xs bg-[hsl(var(--muted))] px-2 py-1 rounded"
            >
              {ingredient}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
