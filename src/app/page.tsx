'use client';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Games from './components/Games';
import Contact from './components/Contact';
import PageTransition from './components/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-black">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Games />
        <Contact />
      </main>
    </PageTransition>
  );
}
