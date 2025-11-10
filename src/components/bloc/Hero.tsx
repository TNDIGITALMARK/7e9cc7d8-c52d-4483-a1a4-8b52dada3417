'use client';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  ctaPrimary?: {
    text: string;
    href: string;
  };
  ctaSecondary?: {
    text: string;
    href: string;
  };
}

export default function Hero({
  title,
  subtitle,
  backgroundImage = '/images/hero-bg.jpg',
  ctaPrimary,
  ctaSecondary,
}: HeroProps) {
  return (
    <section
      className="relative h-[600px] flex items-center justify-center text-center"
      style={{
        backgroundImage: `linear-gradient(rgba(74, 55, 40, 0.7), rgba(74, 55, 40, 0.7)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container-custom relative z-10">
        <h1 className="text-light text-5xl md:text-6xl font-bold uppercase tracking-tight mb-4">
          {title}
        </h1>
        <p className="text-light-secondary text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          {subtitle}
        </p>
        {(ctaPrimary || ctaSecondary) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {ctaPrimary && (
              <a href={ctaPrimary.href} className="btn-primary inline-block">
                {ctaPrimary.text}
              </a>
            )}
            {ctaSecondary && (
              <a href={ctaSecondary.href} className="btn-secondary inline-block">
                {ctaSecondary.text}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
