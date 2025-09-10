import TestimonialCard from '@/components/TestimonialCard';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
  {
    quote: "OlaLink transformed our online presence. Their team was professional, responsive, and delivered a product that exceeded our expectations. Highly recommended!",
    name: 'Jane Doe',
    company: 'Tech Innovators Inc.',
    avatarUrl: PlaceHolderImages.find(p => p.id === 'team-member-2')?.imageUrl || '',
    avatarHint: PlaceHolderImages.find(p => p.id === 'team-member-2')?.imageHint || '',
  },
  {
    quote: "The custom software solution they built for us has streamlined our operations and saved us countless hours. It's been a game-changer for our business.",
    name: 'John Smith',
    company: 'Logistics Pro',
    avatarUrl: PlaceHolderImages.find(p => p.id === 'team-member-3')?.imageUrl || '',
    avatarHint: PlaceHolderImages.find(p => p.id === 'team-member-3')?.imageHint || '',
  },
  {
    quote: "Working with OlaLink felt like a true partnership. They took the time to understand our needs and delivered a solution that was a perfect fit.",
    name: 'Emily Johnson',
    company: 'Creative Solutions',
    avatarUrl: PlaceHolderImages.find(p => p.id === 'team-member-1')?.imageUrl || '',
    avatarHint: PlaceHolderImages.find(p => p.id === 'team-member-1')?.imageHint || '',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We're proud to have earned the trust of businesses across various industries.
          </p>
        </div>
        <div className="mt-12">
           <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <TestimonialCard {...testimonial} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
