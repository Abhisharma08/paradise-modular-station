import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Footer from '@/components/landing/footer';
import Header from '@/components/landing/header';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Thank You - Urbangrey',
  description: 'Thank you for your interest in Urbangrey. We will get back to you shortly.',
  keywords: ['office furniture', 'thank you', 'contact success'],
};

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 text-center py-20">
            <div className="max-w-md mx-auto bg-card p-10 rounded-xl shadow-2xl">
                 <CheckCircle2 className="w-20 h-20 text-green-500 mb-6 mx-auto" />
                <h1 className="text-4xl font-bold font-headline text-primary mb-4">Thank You!</h1>
                <p className="text-lg text-muted-foreground mb-8">
                    Your request has been received. Our team will be in touch with you shortly.
                </p>
                <Button asChild size="lg">
                    <Link href="/">Back to Home</Link>
                </Button>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
