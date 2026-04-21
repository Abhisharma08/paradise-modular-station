import { Award, Rocket, Users, Gem } from "lucide-react";

const features = [
  {
    icon: <Award className="h-10 w-10 text-accent" />,
    title: "In-house design and manufacturing expertise",
  },
  {
    icon: <Rocket className="h-10 w-10 text-accent" />,
    title: "End-to-end workspace solutions",
  },
  {
    icon: <Users className="h-10 w-10 text-accent" />,
    title: "Trusted by corporates, startups, and designers",
  },
  {
    icon: <Gem className="h-10 w-10 text-accent" />,
    title: "High-quality materials with customization options",
  },  {
    icon: <Gem className="h-10 w-10 text-accent" />,
    title: "Seamless delivery and installation support",
  },
];

export function WhyChooseUs() {
  return (
    <section id="features" className="bg-secondary py-20 sm:py-28 border-y">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl text-foreground">
            Why Paradise Furniture?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-foreground/80 md:text-xl">
            We don’t just create furniture, we build workspaces that work for you.
          </p>
        </div>
        <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-foreground/10">
                {feature.icon}
              </div>
              <h3 className="mt-6 font-headline text-xl font-semibold text-foreground">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
