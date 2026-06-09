import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  image: string;
  isGif?: boolean;
  isVideo?: boolean;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden bg-gray-900 rounded-sm">
      <div className="w-full overflow-hidden">
        {project.isVideo ? (
          <video
            src={project.image}
            className="w-full h-auto"
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setIsLoaded(true)}
          />
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-auto ${
              !isLoaded ? 'opacity-0' : 'opacity-100'
            }`}
            onLoad={() => setIsLoaded(true)}
          />
        )}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gray-800 animate-pulse" />
        )}
      </div>
    </div>
  );
}
