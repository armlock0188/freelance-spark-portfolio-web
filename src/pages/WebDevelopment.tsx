
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Code, Globe, Palette, ShieldCheck, Smartphone, Zap } from "lucide-react";

const WebDevelopment = () => {
  const services = [
    {
      title: "Sites Institucionais",
      description: "Sites profissionais que representam a identidade da sua marca e comunicam sua mensagem com clareza.",
      icon: <Globe className="h-10 w-10" />
    },
    {
      title: "E-commerce",
      description: "Lojas virtuais completas e otimizadas para vender seus produtos ou serviços online.",
      icon: <ShieldCheck className="h-10 w-10" />
    },
    {
      title: "Aplicações Web",
      description: "Sistemas web personalizados para otimizar processos específicos do seu negócio.",
      icon: <Code className="h-10 w-10" />
    },
    {
      title: "Sites Responsivos",
      description: "Websites que se adaptam perfeitamente a qualquer dispositivo, de desktops a smartphones.",
      icon: <Smartphone className="h-10 w-10" />
    }
  ];

  const technologies = [
    {
      name: "Front-end",
      items: ["React", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      name: "Back-end",
      items: ["Node.js", "Express", "PHP", "Laravel", "Python"]
    },
    {
      name: "CMS",
      items: ["WordPress", "Strapi", "Contentful", "Sanity"]
    },
    {
      name: "E-commerce",
      items: ["WooCommerce", "Shopify", "Magento", "Custom Solutions"]
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Descoberta & Planejamento",
      description: "Entendemos seus objetivos e elaboramos uma estratégia personalizada para o projeto."
    },
    {
      number: "02",
      title: "Design & Wireframes",
      description: "Criamos o design visual e a estrutura do site com foco na experiência do usuário."
    },
    {
      number: "03",
      title: "Desenvolvimento",
      description: "Programamos seu site com código limpo, seguindo as melhores práticas da indústria."
    },
    {
      number: "04",
      title: "Teste & Lançamento",
      description: "Testamos minuciosamente e lançamos seu projeto com suporte técnico completo."
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
                  Desenvolvimento <span className="text-primary">Web</span> Profissional
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                  Criamos sites e aplicações web personalizadas que combinam design 
                  excepcional com funcionalidade robusta para impulsionar seu negócio.
                </p>
                <Button size="lg" className="text-base px-8 bg-primary text-white hover:bg-primary/90">
                  Iniciar Projeto
                </Button>
              </div>
              <div className="relative hidden lg:flex justify-end">
                <div className="relative w-full max-w-md">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg -z-10 transform rotate-3"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80" 
                    alt="Web Development" 
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
            <h2 className="section-title text-center">Serviços de Desenvolvimento Web</h2>
            <p className="section-subtitle text-center">
              Soluções web completas para atender às necessidades do seu negócio.
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

        {/* Process Section */}
        <section className="py-20 bg-[#f8f9fa]">
          <div className="section-container">
            <h2 className="section-title text-center">Nosso Processo</h2>
            <p className="section-subtitle text-center">
              Uma abordagem estruturada para entregar projetos web de alta qualidade.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {processSteps.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md card-hover">
                  <div className="text-5xl font-bold text-primary/20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-heading font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20">
          <div className="section-container">
            <h2 className="section-title text-center">Tecnologias</h2>
            <p className="section-subtitle text-center">
              Utilizamos as ferramentas mais modernas e eficientes do mercado.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-heading font-bold mb-4 text-primary">{tech.name}</h3>
                  <ul className="space-y-2">
                    {tech.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="section-container text-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              Pronto para transformar sua presença online?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Entre em contato hoje mesmo para discutirmos como posso ajudar a criar 
              uma solução web personalizada para seu negócio.
            </p>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary px-8 py-2 rounded-md text-base">
              Solicitar Orçamento
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WebDevelopment;
