import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTA() {
  return (
    <section id="contact">
      <div className="bg-card">
        <div className="container py-24 text-center text-secondary-foreground">
          <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            Ready to Transform Your Workspace?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-secondary-foreground/80 md:text-xl">
            Explore our complete range of workstation solutions designed to elevate your office environment. Get in touch for a customized quote tailored to your needs.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg">
              <Link href="#get-a-quote">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
