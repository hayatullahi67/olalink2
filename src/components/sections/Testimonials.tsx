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
    quote: "The Ovoté system made voting so easy and transparent. I loved how I could quickly cast my vote from my phone without stress. It really added excitement to the award night!",
    name: 'Tolulope',
    company: 'Contestant',
    avatarUrl: PlaceHolderImages.find(p => p.id === 'team-member-2')?.imageUrl || '',
    avatarHint: PlaceHolderImages.find(p => p.id === 'team-member-2')?.imageHint || '',
  },
  {
    quote: "Managing votes used to be a challenge, but Ovoté simplified everything. The platform was smooth, secure, and gave us real-time results that kept the event fun and fair.",
    name: 'Comr.Omolola',
    company: 'SUG Social Director',
    avatarUrl: PlaceHolderImages.find(p => p.id === 'team-member-3')?.imageUrl || '',
    avatarHint: PlaceHolderImages.find(p => p.id === 'team-member-3')?.imageHint || '',
  },
  {
    quote: "I was impressed with how seamless the process was. No long queues, no confusion—just straightforward voting. Ovoté made the award night feel modern and engaging.",
    name: 'Emily Johnson',
    company: 'Attendees',
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
