import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ResearchGoals from './components/ResearchGoals';
import Participate from './components/Participate';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <ResearchGoals />
      <Participate />
      <Footer />
    </main>
  );
} 