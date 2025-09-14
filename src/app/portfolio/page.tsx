import { PlaceHolderImages } from '@/lib/placeholder-images';
import PortfolioGrid from '@/components/PortfolioGrid';

const allProjects = [
    {
        id: 'project-1',
        title: 'FCE Award Voting system',
        category: 'Web Application',
        description: 'An award voting platform for voting exercise.',
        longDescription: 'Developed to conduct a transparency and fair election.',
        techStack: ['Laravel', 'PHP', 'Javascript', 'MySQL', 'HTML', 'CSS', 'Bootsrap'],
    },
    {
        id: 'project-2',
        title: 'Ovote System',
        category: 'Web Application',
        description: 'An award voting platform for voting exercise.',
        longDescription: 'An online voting platform developed with Laravel to manage higher institution award nights. It features secure student authentication, one-vote-per-user validation, real-time result tracking, and an admin dashboard for nominees and categories management.',
        techStack: ['Laravel', 'Javascript', 'MySQL', 'HTML', 'CSS', 'Bootstrap'],
    },
    {
        id: 'project-3',
        title: 'CEADESE',
        category: 'Web Application for Higher Institution',
        description: 'A web-based student portal designed for higher institutions, enabling students to access academic records, course registration, and important updates in one centralized platform.',
        longDescription: 'A digital gateway for students to manage academics seamlessly. Smart student portal for course registration, results, and campus updates.',
        techStack: ['Laravel', 'PHP', 'Javascript', 'MySQL', 'HTML', 'CSS', 'Bootsrap'],
    },
    {
        id: 'project-4',
        title: 'Tech Grid',
        category: 'Web Development',
        description: 'Tech Grid is a technology-focused platform showcasing innovations, industry insights, and digital solutions to connect developers, businesses, and tech enthusiasts.',
        longDescription: 'A hub for technology trends, innovations, and solutions. Connecting people with the future of technology.',
        techStack: ['Next.js', 'Tailwind CSS', 'Sanity CMS'],
    },
    {
        id: 'project-5',
        title: 'Ovote Personalize Portal',
        category: 'Web Application',
        description: 'An award voting platform for voting exercise.',
        longDescription: 'This enable contestant to have teir own personalize portal and see the details of those that voted for them.',
        techStack: ['Laravel', 'PHP', 'Javascript', 'MySQL', 'HTML', 'CSS', 'Bootsrap'],
    },
    {
        id: 'project-6',
        title: 'Marketing Software',
        category: 'Web Application',
        description: 'A marketing automation software that helps businesses manage campaigns, track leads, and analyze customer engagement for better decision-making',
        longDescription: 'Smart software for streamlined marketing campaigns and lead management. Boosting business growth with automated marketing solutions.',
        techStack: ['Laravel', 'Javascript', 'MySQL', 'HTML', 'CSS', 'Bootstrap'],
    },
];

export default function PortfolioPage() {
  return (
    <div className="bg-background">
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary">Our Portfolio</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We take pride in our work. Explore a selection of projects that showcase our skills and dedication.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <PortfolioGrid projects={allProjects} />
        </div>
      </section>
    </div>
  );
}
