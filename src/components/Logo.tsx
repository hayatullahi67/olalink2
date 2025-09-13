import Link from 'next/link';
import { Building2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type LogoProps = {
  className?: string;
  textClassName?: string;
};

export function Logo({ className, textClassName }: LogoProps) {
  return (
    <Link href="/" className={cn('flex items-center gap-2', className)}>
         <Image
                src="/images/olalink-logo.jpeg"
                className="logo rounded"
                alt="OlaLink Logo"
                width={50}
                height={50}              
              />
     
    </Link>
  );
}
