'use client';

import { useState } from 'react';
import ProjectCard, { type Project } from '@/components/ProjectCard';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type PortfolioGridProps = {
  projects: Omit<Project, 'imageUrl' | 'imageHint'>[];
};

export default function PortfolioGrid({ projects: rawProjects }: PortfolioGridProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = rawProjects.map(p => {
    const imageData = PlaceHolderImages.find(img => img.id === p.id);
    return {
        ...p,
        imageUrl: imageData?.imageUrl || '',
        imageHint: imageData?.imageHint || '',
    };
  });

  return (
    <>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onViewProject={setSelectedProject} />
        ))}
      </div>

      <Dialog open={!!selectedProject} onOpenChange={(isOpen) => !isOpen && setSelectedProject(null)}>
        <DialogContent className="sm:max-w-3xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-headline">{selectedProject.title}</DialogTitle>
                <DialogDescription>{selectedProject.category}</DialogDescription>
              </DialogHeader>
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="relative aspect-video">
                  <Image
                    src={selectedProject.imageUrl}
                    alt={selectedProject.description}
                    fill
                    className="object-cover rounded-md"
                    data-ai-hint={selectedProject.imageHint}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">About this project</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{selectedProject.longDescription}</p>
                  
                  <h3 className="font-semibold text-lg mt-4">Technology Stack</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
