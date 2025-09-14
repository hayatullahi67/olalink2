import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Rocket, Users, CheckCircle } from 'lucide-react';

const teamMembers = [
  { name: 'Alice Johnson', role: 'CEO & Founder', imageId: 'team-member-1' },
  { name: 'Bob Williams', role: 'CTO', imageId: 'team-member-2' },
  { name: 'Charlie Brown', role: 'Lead Developer', imageId: 'team-member-3' },
  { name: 'Diana Prince', role: 'UX/UI Lead', imageId: 'team-member-4' },
];

const whyChooseUs = [
  { title: 'Expert Team', description: 'Our developers are experts in their fields, continuously learning and adapting to new technologies.', icon: Users },
  { title: 'Client-Centric Approach', description: 'We prioritize your needs and work collaboratively to ensure your vision comes to life.', icon: CheckCircle },
  { title: 'Innovative Solutions', description: 'We thrive on challenges and are passionate about creating innovative and impactful digital products.', icon: Lightbulb },
  { title: 'Proven Track Record', description: 'Our portfolio speaks for itself, with a history of successful projects and satisfied clients.', icon: Rocket },
];

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us-main');
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary">About OlaLink</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We are a passionate team of creators, innovators, and problem-solvers dedicated to building a better digital future.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                width={600}
                height={50}
                className="rounded-lg shadow-xl"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-primary flex items-center gap-2"><Lightbulb className="text-accent" /> Our Mission</h2>
              <p className="mt-2 text-muted-foreground">To empower businesses with transformative technology and innovative digital solutions that foster growth, efficiency, and success in a rapidly evolving world.</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary flex items-center gap-2"><Rocket className="text-accent" /> Our Vision</h2>
              <p className="mt-2 text-muted-foreground">To be a leading force in the technology industry, renowned for our commitment to quality, integrity, and pushing the boundaries of what's possible.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map(({ title, description, icon: Icon }) => (
              <Card key={title} className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-accent/10 p-4 rounded-full w-fit">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="mt-4">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member) => {
              const memberImage = PlaceHolderImages.find(p => p.id === member.imageId);
              return (
                <Card key={member.name} className="text-center overflow-hidden">
                  {memberImage && (
                    <Image
                      src={memberImage.imageUrl}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="aspect-square object-cover"
                      data-ai-hint={memberImage.imageHint}
                    />
                  )}
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-accent">{member.role}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section> */}
    </div>
  );
}
