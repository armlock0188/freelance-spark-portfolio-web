
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Database, FileCode, Lock, Server, Shield, Zap } from "lucide-react";

const BackendDevelopment = () => {
  const services = [
    {
      title: "APIs & Integrações",
      description: "Desenvolvimento de APIs RESTful e integração com serviços de terceiros para expandir as funcionalidades do seu sistema.",
      icon: <FileCode className="h-10 w-10" />
    },
    {
      title: "Banco de Dados",
      description: "Modelagem e implementação de bancos de dados otimizados para a necessidade específica do seu negócio.",
      icon: <Database className="h-10 w-10" />
    },
    {
      title: "Segurança & Autenticação",
      description: "Implementação de sistemas de autenticação robustos e medidas de segurança para proteger seus dados.",
      icon: <Shield className="h-10 w-10" />
    },
    {
      title: "Servidores & Infraestrutura",
      description: "Configuração e manutenção de servidores, implantação de aplicações e monitoramento de performance.",
      icon: <Server className="h-10 w-10" />
    }
  ];

  const technologies = [
    "Node.js", "Express", "Python", "Django", "PHP", "Laravel", 
    "PostgreSQL", "MySQL", "MongoDB", "Redis", "GraphQL", "REST APIs",
    "Docker", "Kubernetes", "AWS", "Google Cloud", "Firebase", "Authentication"
  ];

  const benefits = [
    {
      title: "Escalabilidade",
      description: "Sistemas construídos para crescer junto com seu negócio, sem comprometer a performance.",
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: "Segurança",
      description: "Protocolos de segurança robustos para proteger dados sensíveis e informações dos usuários.",
      icon: <Lock className="h-6 w-6" />
    },
    {
      title: "Performance",
      description: "Aplicações otimizadas para operar com máxima eficiência e tempos de resposta rápidos.",
      icon: <Server className="h-6 w-6" />
    },
    {
      title: "Manutenibilidade",
      description: "Código limpo e bem documentado para facilitar manutenções e atualizações futuras.",
      icon: <FileCode className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-white pt-32 pb-16">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl font-heading font-bold leading-tight mb-6">
                  Desenvolvimento <span className="text-primary">Backend</span> Robusto
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                  Construímos a infraestrutura tecnológica necessária para que suas aplicações 
                  funcionem com segurança, velocidade e escalabilidade.
                </p>
                <Button size="lg" className="text-base px-8">
                  Consultar Especialista
                </Button>
              </div>
              <div className="relative hidden lg:block">
                <div className="relative w-full max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg -z-10 transform rotate-3"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80" 
                    alt="Backend Development" 
                    className="rounded-lg shadow-xl relative z-10 transform -rotate-3 object-cover h-[400px] w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="section-container">
            <h2 className="section-title text-center">Serviços de Backend</h2>
            <p className="section-subtitle text-center">
              Soluções backend completas e personalizadas para seu negócio.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {services.map((service, index) => (
                <Card key={index} className="border-0 shadow-md card-hover">
                  <CardContent className="p-6">
                    <div className="text-primary mb-4">{service.icon}</div>
                    <h3 className="text-xl font-heading font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-[#f8f9fa]">
          <div className="section-container">
            <h2 className="section-title text-center">Tecnologias</h2>
            <p className="section-subtitle text-center">
              Dominamos as principais tecnologias e ferramentas de desenvolvimento backend.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              {technologies.map((tech, index) => (
                <div 
                  key={index} 
                  className="px-5 py-3 bg-white shadow-md rounded-full font-medium card-hover"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="section-container">
            <h2 className="section-title text-center">Benefícios</h2>
            <p className="section-subtitle text-center">
              Por que investir em um desenvolvimento backend de qualidade.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-0 shadow-md card-hover">
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 p-3 rounded-full inline-block text-primary mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Teaser */}
        <section className="py-20 bg-[#f8f9fa]">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-6">
                  Soluções Personalizadas para Seu Negócio
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Cada projeto é único e requer uma abordagem específica. Desenvolvemos soluções 
                  backend sob medida para atender às necessidades particulares do seu negócio.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Análise detalhada de requisitos técnicos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Arquitetura de sistemas escaláveis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Integrações com sistemas existentes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Documentação técnica completa</span>
                  </li>
                </ul>
                <Button variant="outline" className="group">
                  <span>Ver casos de sucesso</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div className="hidden lg:block space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Backend Systems" 
                  className="rounded-lg shadow-md w-full object-cover h-64"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="section-container text-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              Pronto para construir sua infraestrutura de sistemas?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Entre em contato hoje mesmo para discutirmos como posso ajudar a desenvolver 
              uma solução backend robusta para seu negócio.
            </p>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary px-8">
              Iniciar Consulta
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BackendDevelopment;
