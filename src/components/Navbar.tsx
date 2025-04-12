
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Início", href: "/" },
    { name: "Serviços", href: "#services" },
    { name: "Projetos", href: "#projects" },
    { name: "Especialidades", href: "#skills" },
    { name: "Contato", href: "#contact" },
  ];

  const servicePages = [
    { name: "Landing Pages", href: "/landing-pages" },
    { name: "Desenvolvimento Web", href: "/desenvolvimento-web" },
    { name: "Desenvolvimento Backend", href: "/desenvolvimento-backend" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-heading font-bold">
              <span className="text-primary">Portfolio</span>
              <span className="text-gray-800">.pro</span>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href.startsWith('#') ? `/${item.href}` : item.href}
                className="px-3 py-2 text-sm font-medium text-gray-800 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="relative group px-3 py-2">
              <span className="text-sm font-medium text-gray-800 hover:text-primary transition-colors cursor-pointer">
                Serviços
              </span>
              <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  {servicePages.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="ml-6">
              <Button>Contrate-me</Button>
            </div>
          </nav>
          
          {/* Mobile Nav Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-gray-800">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href.startsWith('#') ? `/${item.href}` : item.href}
                className="block py-2 text-base font-medium text-gray-800 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="py-2 border-t border-gray-100 mt-2">
              <p className="text-sm font-medium text-gray-500 mb-2">Serviços</p>
              {servicePages.map((service) => (
                <Link
                  key={service.name}
                  to={service.href}
                  className="block py-2 pl-3 text-base font-medium text-gray-800 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
            <div className="pt-2">
              <Button className="w-full">Contrate-me</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
