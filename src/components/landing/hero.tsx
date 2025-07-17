import { QuoteForm } from "./quote-form";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-background">
      <div className="absolute inset-0 bg-black/60 z-10" />
      <Image
        src="https://urbangreyfurniture.com/wp-content/uploads/2025/06/Untitled-design-3-1.png"
        alt="Office furniture"
        fill
        className="object-cover"
        priority
      />
      <div className="container relative z-20 py-24 lg:py-40">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="font-headline text-5xl font-bold tracking-tight text-primary-foreground sm:text-6xl md:text-7xl">
              <span className="text-accent">Upgrade Your Workspace</span> with Urban Grey Furniture
            </h1>
            <p className="max-w-xl text-lg text-white lg:mx-0 mx-auto md:text-xl">
              Transform your workspace with stylish, functional furniture designed to boost productivity, collaboration, and comfort. Perfect for growing businesses and design-driven teams. Explore our curated collection today!
            </p>
          </div>
          <div>
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
