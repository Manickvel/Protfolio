import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div>
            <h3 className="text-xl font-medium mb-2">Manickvel</h3>
            <p className="text-sm text-gray-500 max-w-sm">
              Full-Stack Developer crafting beautiful digital experiences.
              Always excited about new opportunities and collaborations.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/manickvel/" className="text-sm text-gray-500 hover:text-black transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/Manickvel" className="text-sm text-gray-500 hover:text-black transition-colors">
                GitHub
              </a>
              <a href="mailto:manickvel12@gmail.com" className="text-sm text-gray-500 hover:text-black transition-colors">
                Email
              </a>
            </div>
            <button
              onClick={scrollToTop}
              className="flex items-center text-sm border border-gray-300 rounded px-4 py-2 ml-auto hover:bg-gray-200 transition"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
