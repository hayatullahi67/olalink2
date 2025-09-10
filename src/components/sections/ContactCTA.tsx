import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ContactCTA() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to start your next project?
        </h2>
        <p className="mt-4 mx-auto max-w-2xl text-lg text-primary-foreground/80">
          Let's talk about how we can help you achieve your goals. We're here to turn your ideas into reality.
        </p>
        <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
          <Link href="/contact">Contact Us Today</Link>
        </Button>
      </div>
    </section>
  );
}
