import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const galleryItems = [
  {
    title: "Modular Workstations",
    description:
      "Adaptable and scalable workstation systems designed for growing teams. From compact 2-seaters to expansive cluster layouts, our modular designs optimise space while maintaining privacy and collaboration.",
    image:
      "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1776769098/Modular_Workstations_500_500px_s05fjr.png",
    hint: "modular workstation",
  },
  {
    title: "Collaborative Workstations",
    description:
      "Encourage teamwork with open-plan layouts that promote interaction without compromising individual focus. Designed for dynamic teams and evolving workflows.",
    image:
      "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1776769097/Collaborative_Workstations_500_500px_ednmzh.png",
    hint: "collaborative workstation",
  },
  {
    title: "Executive Workstations",
    description:
      "Refined workstation setups for leadership spaces. Combining premium finishes with functional layouts, these designs offer both authority and comfort.",
    image:
      "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1776769097/Executive_Workstations_500_500px_rgskqs.png",
    hint: "executive workstation",
  },
  {
    title: "Ergonomic Seating Solutions",
    description:
      "Pair your workstations with chairs designed for long hours of comfort and support. Engineered to enhance posture and productivity across every role.",
    image:
      "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1776769097/Ergonomic_Seating_Solutions_500_500_qqsraj.png",
    hint: "ergonomic chair",
  },
  {
    title: "Office Storage",
    description:
      "Integrated storage and smart partition solutions that keep your workspace organised while maintaining a clean and modern aesthetic.",
    image:
      "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1776769854/Storage_500_500px_tk8qge.png",
    hint: "office storage",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-background py-20 sm:py-28">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl text-foreground">
            Design <span className="text-accent">Gallery</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-foreground/80 md:text-xl">
            Thoughtfully crafted workstation solutions that bring structure,
            style, and seamless functionality to every workspace.
          </p>
        </div>

        <div className="mt-16">
          {/* Top row - 3 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.slice(0, 3).map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-lg shadow-lg bg-card text-card-foreground flex flex-col h-full"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover"
                  data-ai-hint={item.hint}
                />
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="font-headline text-xl font-bold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-foreground/80 text-base flex-grow">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom row - 2 items centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 max-w-3xl mx-auto">
            {galleryItems.slice(3, 5).map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-lg shadow-lg bg-card text-card-foreground flex flex-col h-full"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover"
                  data-ai-hint={item.hint}
                />
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="font-headline text-xl font-bold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-foreground/80 text-base flex-grow">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6"
          >
            <Link href="#get-a-quote">Get a Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}