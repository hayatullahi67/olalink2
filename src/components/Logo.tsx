import Link from 'next/link';
import { Building2 } from 'lucide-react';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
  textClassName?: string;
};

export function Logo({ className, textClassName }: LogoProps) {
  return (
    <Link href="/" className={cn('flex items-center gap-2', className)}>
      <Building2 className="h-6 w-6 text-accent" />
      <span className={cn('text-xl font-bold font-headline text-primary-foreground', textClassName)}>
        OlaLink
      </span>
    </Link>
  );
}
