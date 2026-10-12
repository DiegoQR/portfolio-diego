import { profile } from '../data/portfolio';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-width flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
        <div>
          <p className="mb-2 text-lg font-semibold">{profile.name}</p>
          <a className="text-link break-all" href={`mailto:${profile.email}`}>{profile.email}</a>
          <p className="mt-5 text-sm text-muted">© {new Date().getFullYear()} {profile.fullName}</p>
        </div>
        <ul className="flex gap-6" aria-label="Social profiles">
          {profile.socialLinks.map(({ label, url }) => <li key={label}><a className="text-link" href={url}>{label}</a></li>)}
        </ul>
      </div>
    </footer>
  );
}
