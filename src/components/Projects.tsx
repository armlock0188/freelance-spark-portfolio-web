
import React from 'react';
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projectsList = [
  {
    title: "E-commerce Fashion",
    description: "Um site de e-commerce moderno para uma loja de roupas, com catálogo de produtos, carrinho de compras e sistema de pagamento.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    image: "bg-gradient-to-br from-purple-400 to-indigo-600",
    linkDemo: "#",
    linkGithub: "#"
  },
  {
    title: "App de Gestão Financeira",
    description: "Aplicativo web para controle de despesas pessoais com dashboards, gráficos e relatórios personalizados.",
    tags: ["React", "TypeScript", "Firebase", "Chart.js"],
    image: "bg-gradient-to-br from-blue-400 to-cyan-600",
    linkDemo: "#",
    linkGithub: "#"
  },
  {
    title: "Site para Restaurante",
    description: "Desenvolvimento de site completo para restaurante com menu digital, sistema de reservas e integração com delivery.",
    tags: ["Next.js", "Tailwind CSS", "Supabase", "Vercel"],
    image: "bg-gradient-to-br from-amber-400 to-orange-600",
    linkDemo: "#",
    linkGithub: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-50 py-24">
      <div className="section-container">
        <h2 className="section-title">Projetos Recentes</h2>
        <p className="section-subtitle">
          Confira alguns dos trabalhos que desenvolvi para clientes e projetos pessoais.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {projectsList.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden border border-border hover:shadow-xl transition-shadow"
            >
              <div className={`h-48 ${project.image} flex items-center justify-center text-white font-medium`}>
                Imagem do Projeto
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 bg-blue-50 text-primary text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.linkDemo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.linkGithub} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github size={16} />
                      Código
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg">Ver Todos os Projetos</Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
