interface SkillListProps {
  skills: string[];
}

export function SkillList({ skills }: SkillListProps) {
  return (
    <ul className="flex flex-wrap gap-2.5">
      {skills.map((skill) => <li className="skill-tag" key={skill}>{skill}</li>)}
    </ul>
  );
}
