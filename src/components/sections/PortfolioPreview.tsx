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
        description: 'An award voting platform for voting exercise.',
        longDescription: 'An online voting platform developed with Laravel to manage higher institution award nights. It features secure student authentication, one-vote-per-user validation, real-time result tracking, and an admin dashboard for nominees and categories management.',
        techStack: ['Laravel', 'Javascript', 'MySQL', 'HTML', 'CSS', 'Bootstrap'],
        imageUrl: PlaceHolderImages.find(p => p.id === 'project-1')?.imageUrl || '',
        imageHint: PlaceHolderImages.find(p => p.id === 'project-1')?.imageHint || '',
    },
    {
        id: 'project-2',
        title: 'Ovote System',
        category: 'Web Application',
        description: 'An award voting platform for voting exercise.',
        longDescription: 'An online voting platform developed with Laravel to manage higher institution award nights. It features secure student authentication, one-vote-per-user validation, real-time result tracking, and an admin dashboard for nominees and categories management.',
        techStack: ['Laravel', 'Javascript', 'MySQL', 'HTML', 'CSS', 'Bootstrap'],
        imageUrl: PlaceHolderImages.find(p => p.id === 'project-2')?.imageUrl || '',
        imageHint: PlaceHolderImages.find(p => p.id === 'project-2')?.imageHint || '',
    },
    {
        id: 'project-3',
        title: 'CEADESE',
        category: 'Web Application for Higher Institution',
        description: 'A web-based student portal designed for higher institutions, enabling students to access academic records, course registration, and important updates in one centralized platform.',
        longDescription: 'A digital gateway for students to manage academics seamlessly. Smart student portal for course registration, results, and campus updates.',
        techStack: ['Laravel', 'PHP', 'Javascript', 'MySQL', 'HTML', 'CSS', 'Bootsrap'],
        imageUrl: PlaceHolderImages.find(p => p.id === 'project-3')?.imageUrl || '',
        imageHint: PlaceHolderImages.find(p => p.id === 'project-3')?.imageHint || '',
    },
    {
        id: 'project-4',
        title: 'TechGrid',
        category: 'Web Development',
        description: 'Tech Grid is a technology-focused platform showcasing innovations, industry insights, and digital solutions to connect developers, businesses, and tech enthusiasts.',
        longDescription: 'A hub for technology trends, innovations, and solutions. Connecting people with the future of technology.',
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
