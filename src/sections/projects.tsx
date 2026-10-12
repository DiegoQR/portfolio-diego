import { Section } from '../components/section';
import { SkillList } from '../components/skillList';
import { projects } from '../data/portfolio';

export function Projects() {
  const publishedProjects = projects.filter((project) => !project.isPlaceholder);

  return (
    <Section id="projects" title="Projects">
      {publishedProjects.length === 0 ? (
        <p className="empty-state">Project details will be added here.</p>
      ) : (
        <div className="space-y-10">
          {publishedProjects.map((project) => (
            <article key={project.id} aria-labelledby={project.id}>
              <h3 id={project.id} className="subheading">{project.title}</h3>
              <p className="mb-6 max-w-prose leading-relaxed text-muted">{project.description}</p>
              <SkillList skills={project.technologies} />
              {(project.liveUrl || project.repositoryUrl) && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.liveUrl && <a className="button button-secondary" href={project.liveUrl} aria-label={`View live project: ${project.title}`}>Live project</a>}
                  {project.repositoryUrl && <a className="button button-secondary" href={project.repositoryUrl} aria-label={`GitHub repository: ${project.title}`}>GitHub repository</a>}
                </div>
              )}
            </article>
          ))}
        </div>
      )}
    </Section>
  );
}
