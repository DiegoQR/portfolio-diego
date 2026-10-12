import { useRef, useState } from 'react';
import { navigation, profile } from '../data/portfolio';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  return (
    <header className="site-header">
      <div className="page-width flex min-h-20 flex-wrap items-center justify-between gap-x-6">
        <a href="#home" className="brand" aria-label={`${profile.name}, home`} onClick={() => setIsMenuOpen(false)}>
          <span className="brand-mark" aria-hidden="true">dq.</span>
          <span className="text-sm font-semibold">{profile.name}</span>
        </a>
        <nav aria-label="Main navigation" onKeyDown={(event) => {
          if (event.key === 'Escape' && isMenuOpen) {
            setIsMenuOpen(false);
            menuButton.current?.focus();
          }
        }} className="site-navigation">
          <button ref={menuButton} className="menu-toggle" type="button" aria-expanded={isMenuOpen} aria-controls="navigation-links" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? 'Close menu' : 'Menu'}
          </button>
          <ul id="navigation-links" className={`navigation-links ${isMenuOpen ? 'is-open' : ''}`}>
            {navigation.map(({ id, label }) => (
              <li key={id}><a href={`#${id}`} onClick={() => setIsMenuOpen(false)}>{label}</a></li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
