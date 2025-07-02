import Image from 'next/image';

const furnitureItems = [
  { src: 'https://placehold.co/600x400.png', alt: 'Reception and workstations', title: 'Reception & Workstations', description: 'Crafted for modern workspaces with a focus on comfort and productivity.', hint: 'reception desk' },
  { src: 'https://placehold.co/600x400.png', alt: 'Executive desk and cabin seating', title: 'Executive Desks & Cabin Seating', description: 'Elevated designs that balance functionality and style for leadership spaces.', hint: 'executive desk' },
  { src: 'https://placehold.co/600x400.png', alt: 'Lounge and waiting area furniture', title: 'Lounge & Waiting Area Furniture', description: 'Create warm, inviting spaces with our thoughtfully designed seating.', hint: 'lounge sofa' },
  { src: 'https://placehold.co/600x400.png', alt: 'Hospitality and cafe furniture', title: 'Hospitality & Café Furniture', description: 'Durable, stylish pieces perfect for social and hospitality environments.', hint: 'cafe chairs' },
];

export default function ShowcaseSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-secondary" id="gallery">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter font-headline text-primary">Design Gallery</h2>
          <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl/relaxed">
            Timeless, functional, and designed to inspire — explore Urbangrey’s signature collections.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {furnitureItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src={item.src}
                alt={item.alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                data-ai-hint={item.hint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <h3 className="text-xl font-bold font-headline">{item.title}</h3>
                <p className="text-sm opacity-90">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
