export interface ProjectPreviewInterface {
  id: number;
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  images: {
    thumbnail: string;
    large: string;
  };
}

export interface ProjectDetailedInterface extends ProjectPreviewInterface {
  features: string[];
  screenshots: string[];
  repositoryUrl?: string;
  liveDemoUrl?: string;
  date: string;
  role: string;
}
