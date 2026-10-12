import { DateRange } from '../components/dateRange';
import { Section } from '../components/section';
import { experience } from '../data/portfolio';

export function Experience() {
  return (
    <Section id="experience" title="Experience" className="experience-section">
      <ol className="timeline">
        {experience.map((job) => (
          <li key={job.id} className="timeline-entry">
            <article aria-labelledby={job.id}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                <h3 id={job.id} className="text-2xl font-semibold">{job.company}</h3>
                <DateRange startDate={job.startDate} endDate={job.endDate} />
              </div>
              <p className="mt-2 font-semibold text-accent">{job.position}</p>
              <ul className="achievement-list mt-6">
                {job.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
