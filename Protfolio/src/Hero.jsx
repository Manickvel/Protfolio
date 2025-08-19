import React from "react";
import './style/hero.css'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tight">
            Hi, I'm <span className="text-primary text-blue-600 italic">Manickvel</span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground italic">
            Full Stack Developer
          </h2>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          🚀 I'm an Instrumentation and Control Engineering student passionate about programming and emerging tech.
           I love solving real-world problems through code and constantly push myself to learn by building and experimenting.
        </p>
          
      </div>
    </section>
  );
}
