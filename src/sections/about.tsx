import { Section } from '../components/section';
import { SkillList } from '../components/skillList';
import { profile, skills } from '../data/portfolio';

export function About() {
  return (
    <Section id="about" title="About Me">
      <div className="max-w-prose space-y-5 text-lg leading-relaxed text-muted">
        <p>{profile.about}</p>
        <p>{profile.hobbies}</p>
      </div>
      <div className="mt-12 space-y-9">
        <div><h3 className="subheading">My Tech Stack</h3><SkillList skills={skills.techStack} /></div>
        <div><h3 className="subheading">My Soft Skills</h3><SkillList skills={skills.softSkills} /></div>
        <div>
          <h3 className="subheading">My Languages</h3>
          <ul className="flex flex-wrap gap-x-10 gap-y-4">
            {skills.languages.map(({ name, proficiency }) => (
              <li key={name}><span className="font-semibold">{name}</span><span className="ml-3 text-muted">{proficiency}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
