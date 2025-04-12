
import React from 'react';
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Brush, Code, Database, FileCode, Layout, LineChart, Smartphone } from "lucide-react";

const skillsList = [
  { name: "Desenvolvimento Front-end", level: 95 },
  { name: "JavaScript/TypeScript", level: 90 },
  { name: "React/Next.js", level: 85 },
  { name: "Node.js & APIs", level: 80 },
  { name: "UI/UX Design", level: 85 },
  { name: "Arquitetura de Software", level: 78 },
];

const techIcons = [
  { name: "Front-end", icon: <Layout className="h-6 w-6" /> },
  { name: "Back-end", icon: <Database className="h-6 w-6" /> },
  { name: "Design", icon: <Brush className="h-6 w-6" /> },
  { name: "Mobile", icon: <Smartphone className="h-6 w-6" /> },
  { name: "Analytics", icon: <LineChart className="h-6 w-6" /> },
  { name: "Code Quality", icon: <FileCode className="h-6 w-6" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#f8f9fa] py-32">
      <div className="section-container">
        <h2 className="section-title text-center">Especialidades & Competências</h2>
        <p className="section-subtitle text-center">
          Combinando expertise técnica e visão estratégica para entregar soluções de alto valor.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-2xl font-heading font-semibold mb-6">Habilidades Técnicas</h3>
            {skillsList.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
          
          <div>
            <h3 className="text-2xl font-heading font-semibold mb-6">Áreas de Especialização</h3>
            <div className="grid grid-cols-2 gap-4">
              {techIcons.map((tech, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="p-2 bg-primary/10 rounded-md text-primary">
                      {tech.icon}
                    </div>
                    <span className="font-medium">{tech.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-24">
          <h3 className="text-2xl font-heading font-semibold text-center mb-8">Tecnologias & Ferramentas</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["JavaScript", "TypeScript", "React", "Node.js", "Next.js", 
              "Tailwind CSS", "GraphQL", "REST APIs", "Git", "Figma", 
              "MongoDB", "PostgreSQL", "AWS", "Docker"].map((tech, index) => (
              <div 
                key={index} 
                className="px-4 py-2 bg-white border border-border rounded-full font-medium card-hover"
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
