import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-muted py-12">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-start gap-4">
          <Link href="#" className="flex items-center" prefetch={false}>
            <Image
                src="https://res.cloudinary.com/ddqqlfsjp/image/upload/v1751429403/logo-1-removebg-preview_khtxak.png"
                alt="Urbangrey Logo"
                width={200}
                height={50}
                className="object-contain"
            />
          </Link>
          <p className="text-muted-foreground text-sm">
            Blending design excellence and functionality to elevate every space.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 col-span-1 md:col-span-1">
           <div className="grid gap-2">
            <h4 className="font-semibold">Navigate</h4>
            <Link href="#home" className="text-sm hover:underline" prefetch={false}>Home</Link>
            <Link href="#features" className="text-sm hover:underline" prefetch={false}>Features</Link>
            <Link href="#gallery" className="text-sm hover:underline" prefetch={false}>Gallery</Link>
            <Link href="#contact" className="text-sm hover:underline" prefetch={false}>Contact</Link>
          </div>
        </div>
        <div className="flex flex-col items-start md:items-end gap-4">
          <h4 className="font-semibold">Follow Us</h4>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
              <Instagram className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 mt-8 pt-8 border-t border-border">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Urbangrey. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
