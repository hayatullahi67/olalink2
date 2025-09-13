import { PlaceHolderImages } from '@/lib/placeholder-images';
import PortfolioGrid from '@/components/PortfolioGrid';

const allProjects = [
    {
        id: 'project-1',
        title: 'FCE Award Voting system',
        category: 'Web Application',
        description: 'An award voting platform for voting exercise.',
        longDescription: 'Developed to conduct a transparency and fair election.',
        techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe API'],
    },
    {
        id: 'project-2',
        title: 'Ovote System',
        category: 'Web Application',
        description: 'An award voting platform for voting exercise.',
        longDescription: 'Created a cross-platform mobile banking application that offers features like fund transfers, bill payments, and transaction history. Security was paramount, with multi-factor authentication and end-to-end encryption implemented to protect user data.',
        techStack: ['React Native', 'Firebase', 'REST APIs'],
    },
    {
        id: 'project-3',
        title: 'Ceadese',
        category: 'Web Application for Higher Institution',
        description: 'Interactive dashboard for visualizing sales data.',
        longDescription: 'Designed and built an interactive data visualization dashboard that provides real-time insights into sales performance. The tool allows for filtering by region, product, and time period, empowering the sales team to make data-driven decisions.',
        techStack: ['D3.js', 'Python (Flask)', 'SQL'],
    },
    {
        id: 'project-4',
        title: 'Tech Grid',
        category: 'Web Development',
        description: 'A modern, responsive website for a major corporation.',
        longDescription: 'Led the complete redesign and development of a corporate website, focusing on improved user experience, faster load times, and a modern aesthetic. The new site saw a 40% increase in user engagement.',
        techStack: ['Next.js', 'Tailwind CSS', 'Sanity CMS'],
    },
    {
        id: 'project-5',
        title: 'Ovote Personalize ',
        category: 'Web Application',
        description: 'Consulting on migrating legacy systems to AWS.',
        longDescription: 'Provided comprehensive consulting services for migrating a client\'s on-premise legacy infrastructure to Amazon Web Services (AWS). This included cost-benefit analysis, architecture planning, and a phased migration plan, resulting in a 30% reduction in operational costs.',
        techStack: ['AWS', 'Terraform', 'Docker'],
    },
    {
        id: 'project-6',
        title: 'Marketing Software',
        category: 'Web Application',
        description: 'A SaaS tool for agile project management.',
        longDescription: 'Developed a feature-rich SaaS application for agile teams, including Kanban boards, sprint planning, and reporting tools. The application is built on a multi-tenant architecture to serve multiple clients securely and efficiently.',
        techStack: ['Vue.js', 'Go', 'Kubernetes'],
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
