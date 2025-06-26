
import { useState, useEffect } from 'react';
import { ArrowRight, Play, ChevronRight, Users, Zap, Shield, Globe, Code, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServicesPreview from '@/components/ServicesPreview';
import FeaturedProjects from '@/components/FeaturedProjects';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY, scrollProgress } = useScrollAnimation();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/40 overflow-hidden relative">
      {/* 3D Parallax Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="absolute top-10 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-xl"
          style={{
            transform: `perspective(1000px) translateZ(${scrollY * 0.1}px) rotateX(${scrollProgress * 360}deg) translateY(${scrollY * 0.2}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        <div 
          className="absolute top-32 right-20 w-24 h-24 bg-indigo-400/10 rounded-lg"
          style={{
            transform: `perspective(1000px) translateZ(${scrollY * 0.15}px) rotateY(${scrollProgress * -180}deg) translateY(${scrollY * -0.1}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        <div 
          className="absolute bottom-20 left-1/3 w-40 h-40 bg-emerald-400/10 rounded-full blur-lg"
          style={{
            transform: `perspective(1000px) translateZ(${scrollY * 0.08}px) rotateZ(${scrollProgress * 180}deg) translateX(${scrollY * 0.05}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
      </div>

      <Header />
      
      {/* Hero Section with Enhanced 3D */}
      <div 
        style={{
          transform: `perspective(1000px) translateZ(${-scrollY * 0.5}px) rotateX(${scrollY * 0.02}deg)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <HeroSection />
      </div>
      
      {/* Services Preview with Parallax */}
      <div 
        style={{
          transform: `perspective(1000px) translateZ(${scrollY * 0.1}px) translateY(${scrollY * -0.1}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <ServicesPreview />
      </div>
      
      {/* Featured Projects with 3D Depth */}
      <div 
        style={{
          transform: `perspective(1000px) translateZ(${scrollY * 0.05}px) rotateY(${scrollProgress * 2}deg)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <FeaturedProjects />
      </div>
      
      {/* Testimonials with Floating Effect */}
      <div 
        style={{
          transform: `perspective(1000px) translateZ(${scrollY * 0.08}px) translateY(${Math.sin(scrollProgress * Math.PI) * 10}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <TestimonialsCarousel />
      </div>
      
      {/* Enhanced 3D CTA Banner */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-10"
          style={{
            transform: `perspective(1000px) translateZ(${scrollY * 0.03}px) rotateX(${scrollProgress * 5}deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        ></div>
        
        {/* 3D Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 bg-blue-400/20 rounded-full"
              style={{
                top: `${10 + (i * 8)}%`,
                left: `${5 + (i * 7)}%`,
                transform: `
                  perspective(1000px) 
                  translateZ(${50 + scrollY * 0.1 + i * 20}px) 
                  rotateX(${scrollProgress * 360 + i * 30}deg) 
                  translateY(${Math.sin(scrollProgress * Math.PI + i) * 20}px)
                `,
                transition: 'transform 0.1s ease-out',
                animation: `float ${3 + i * 0.3}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div 
              className="backdrop-blur-xl bg-white/20 rounded-3xl p-12 border border-white/30 shadow-2xl"
              style={{
                transform: `perspective(1000px) translateZ(${scrollY * 0.05}px) rotateX(${scrollProgress * -3}deg)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Let's Build Something Amazing
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Ready to transform your business with cutting-edge AI and cloud solutions? 
                Our team of experts is here to help you innovate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:translateZ-4"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:translateZ-4"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div 
        style={{
          transform: `perspective(1000px) translateZ(${scrollY * 0.02}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default Index;
