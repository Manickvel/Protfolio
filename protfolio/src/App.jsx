import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about" className="bg-gray-50">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact" className="bg-gray-50">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}
