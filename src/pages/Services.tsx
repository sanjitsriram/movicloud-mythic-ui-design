
import React, { useState } from 'react';
import { Brain, Cloud, Smartphone, Shield, Code, ArrowRight, Check, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollAnimation, useElementInView } from '@/hooks/useScrollAnimation';

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const { scrollY, scrollProgress } = useScrollAnimation();
  const [heroRef, heroInView] = useElementInView(0.2);
  const [servicesRef, servicesInView] = useElementInView(0.1);

  const services = [
    {
      icon: Brain,
      title: 'AI & Data Engineering',
      description: 'Transform your data into intelligent insights with cutting-edge machine learning models and automated analytics.',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'Data Pipeline Automation'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Scale seamlessly with robust cloud infrastructure, automated deployments, and enterprise-grade security.',
      features: ['Cloud Migration', 'Kubernetes Orchestration', 'CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Alerting'],
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-50 to-purple-50'
    },
    {
      icon: Smartphone,
      title: 'Web & Mobile Apps',
      description: 'Create exceptional user experiences with modern, responsive applications built for performance and scale.',
      features: ['React & Next.js', 'Mobile-First Design', 'Progressive Web Apps', 'API Development', 'Performance Optimization'],
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'from-emerald-50 to-teal-50'
    },
    {
      icon: Shield,
      title: 'IT Strategy & Support',
      description: 'Strategic technology planning and comprehensive support to align your IT infrastructure with business goals.',
      features: ['Technology Consulting', 'Security Auditing', 'Digital Transformation', '24/7 Support', 'Compliance Management'],
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50'
    },
    {
      icon: Code,
      title: 'Custom Software',
      description: 'Bespoke software solutions tailored to your unique business requirements and industry challenges.',
      features: ['Enterprise Applications', 'API Integration', 'Legacy System Modernization', 'Microservices Architecture', 'Custom Workflows'],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/40 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              width: `${20 + i * 5}px`,
              height: `${20 + i * 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(99, 102, 241, 0.1))`,
              borderRadius: i % 2 === 0 ? '50%' : '0%',
              transform: `
                perspective(1000px) 
                translateZ(${scrollY * 0.05 + i * 25}px) 
                rotateX(${scrollProgress * 180 + i * 45}deg) 
                rotateY(${scrollProgress * -120 + i * 30}deg)
              `,
              transition: 'transform 0.1s ease-out'
            }}
          />
        ))}
      </div>

      <Header />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="pt-32 pb-20 relative"
        style={{
          transform: `perspective(1000px) translateZ(${-scrollY * 0.3}px) rotateX(${scrollY * 0.01}deg)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div 
              className={`transition-all duration-1000 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{
                transform: `perspective(1000px) translateZ(${heroInView ? 50 : 0}px)`,
                transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Transform Your Business
                </span>
                <br />
                <span className="text-gray-900">with Advanced Technology</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
                From AI-powered solutions to cloud infrastructure, we deliver comprehensive 
                technology services that drive innovation and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section 
        ref={servicesRef}
        className="py-20 relative"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer"
                style={{
                  transform: `perspective(1000px) translateZ(${servicesInView ? 30 + index * 15 : 0}px) rotateY(${servicesInView ? 0 : 20}deg) translateY(${servicesInView ? 0 : 50}px)`,
                  opacity: servicesInView ? 1 : 0,
                  transition: `all ${0.8 + index * 0.1}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`
                }}
                onMouseEnter={() => setActiveService(index)}
              >
                {/* 3D Background Gradient */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-60 transition-all duration-500`}
                  style={{
                    transform: 'translateZ(-10px)',
                    borderRadius: '12px'
                  }}
                />

                <CardContent className="p-8 relative">
                  {/* 3D Icon Container */}
                  <div 
                    className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500 shadow-lg`}
                    style={{
                      transform: `perspective(1000px) translateZ(${activeService === index ? 40 : 20}px) rotateY(${scrollProgress * 180}deg)`,
                      transition: 'transform 0.5s ease-out'
                    }}
                  >
                    <service.icon className="h-10 w-10 text-white" />
                  </div>

                  {/* 3D Content */}
                  <div
                    style={{
                      transform: `perspective(1000px) translateZ(${activeService === index ? 25 : 10}px)`,
                      transition: 'transform 0.3s ease-out'
                    }}
                  >
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Feature List */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-center text-sm text-gray-600"
                          style={{
                            transform: `perspective(1000px) translateZ(${activeService === index ? 15 + idx * 3 : 5}px)`,
                            transition: `transform ${0.2 + idx * 0.05}s ease-out`,
                            transitionDelay: `${idx * 50}ms`
                          }}
                        >
                          <Check className="h-4 w-4 text-emerald-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button 
                      variant="ghost" 
                      className="w-full justify-between text-blue-600 hover:text-blue-700 hover:bg-blue-50 group/btn"
                      style={{
                        transform: `perspective(1000px) translateZ(${activeService === index ? 20 : 10}px)`,
                        transition: 'transform 0.3s ease-out'
                      }}
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  {/* 3D Hover Line */}
                  <div 
                    className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 origin-left"
                    style={{
                      transform: activeService === index 
                        ? 'scaleX(1) translateZ(20px)' 
                        : 'scaleX(0) translateZ(0px)',
                      transition: 'transform 0.3s ease-out',
                      transformOrigin: 'left center'
                    }}
                  />

                  {/* 3D Floating Particles */}
                  {activeService === index && (
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-blue-400 rounded-full animate-ping"
                          style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.2}s`,
                            animationDuration: '2s',
                            transform: `translateZ(${30 + i * 10}px)`
                          }}
                        />
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with 3D Effects */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
        {/* 3D Geometric Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-white/20 rounded-lg"
              style={{
                width: `${40 + i * 20}px`,
                height: `${40 + i * 20}px`,
                top: `${10 + (i * 8)}%`,
                left: `${5 + (i * 7)}%`,
                transform: `
                  perspective(1000px) 
                  rotateX(${45 + scrollProgress * 180 + i * 30}deg) 
                  rotateY(${45 + scrollProgress * 120 + i * 45}deg) 
                  translateZ(${50 + i * 20}px)
                `,
                transformStyle: 'preserve-3d',
                animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 rounded-lg backdrop-blur-sm" />
            </div>
          ))}
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div 
            className="max-w-4xl mx-auto"
            style={{
              transform: `perspective(1000px) translateZ(50px) rotateX(${scrollProgress * -3}deg)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              Let's discuss how our technology solutions can accelerate your digital transformation 
              and drive measurable results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:translateZ-4"
                style={{ transformStyle: 'preserve-3d' }}
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:translateZ-4"
                style={{ transformStyle: 'preserve-3d' }}
              >
                Schedule Consultation
              </Button>
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

export default Services;
