import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Star } from 'lucide-react';

type TestimonialCardProps = {
  quote: string;
  name: string;
  company: string;
  avatarUrl: string;
  avatarHint: string;
};

export default function TestimonialCard({ quote, name, company, avatarUrl, avatarHint }: TestimonialCardProps) {
  return (
    <Card className="bg-card p-6 h-full flex flex-col">
      <CardContent className="p-0 flex-grow">
        <div className="flex text-yellow-400 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} fill="currentColor" className="h-5 w-5" />
          ))}
        </div>
        <blockquote className="text-muted-foreground italic">"{quote}"</blockquote>
      </CardContent>
      <div className="mt-6 flex items-center gap-4">
        <Image
          src={avatarUrl}
          alt={name}
          width={48}
          height={48}
          className="rounded-full"
          data-ai-hint={avatarHint}
        />
        <div>
          <p className="font-semibold text-primary">{name}</p>
          <p className="text-sm text-muted-foreground">{company}</p>
        </div>
      </div>
    </Card>
  );
}
