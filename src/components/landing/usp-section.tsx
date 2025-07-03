import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const usps = [
  {
    image: 'https://placehold.co/100x100.png',
    hint: 'office chair',
    title: 'Office Furniture',
    description: 'Desks, chairs, reception counters, meeting tables.',
  },
  {
    image: 'https://placehold.co/100x100.png',
    hint: 'modular sofa',
    title: 'Modular Furniture',
    description: 'Adaptable layouts for evolving spaces.',
  },
  {
    image: 'https://placehold.co/100x100.png',
    hint: 'manufacturing robot',
    title: 'Custom Manufacturing',
    description: 'Tailored designs to fit your vision.',
  },
  {
    image: 'https://placehold.co/100x100.png',
    hint: 'design blueprint',
    title: 'Interior Design',
    description: 'End-to-end space planning and execution.',
  },
  {
    image: 'https://placehold.co/100x100.png',
    hint: 'delivery truck',
    title: 'Nationwide Delivery',
    description: 'Reliable delivery and installation across India.',
  },
];

export default function UspSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-background" id="features">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter font-headline text-primary">Shape Your Space, Elevate Your Experience</h2>
          <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl/relaxed">
            Urbangrey offers comprehensive solutions designed for efficiency, comfort, and style.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {usps.map((usp, index) => (
            <Card key={index} className="text-center hover:shadow-2xl transition-shadow duration-300 border-t-4 border-primary/20 hover:border-primary bg-card p-4">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <Image
                    src={usp.image}
                    alt={usp.title}
                    width={80}
                    height={80}
                    className="rounded-full object-cover"
                    data-ai-hint={usp.hint}
                  />
                </div>
                 <CardTitle className="text-xl font-semibold font-headline">{usp.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">{usp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
