import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center" prefetch={false}>
          <Image
            src="https://res.cloudinary.com/ddqqlfsjp/image/upload/v1751429403/logo-1-removebg-preview_khtxak.png"
            alt="Urbangrey Logo"
            width={180}
            height={40}
            className="object-contain"
          />
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="#features" className="hover:text-primary transition-colors" prefetch={false}>
            Features
          </Link>
          <Link href="#gallery" className="hover:text-primary transition-colors" prefetch={false}>
            Gallery
          </Link>
          <Link href="#contact" className="hover:text-primary transition-colors" prefetch={false}>
            Contact
          </Link>
        </nav>
        <div className="hidden md:block">
          <Button asChild>
            <Link href="#lead-form">Get a Quote</Link>
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle className="sr-only">Menu</SheetTitle>
            </SheetHeader>
            <div className="grid gap-4 p-6">
              <Link href="#" className="flex items-center" prefetch={false}>
                 <Image
                    src="https://res.cloudinary.com/ddqqlfsjp/image/upload/v1751429403/logo-1-removebg-preview_khtxak.png"
                    alt="Urbangrey Logo"
                    width={180}
                    height={40}
                    className="object-contain"
                  />
              </Link>
              <nav className="grid gap-2 text-lg font-medium">
                <Link href="#features" className="hover:text-primary transition-colors" prefetch={false}>
                  Features
                </Link>
                <Link href="#gallery" className="hover:text-primary transition-colors" prefetch={false}>
                  Gallery
                </Link>
                <Link href="#contact" className="hover:text-primary transition-colors" prefetch={false}>
                  Contact
                </Link>
              </nav>
              <Button asChild className="mt-4">
                 <Link href="#lead-form">Get a Quote</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
