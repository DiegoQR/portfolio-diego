import { DateRange } from '../components/dateRange';
import { Section } from '../components/section';
import { education } from '../data/portfolio';
import { getDocumentUrl } from '../data/documents';

export function Education() {
  return (
    <Section id="education" title="Education & Courses">
      <div className="space-y-12">
        {education.map((entry) => {
          const documents = entry.documents.flatMap((document) => {
            const url = getDocumentUrl(document.path);
            return url ? [{ label: document.label, url }] : [];
          });

          return (
            <article key={entry.id} aria-labelledby={entry.id}>
              <DateRange startDate={entry.startDate} endDate={entry.endDate} />
              <h3 id={entry.id} className="mt-3 text-xl leading-snug font-semibold">{entry.title}</h3>
              <p className="mt-2 text-accent">{entry.organization}</p>
              <ul className="achievement-list mt-5">
                {entry.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}
              </ul>
              {documents.length > 0 && (
                <details className="documents mt-5">
                  <summary aria-label={`Docs for ${entry.title}`}>Docs</summary>
                  <ul className="space-y-3 pt-4">
                    {documents.map(({ label, url }) => <li key={url}><a className="text-link" href={url}>{label}</a></li>)}
                  </ul>
                </details>
              )}
            </article>
          );
        })}
      </div>
    </Section>
  );
}
