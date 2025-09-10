import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, BarChart, Briefcase, PenTool, Cloud, Shield } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'We build beautiful, responsive, and high-performance websites that captivate your audience. From corporate sites to complex web applications, we deliver digital experiences that work.',
  },
  {
    icon: Database,
    title: 'Software Development',
    description: 'Our team crafts custom software solutions tailored to your unique business processes. We focus on scalability, security, and user experience to deliver software that grows with you.',
  },
  {
    icon: BarChart,
    title: 'Data & Analytics',
    description: 'Unlock the power of your data. We help you collect, process, and visualize data to gain actionable insights, driving smarter, data-informed business decisions.',
  },
  {
    icon: Briefcase,
    title: 'IT Consulting',
    description: 'Navigate the complex world of technology with our expert guidance. We help you develop a robust IT strategy, optimize your infrastructure, and choose the right technologies for your goals.',
  },
  {
    icon: PenTool,
    title: 'UI/UX Design',
    description: 'User experience is at the core of everything we build. Our design team creates intuitive, engaging, and aesthetically pleasing interfaces that your users will love.',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Leverage the power of the cloud with our DevOps expertise. We automate your development and deployment pipelines, ensuring faster delivery and more reliable infrastructure.',
  },
   {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Protect your digital assets with our comprehensive cybersecurity services. We identify vulnerabilities, implement robust security measures, and ensure your data remains safe.',
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary">Our Services</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A complete suite of technology services to accelerate your business growth.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="flex flex-col">
                <CardHeader className="flex-row items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <CardTitle>{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/contact">Request Service</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
