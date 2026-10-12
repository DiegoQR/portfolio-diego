import { Footer } from './components/footer';
import { Navigation } from './components/navigation';
import { About } from './sections/about';
import { Education } from './sections/education';
import { Experience } from './sections/experience';
import { Hero } from './sections/hero';
import { Projects } from './sections/projects';

export function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Navigation />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
      </main>
      <Footer />
    </>
  );
}
