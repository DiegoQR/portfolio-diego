export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string | null;
  achievements: string[];
}

export interface EducationEntry {
  id: string;
  organization: string;
  title: string;
  startDate: string;
  endDate: string | null;
  achievements: string[];
  documents: { label: string; path: string }[];
}

export interface Project {
  id: string;
  isPlaceholder: boolean;
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string | null;
  repositoryUrl: string | null;
}
