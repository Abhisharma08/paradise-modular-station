import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function MobileCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/80 p-4 backdrop-blur-sm md:hidden">
      <Button asChild className="w-full animate-glow bg-accent text-lg font-bold text-accent-foreground hover:bg-accent/90" size="lg">
        <Link href="#lead-form">Enquire Now</Link>
      </Button>
    </div>
  );
}
