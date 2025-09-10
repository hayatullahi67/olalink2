import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
};

export default function ServiceCard({ icon: Icon, title, description, className }: ServiceCardProps) {
  return (
    <Card className={cn('text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-2', className)}>
      <CardHeader className="items-center">
        <div className="bg-accent/10 p-4 rounded-full">
          <Icon className="h-8 w-8 text-accent" />
        </div>
        <CardTitle className="mt-4 font-headline text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
