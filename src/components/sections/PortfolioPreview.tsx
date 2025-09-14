import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PortfolioGrid from '../PortfolioGrid';

const allProjects = [
    {
        id: 'project-1',
        title: 'FCE Award Voting system',
        category: 'Web Application',
        description: 'A full-featured online store with a custom CMS.',
        longDescription: 'Developed a scalable e-commerce platform from the ground up, featuring a secure payment gateway, real-time inventory management, and a user-friendly admin dashboard. The platform was built to handle high traffic and provides a seamless shopping experience across all devices.',
        techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe API'],
        imageUrl: PlaceHolderImages.find(p => p.id === 'project-1')?.imageUrl || '',
        imageHint: PlaceHolderImages.find(p => p.id === 'project-1')?.imageHint || '',
    },
    {
        id: 'project-2',
        title: 'Ovot System',
        category: 'Web Application',
        description: 'Secure and intuitive mobile app for a financial institution.',
        longDescription: 'Created a cross-platform mobile banking application that offers features like fund transfers, bill payments, and transaction history. Security was paramount, with multi-factor authentication and end-to-end encryption implemented to protect user data.',
        techStack: ['React Native', 'Firebase', 'REST APIs'],
        imageUrl: PlaceHolderImages.find(p => p.id === 'project-2')?.imageUrl || '',
        imageHint: PlaceHolderImages.find(p => p.id === 'project-2')?.imageHint || '',
    },
    {
        id: 'project-3',
        title: 'Ceadese',
        category: 'Web Application for Higher Institution',
        description: 'Interactive dashboard for visualizing sales data.',
        longDescription: 'Designed and built an interactive data visualization dashboard that provides real-time insights into sales performance. The tool allows for filtering by region, product, and time period, empowering the sales team to make data-driven decisions.',
        techStack: ['D3.js', 'Python (Flask)', 'SQL'],
        imageUrl: PlaceHolderImages.find(p => p.id === 'project-3')?.imageUrl || '',
        imageHint: PlaceHolderImages.find(p => p.id === 'project-3')?.imageHint || '',
    },
    {
        id: 'project-4',
        title: 'Corporate Website Redesign',
        category: 'Web Development',
        description: 'A modern, responsive website for a major corporation.',
        longDescription: 'Led the complete redesign and development of a corporate website, focusing on improved user experience, faster load times, and a modern aesthetic. The new site saw a 40% increase in user engagement.',
        techStack: ['Next.js', 'Tailwind CSS', 'Sanity CMS'],
        imageUrl: PlaceHolderImages.find(p => p.id === 'project-4')?.imageUrl || '',
        imageHint: PlaceHolderImages.find(p => p.id === 'project-4')?.imageHint || '',
    }
];

export default function PortfolioPreview() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">Our Recent Work</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Take a look at some of the innovative solutions we've delivered for our clients.
          </p>
        </div>
        
        <PortfolioGrid projects={allProjects} />
        
        <div className="mt-12 text-center">
          <Button asChild variant="default" size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/portfolio">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
