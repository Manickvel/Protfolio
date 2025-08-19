import React from "react";
import { ExternalLink, Github } from "lucide-react";
import pic from './assets/project1.png'
import pic2 from './assets/project2.png'
import pic3 from './assets/project3.jpg'
import pic4 from './assets/project4.png'

export default function Projects() {
  const projects = [
    {
      title: "Product Management System",
      description: "A comprehensive Web app to manage the Product by Adding,Removing and Updating the current product in the database",
      image: pic,
      technologies: ["React", "Node.js", "MongoDb", "Express.js"],
      liveUrl: "https://productprojectfrontend.vercel.app/",
      githubUrl: "https://github.com/Manickvel/ProductProject",
      featured: true
    },
    {
      title: "Smart Glasses",
      description: "A user-friendly website that showcases various types of glasses, helping users easily explore and choose the right pair based on their needs and preferences.",
      image: pic2,
      technologies: ["Html", "Css", "BootStrap"],
      liveUrl: "https://kshamproject.netlify.app/",
      githubUrl: "https://github.com/Manickvel/Ksham",
      featured: true
    },
    {
      title: "Protfolio",
      description: "A patient dashboard for healthcare providers to track vital metrics and manage appointments efficiently.",
      image: pic4,
      technologies: ["React", "Node.js", "MongoDb", "Express.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Console Based Application",
      description: "Developed three Java console applications- a Number Guessing Game, Student Grade Calculator, and ATM Interface to enhance user interaction, logic handling, and simulate real-world system behavior",
      image: pic3,
      technologies: ["Java"],
      liveUrl: "",
      githubUrl: "https://github.com/Manickvel/Console_Based_Application",
      featured: false
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Projects</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            A showcase of my recent work spanning web applications, mobile apps, and digital experiences.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden bg-white border rounded-lg group hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <div className="flex gap-2">
                    <a href={project.liveUrl} className="p-2 hover:bg-gray-100 rounded">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <a href={project.githubUrl} className="p-2 hover:bg-gray-100 rounded">
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <p className="text-base text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-200 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}

        <div>
          <h3 className="text-2xl  text-center"></h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="overflow-hidden bg-white border rounded-lg group hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-medium">{project.title}</h4>
                    <div className="flex gap-2">
                      <a href={project.liveUrl} className="p-1 hover:bg-gray-100 rounded">
                        <ExternalLink className="h-3 w-3" />
                      </a>
                      <a href={project.githubUrl} className="p-1 hover:bg-gray-100 rounded">
                        <Github className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-200 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
