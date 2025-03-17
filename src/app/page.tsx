import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Games from './components/Games';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Games />
      <Contact />
    </main>
  );
}
