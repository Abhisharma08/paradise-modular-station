import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CtaSection() {
  return (
    <section className="w-full py-24 md:py-40 bg-gradient-to-r from-primary to-blue-600" id="contact">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-headline text-primary-foreground">
            Ready to Shape Your Space?
          </h2>
          <p className="mt-6 mb-10 text-primary-foreground/90 md:text-xl/relaxed">
            Download our latest catalogue to explore our full collection of design-led furniture and get a personalized quote for your project.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-7 shadow-lg transform hover:scale-105 transition-transform">
            <Link href="#lead-form">Download Our Catalogue</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
