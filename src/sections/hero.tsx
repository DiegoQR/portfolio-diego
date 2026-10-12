import { contactUrl, cvUrl, profile } from '../data/portfolio';

export function Hero() {
  return (
    <section id="home" tabIndex={-1} aria-labelledby="home-title" className="hero">
      <div className="page-width">
        <div className="hero-intro">
          <p className="text-lg sm:text-xl">{profile.profession}</p>
          <p className="text-sm text-muted">{profile.location}</p>
        </div>
        <h1 id="home-title" className="hero-name">{profile.name}</h1>
        <div className="hero-bottom">
          <div className="max-w-xl">
            <a className="text-link break-all" href={`mailto:${profile.email}`}>{profile.email}</a>
            <p className="mt-6 text-lg leading-relaxed text-muted">{profile.introduction}</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a className="button button-primary" href={contactUrl}>Contact Me</a>
            <a className="button button-secondary" href={cvUrl} download="Diego-Quinones-CV.pdf">Download My CV</a>
          </div>
        </div>
      </div>
    </section>
  );
}
