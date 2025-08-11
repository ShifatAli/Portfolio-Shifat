import { useState, useEffect } from "react";
import Intro from './sections/Intro';
import About from './sections/About';
import EducationCertificates from './sections/EducationCertificates';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Navbar from './components/Navbar';
import SocialBar from './components/SocialBar';
import ThemeToggle from './components/ThemeToggle';
import Loading from './components/Loading'; // Create this component

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds loading
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;  // Show loading spinner first
  }

  return (
    <>
      <ThemeToggle />
      <SocialBar />
      <Intro />
      <About />
      <EducationCertificates />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Navbar />
    </>
  );
}

export default App;
