
import React from 'react';
import { Progress } from "@/components/ui/progress";

const skillsList = [
  { name: "HTML5 & CSS3", level: 95 },
  { name: "JavaScript/TypeScript", level: 90 },
  { name: "React/Next.js", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "UI/UX Design", level: 85 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Responsive Design", level: 95 },
  { name: "SEO", level: 75 },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-white py-24">
      <div className="section-container">
        <h2 className="section-title">Minhas Habilidades</h2>
        <p className="section-subtitle">
          Tecnologias e ferramentas que utilizo para desenvolver soluções modernas e eficientes.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mt-12">
          {skillsList.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="text-gray-500">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-8">Tecnologias & Ferramentas</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {["JavaScript", "TypeScript", "React", "Node.js", "HTML5", "CSS3", 
              "Tailwind CSS", "Git", "Figma", "Next.js", "MongoDB", "Firebase"].map((tech, index) => (
              <div 
                key={index} 
                className="px-4 py-2 bg-blue-50 text-primary rounded-md font-medium"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
