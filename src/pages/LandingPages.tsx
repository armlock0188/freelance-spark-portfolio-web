
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Layout, Minimize2, Target, Zap } from "lucide-react";

const LandingPages = () => {
  const features = [
    {
      title: "Conversão Otimizada",
      description: "Landing pages projetadas para maximizar suas taxas de conversão e gerar mais leads qualificados.",
      icon: <Target className="h-10 w-10" />
    },
    {
      title: "Design Responsivo",
      description: "Experiência perfeita em todos os dispositivos, de smartphones a desktops.",
      icon: <Minimize2 className="h-10 w-10" />
    },
    {
      title: "Carregamento Rápido",
      description: "Páginas otimizadas para carregar rapidamente e manter visitantes engajados.",
      icon: <Zap className="h-10 w-10" />
    },
    {
      title: "SEO Integrado",
      description: "Estrutura técnica otimizada para mecanismos de busca e maior visibilidade online.",
      icon: <Layout className="h-10 w-10" />
    }
  ];

  const benefits = [
    "Aumento nas taxas de conversão",
    "Mensagens direcionadas para públicos específicos",
    "Integração com ferramentas de marketing",
    "Análise detalhada de resultados",
    "Testes A/B para otimização contínua",
    "Design personalizado para sua marca"
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
                  Landing Pages de <span className="text-primary">Alta Conversão</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                  Criamos landing pages otimizadas para converter visitantes em clientes, 
                  com design atraente e copy persuasiva para maximizar seus resultados.
                </p>
                <Button size="lg" className="text-base px-8">Solicitar Orçamento</Button>
              </div>
              <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg -z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Landing Page Example" 
                  className="rounded-lg shadow-xl object-cover object-center h-[400px] w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="section-container">
            <h2 className="section-title text-center">Recursos Principais</h2>
            <p className="section-subtitle text-center">
              Landing pages estratégicas que impulsionam resultados para o seu negócio.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {features.map((feature, index) => (
                <Card key={index} className="border-0 shadow-md card-hover">
                  <CardContent className="p-6">
                    <div className="text-primary mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-heading font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-[#f8f9fa]">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-6">
                  Benefícios de Landing Pages Profissionais
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Nossas landing pages são projetadas estrategicamente para converter visitantes em clientes, 
                  com cada elemento cuidadosamente pensado para maximizar resultados.
                </p>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button variant="outline" className="group">
                    <span>Ver exemplos de trabalho</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="grid grid-cols-2 gap-4">
                  <img 
                    src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Landing Page Example 1" 
                    className="rounded-lg shadow-md h-48 object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Landing Page Example 2" 
                    className="rounded-lg shadow-md h-48 object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Landing Page Example 3" 
                    className="rounded-lg shadow-md h-48 object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Landing Page Example 4" 
                    className="rounded-lg shadow-md h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="section-container text-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              Pronto para aumentar suas conversões?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Entre em contato hoje mesmo para discutirmos como posso ajudar a criar landing pages 
              de alta conversão para seu negócio.
            </p>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary px-8">
              Solicitar Proposta
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPages;
