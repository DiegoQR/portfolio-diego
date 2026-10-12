import profile from '../../assets/info/profile.json';
import skills from '../../assets/info/skills.json';
import experienceData from '../../assets/info/experience.json';
import educationData from '../../assets/info/education.json';
import projectsData from '../../assets/info/projects.json';
import cvUrl from '../../assets/CV/Diego Quinones - CV.pdf?url';
import type { EducationEntry, Project, WorkExperience } from '../types/portfolio';

export { profile, skills, cvUrl };
export const experience: WorkExperience[] = experienceData;
export const education: EducationEntry[] = educationData;
export const projects: Project[] = projectsData;
export const contactUrl = `mailto:${profile.email}?body=${encodeURIComponent(profile.contactMessage)}`;

export const navigation = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
];
