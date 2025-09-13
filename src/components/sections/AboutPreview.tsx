import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AboutPreview() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us-main');

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
              Your Partner in Digital Transformation
            </h2>
            <p className="mt-4 text-muted-foreground">
              At OlaLink, we're more than just a software company. We're your strategic partner, dedicated to crafting innovative digital solutions that drive your business forward. Our team combines technical expertise with a deep understanding of market dynamics to deliver products that are not only powerful but also intuitive and user-centric.
            </p>
            <p className="mt-4 text-muted-foreground">
              From startups to established enterprises, we help our clients navigate the complexities of the digital landscape, turning challenges into opportunities for growth.
            </p>
            <Button asChild className="mt-6" variant="link">
              <Link href="/about">
                Discover Our Story <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="order-1 md:order-2">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                width={800}
                height={400}
                className="rounded-lg shadow-xl"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
