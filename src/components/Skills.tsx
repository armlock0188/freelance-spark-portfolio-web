
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck, Code, Database, FileCode, Globe, Layout, Server, Smartphone } from "lucide-react";

const skillCategories = [
  {
    title: "Front-end",
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "HTML5/CSS3", "Tailwind CSS", "Responsive Design"],
    icon: <Globe className="h-6 w-6" />
  },
  {
    title: "Back-end",
    skills: ["Node.js", "Express", "PHP", "Python", "RESTful APIs", "GraphQL", "PostgreSQL", "MongoDB"],
    icon: <Server className="h-6 w-6" />
  },
  {
    title: "UI/UX Design",
    skills: ["Figma", "Adobe XD", "User Research", "Wireframing", "Prototyping", "Design Systems", "Accessibility", "UI Animation"],
    icon: <Layout className="h-6 w-6" />
  },
  {
    title: "Metodologias & Ferramentas",
    skills: ["Git/GitHub", "Agile/Scrum", "CI/CD", "Docker", "AWS", "Performance Optimization", "SEO", "Analytics"],
    icon: <FileCode className="h-6 w-6" />
  }
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#f8f9fa] py-32">
      <div className="section-container">
        <h2 className="section-title text-center">Especialidades & Competências</h2>
        <p className="section-subtitle text-center">
          Combinando expertise técnica e visão estratégica para entregar soluções digitais de alto valor.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-md text-primary">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-heading font-bold">{category.title}</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <BadgeCheck className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-heading font-semibold text-center mb-8">Tecnologias & Ferramentas</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["JavaScript", "TypeScript", "React", "Node.js", "Next.js", 
              "Tailwind CSS", "GraphQL", "REST APIs", "Git", "Figma", 
              "MongoDB", "PostgreSQL", "AWS", "Docker"].map((tech, index) => (
              <div 
                key={index} 
                className="px-4 py-2 bg-white shadow-md border border-border rounded-full font-medium card-hover"
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
