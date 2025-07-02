import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Footer from '@/components/landing/footer';
import Header from '@/components/landing/header';
import { AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: '404: Page Not Found - Urbangrey',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 text-center py-20">
          <div className="max-w-md mx-auto bg-card p-10 rounded-xl shadow-2xl">
            <AlertTriangle className="w-20 h-20 text-destructive mb-6 mx-auto" />
            <h1 className="text-4xl font-bold font-headline text-primary mb-4">404 - Page Not Found</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Sorry, the page you're looking for doesn't exist or has been moved.
            </p>
            <Button asChild size="lg">
              <Link href="/">Go Back Home</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
