import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  techStack: string[];
  imageUrl: string;
  imageHint: string;
};

type ProjectCardProps = {
  project: Project;
  onViewProject: (project: Project) => void;
};

export default function ProjectCard({ project, onViewProject }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden group">
      <CardContent className="p-0">
        <div className="relative aspect-video">
          <Image
            src={project.imageUrl}
            alt={project.description}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={project.imageHint}
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              variant="outline"
              size="icon"
              className="text-white border-white hover:bg-white/20"
              onClick={() => onViewProject(project)}
            >
              <Eye className="h-5 w-5" />
              <span className="sr-only">View Project</span>
            </Button>
          </div>
        </div>
        <div className="p-4 bg-card">
          <h3 className="font-semibold text-lg font-headline">{project.title}</h3>
          <p className="text-sm text-muted-foreground">{project.category}</p>
        </div>
      </CardContent>
    </Card>
  );
}
