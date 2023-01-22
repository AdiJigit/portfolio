import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Skills from '../components/Skills';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen overflow-y-scroll overflow-x-hidden z-0">
      <Head>
        <title>ADI</title>
      </Head>

      <Header />

      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="experience">
        <WorkExperience />
      </section>

      <section id="skill">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
