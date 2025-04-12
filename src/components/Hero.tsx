
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-100 -z-10" />
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Olá, eu sou <span className="text-primary">Seu Nome</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-lg">
              Desenvolvedor freelancer especializado em criar soluções digitais personalizadas 
              para empresas e empreendedores.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="animate-slide-right">
                Ver Projetos
              </Button>
              <Button size="lg" variant="outline" className="animate-slide-right" style={{ animationDelay: '200ms' }}>
                Fale Comigo
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: '300ms' }}>
            <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-blue-200 to-blue-400 rounded-full p-5">
              <div className="w-full h-full bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                <span className="text-lg font-medium">Sua Foto Aqui</span>
              </div>
            </div>
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
