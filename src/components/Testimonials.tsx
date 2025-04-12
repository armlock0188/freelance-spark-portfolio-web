
import React from 'react';
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonialsList = [
  {
    name: "Carlos Silva",
    position: "CEO, TechSolutions",
    text: "Um profissional extremamente talentoso e dedicado. Entregou nosso projeto antes do prazo e superou todas as nossas expectativas. Recomendo fortemente!",
    avatar: "bg-gradient-to-br from-blue-300 to-blue-500"
  },
  {
    name: "Ana Rodrigues",
    position: "Diretora de Marketing, StyleBrand",
    text: "Trabalhar com este freelancer foi uma experiência incrível. Compreendeu perfeitamente nossas necessidades e transformou nossa visão em realidade. Faremos mais projetos juntos no futuro.",
    avatar: "bg-gradient-to-br from-purple-300 to-purple-500"
  },
  {
    name: "Roberto Almeida",
    position: "Fundador, StartupX",
    text: "Nosso site nunca esteve tão bonito e funcional. O trabalho realizado aumentou nossas conversões em mais de 200%. Um investimento que valeu cada centavo.",
    avatar: "bg-gradient-to-br from-green-300 to-green-500"
  }
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="section-container">
        <h2 className="section-title">Depoimentos</h2>
        <p className="section-subtitle">
          Veja o que meus clientes dizem sobre meu trabalho e compromisso com a qualidade.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonialsList.map((testimonial, index) => (
            <Card key={index} className="border border-border hover:shadow-lg transition-shadow h-full flex flex-col">
              <CardHeader className="pb-4 flex-shrink-0">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${testimonial.avatar}`}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex">
                  <Quote className="h-6 w-6 text-primary flex-shrink-0 mr-2 mt-1" />
                  <p className="text-gray-600 italic">{testimonial.text}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
