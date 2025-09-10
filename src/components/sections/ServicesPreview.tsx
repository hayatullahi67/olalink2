import ServiceCard from '@/components/ServiceCard';
import { Code, Database, BarChart, Briefcase } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Crafting responsive, high-performance websites and web applications tailored to your business needs.',
  },
  {
    icon: Database,
    title: 'Software Development',
    description: 'Building custom software solutions to streamline your operations and enhance productivity.',
  },
  {
    icon: BarChart,
    title: 'Data & Analytics',
    description: 'Transforming raw data into actionable insights to help you make smarter business decisions.',
  },
  {
    icon: Briefcase,
    title: 'IT Consulting',
    description: 'Providing expert guidance to optimize your IT infrastructure and technology strategy.',
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">Our Expertise</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We deliver a comprehensive range of services to empower your business in the digital age.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
