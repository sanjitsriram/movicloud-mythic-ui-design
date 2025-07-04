
import React, { useEffect, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced 3D Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-60"></div>
        
        {/* 3D Floating Elements */}
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{
            transform: `translateX(${mousePosition.x * 20}px) translateY(${mousePosition.y * 20}px) rotateX(${mousePosition.y * 10}deg) rotateY(${mousePosition.x * 10}deg)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
        
        <div 
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"
          style={{
            transform: `translateX(${mousePosition.x * -15}px) translateY(${mousePosition.y * -15}px) rotateX(${mousePosition.y * -8}deg) rotateY(${mousePosition.x * -8}deg)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
        
        <div 
          className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"
          style={{
            transform: `translateX(${mousePosition.x * 10}px) translateY(${mousePosition.y * 10}px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5}deg)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
      </div>

      {/* Enhanced 3D AI Waveform Animation */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div 
          className="perspective-1000"
          style={{
            transform: `rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5}deg)`,
            transition: 'transform 0.3s ease-out'
          }}
        >
          <svg width="800" height="400" viewBox="0 0 800 400" className="opacity-10">
            {[...Array(40)].map((_, i) => (
              <rect
                key={i}
                x={i * 20}
                y={200 - Math.random() * 100}
                width="4"
                height={Math.random() * 200}
                fill="url(#gradient)"
                className="animate-pulse"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                  transform: `perspective(500px) rotateY(${Math.sin(i * 0.5) * 10}deg) translateZ(${Math.sin(i * 0.3) * 20}px)`,
                  transformOrigin: 'center center'
                }}
              />
            ))}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#6366F1" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* 3D Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-20 h-20 border border-blue-200/30 rounded-lg animate-pulse"
            style={{
              top: `${20 + (i * 10)}%`,
              left: `${10 + (i * 8)}%`,
              transform: `
                perspective(1000px) 
                rotateX(${45 + mousePosition.y * 20}deg) 
                rotateY(${45 + mousePosition.x * 20 + i * 45}deg) 
                translateZ(${50 + i * 10}px)
              `,
              transformStyle: 'preserve-3d',
              animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
              transition: 'transform 0.3s ease-out'
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-lg backdrop-blur-sm"></div>
          </div>
        ))}
      </div>

      {/* Content with 3D transforms */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * 2}deg) translateZ(50px)`,
              transition: 'transform 0.3s ease-out'
            }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Innovating Tomorrow's
              </span>
              <br />
              <span className="text-gray-900">Technology — Today.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              AI. Cloud. DevOps. Scalable intelligence for the real world.
              <br />
              <span className="text-lg text-gray-500 mt-2 block">
                Empowering digital transformation through deep tech solutions.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:translateZ-4 group"
                style={{
                  transformStyle: 'preserve-3d'
                }}
              >
                Start a Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm bg-white/20 hover:translateZ-4 group"
                style={{
                  transformStyle: 'preserve-3d'
                }}
              >
                <Play className="mr-2 h-5 w-5" />
                See Our Impact
              </Button>
            </div>

            {/* Enhanced 3D Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {[
                { number: '500+', label: 'Projects Delivered' },
                { number: '99.9%', label: 'Uptime Guarantee' },
                { number: '50+', label: 'Enterprise Clients' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="backdrop-blur-xl bg-white/30 rounded-2xl p-6 border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:translateZ-8 group"
                  style={{
                    transform: `perspective(1000px) rotateY(${mousePosition.x * 5}deg) translateZ(${index * 10}px)`,
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.3s ease-out'
                  }}
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
