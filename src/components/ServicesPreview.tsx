
import React, { useState } from 'react';
import { Brain, Cloud, Smartphone, Shield, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ServicesPreview = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      icon: Brain,
      title: 'AI & Data Engineering',
      description: 'Machine learning models, data pipelines, and intelligent automation solutions.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure, CI/CD pipelines, and automated deployment.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Smartphone,
      title: 'Web & Mobile Apps',
      description: 'Modern, responsive applications built with cutting-edge technologies.',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Shield,
      title: 'IT Strategy & Support',
      description: 'Strategic technology consulting and comprehensive IT support services.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Code,
      title: 'Custom Software',
      description: 'Bespoke software solutions tailored to your unique business requirements.',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section className="py-20 relative" style={{ perspective: '1000px' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              style={{
                transform: hoveredIndex === index 
                  ? 'perspective(1000px) rotateX(-10deg) rotateY(5deg) translateZ(50px) scale(1.05)' 
                  : hoveredIndex !== null 
                    ? 'perspective(1000px) rotateX(2deg) scale(0.95) translateZ(-20px)'
                    : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)',
                transformStyle: 'preserve-3d',
                transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <CardContent className="p-8 text-center relative">
                {/* Enhanced 3D Background Gradient */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  style={{
                    transform: 'translateZ(-10px)',
                    borderRadius: '12px'
                  }}
                ></div>
                
                {/* 3D Icon Container */}
                <div 
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg transition-all duration-500 relative`}
                  style={{
                    transform: hoveredIndex === index 
                      ? 'translateZ(30px) rotateY(360deg) scale(1.2)' 
                      : 'translateZ(10px) rotateY(0deg) scale(1)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* Icon shadow for depth */}
                  <div 
                    className="absolute inset-0 rounded-2xl bg-black/20 blur-md"
                    style={{
                      transform: 'translateZ(-5px) translateY(5px)',
                      opacity: hoveredIndex === index ? 0.3 : 0
                    }}
                  ></div>
                  
                  <service.icon 
                    className="h-8 w-8 text-white relative z-10" 
                    style={{
                      transform: hoveredIndex === index ? 'translateZ(5px)' : 'translateZ(0px)',
                      transition: 'transform 0.3s ease-out'
                    }}
                  />
                </div>

                {/* 3D Content */}
                <div
                  style={{
                    transform: hoveredIndex === index ? 'translateZ(20px)' : 'translateZ(5px)',
                    transition: 'transform 0.3s ease-out'
                  }}
                >
                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Enhanced 3D Hover Effect Line */}
                <div 
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 origin-left"
                  style={{
                    transform: hoveredIndex === index 
                      ? 'scaleX(1) translateZ(15px)' 
                      : 'scaleX(0) translateZ(0px)',
                    transition: 'transform 0.3s ease-out',
                    transformOrigin: 'left center'
                  }}
                ></div>

                {/* 3D Particle Effects */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-400 rounded-full animate-ping"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animationDelay: `${i * 0.1}s`,
                          animationDuration: '1s',
                          transform: `translateZ(${20 + i * 5}px)`
                        }}
                      ></div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
