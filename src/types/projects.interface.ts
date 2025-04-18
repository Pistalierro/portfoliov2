export interface ProjectPreviewInterface {
  id: number;
  slug: string;
  title: string;
  description: string;
  descriptionShort?: string;
  techStack: string[];
  images: {
    thumbnail: string;
    large: string;
  };
  detailsUrl?: string;
}

export interface ProjectDetailedInterface extends ProjectPreviewInterface {
  type: string;
  typeDescription: string;
  tools: string[];
  url: string;
  repositoryUrl?: string;
  details: {
    what: string;
    overview: string;
    special: string;
    challenges: string;
  };
  status: string;
}
