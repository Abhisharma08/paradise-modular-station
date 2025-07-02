import CtaSection from '@/components/landing/cta-section';
import Footer from '@/components/landing/footer';
import Header from '@/components/landing/header';
import HeroSection from '@/components/landing/hero-section';
import ShowcaseSection from '@/components/landing/showcase-section';
import UspSection from '@/components/landing/usp-section';
import { AnimatedSection } from '@/components/landing/animated-section';
import MobileCtaBar from '@/components/landing/mobile-cta-bar';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AnimatedSection>
          <UspSection />
        </AnimatedSection>
        <AnimatedSection>
          <ShowcaseSection />
        </AnimatedSection>
        <AnimatedSection>
          <CtaSection />
        </AnimatedSection>
      </main>
      <Footer />
      <MobileCtaBar />
    </div>
  );
}
