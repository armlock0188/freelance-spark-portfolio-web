
import React from 'react';
import { Code, PenTool, Layout, Database, Smartphone, LineChart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const servicesList = [
  {
    icon: <Code className="h-12 w-12 text-primary" />,
    title: "Desenvolvimento Web",
    description: "Criação de sites e aplicações web modernas, responsivas e otimizadas para mecanismos de busca."
  },
  {
    icon: <PenTool className="h-12 w-12 text-primary" />,
    title: "UI/UX Design",
    description: "Design de interfaces intuitivas e experiências de usuário que convertem visitantes em clientes."
  },
  {
    icon: <Layout className="h-12 w-12 text-primary" />,
    title: "Landing Pages",
    description: "Páginas de conversão otimizadas para marketing e vendas, com foco em resultados."
  },
  {
    icon: <Database className="h-12 w-12 text-primary" />,
    title: "Desenvolvimento Backend",
    description: "Criação de APIs, sistemas e banco de dados robustos para suas aplicações."
  },
  {
    icon: <Smartphone className="h-12 w-12 text-primary" />,
    title: "Sites Responsivos",
    description: "Desenvolvimento de sites adaptáveis a todos os dispositivos e tamanhos de tela."
  },
  {
    icon: <LineChart className="h-12 w-12 text-primary" />,
    title: "SEO & Analytics",
    description: "Otimização para mecanismos de busca e implementação de ferramentas de análise."
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-white py-24">
      <div className="section-container">
        <h2 className="section-title">Meus Serviços</h2>
        <p className="section-subtitle">
          Ofereço soluções completas para sua presença digital, desde o design até a implementação.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {servicesList.map((service, index) => (
            <Card key={index} className="border border-border hover:shadow-lg transition-shadow overflow-hidden">
              <CardHeader className="pb-4">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
