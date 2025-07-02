import Image from 'next/image';
import LeadCaptureForm from "./lead-capture-form";

export default function HeroSection() {
  return (
    <section className="w-full pt-24 md:pt-32 pb-20 md:pb-24 relative" id="home">
       <div className="absolute inset-0 bg-secondary/50 z-0">
         <Image 
            src="https://placehold.co/1920x1080.png" 
            alt="Modern office background"
            fill
            className="object-cover opacity-20"
            data-ai-hint="modern office"
            priority
          />
       </div>
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center relative z-10">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-primary font-headline">
            Designing the Future of Work and Living
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-lg mx-auto md:mx-0">
            At Urbangrey, we craft furniture that blends design excellence and functionality, creating solutions that elevate every space.
          </p>
        </div>
        <div className="flex justify-center">
          <LeadCaptureForm />
        </div>
      </div>
    </section>
  );
}
