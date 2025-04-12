
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 bg-[#f5f5f5] -z-10" />
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <span className="inline-block text-sm uppercase tracking-wider font-medium text-primary mb-4">Desenvolvedor Web Profissional</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
              Transformando <span className="text-primary">ideias</span> em experiências digitais
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mb-8">
              Desenvolvedor especializado em criar soluções digitais elegantes e eficientes para empresas e empreendedores que buscam excelência.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-base px-8">
                Meus Projetos
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8">
                Entre em Contato
              </Button>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="relative z-10 w-full aspect-square max-w-md ml-auto bg-white rounded-lg shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a202c] to-[#2d3748]"></div>
              <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80')]"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <span className="text-lg font-medium">Seu Portfólio</span>
              </div>
            </div>
            <div className="absolute w-full h-full -top-4 -left-4 border-2 border-primary rounded-lg -z-10"></div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <a href="#services" className="p-2 rounded-full bg-white shadow-md">
            <ArrowDown size={24} className="text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
