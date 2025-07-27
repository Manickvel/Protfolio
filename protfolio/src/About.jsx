import React from "react";

export default function About() {
  const technologies = [
    "Java", "MySql", "Html", "Css", "JavaScript",
    "MERN Stack", "Matlab", "Labview", "PLC"
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 font-bold text-9xl">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover my journey, skills, and what drives my passion for creating exceptional digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center box">
          <div className="space-y-6">
            <div className="p-6 border rounded-lg shadow-sm bg-white hover:shadow-xl">
              <h3 className="text-xl mb-4 font-bold">My Story</h3>
              <p className="text-muted-foreground mb-4">
                🎓 I'm a 20-year-old student pursuing my B.Tech in <b>Instrumentation and Control Engineering </b>at Sri Manakula Vinayagar Engineering College. With a strong passion for IT and programming, I’ve built a solid foundation through continuous learning and hands-on practice.
              </p>
              <p className="mb-4">
                Alongside my academic journey, I’ve gained valuable experience in industry-relevant tools and technologies such as MATLAB, Keil µVision, Proteus, LabVIEW, and PLC programming—which have deepened my understanding of control systems and embedded technologies.
              </p>
              <p>
                I believe that <b>consistent hard work, curiosity, and dedication</b> are the keys to building a successful career in the ever-evolving tech world.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 border rounded-lg shadow-sm bg-white hover:shadow-xl">
              <h3 className="text-4xl font-bold mb-4 hover:transform-1.05">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-6 py-1 techskill font-bold hover:cursor-pointer">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-200 text-gray-800 rounded text-sm hover:shadow-xl hover:scale-1.05"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
