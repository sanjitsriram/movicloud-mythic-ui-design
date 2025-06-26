
import React, { useState, useEffect } from 'react';
import { Users, Target, Lightbulb, Award, ArrowRight, Globe, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollAnimation, useElementInView } from '@/hooks/useScrollAnimation';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY, scrollProgress } = useScrollAnimation();
  const [heroRef, heroInView] = useElementInView(0.2);
  const [timelineRef, timelineInView] = useElementInView(0.3);
  const [teamRef, teamInView] = useElementInView(0.2);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const timeline = [
    { year: 2020, event: 'Founded with a vision to democratize AI', milestone: 'Company Founded' },
    { year: 2021, event: 'First enterprise AI deployment', milestone: '10+ Clients' },
    { year: 2022, event: 'Cloud infrastructure scaling breakthrough', milestone: '50+ Projects' },
    { year: 2023, event: 'International expansion and recognition', milestone: '100+ Deployments' },
    { year: 2024, event: 'Leading the future of intelligent automation', milestone: '500+ Solutions' }
  ];

  const team = [
    { name: 'Alex Chen', role: 'CEO & Founder', bio: 'Former Google AI researcher with 15+ years in machine learning.', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face' },
    { name: 'Sarah Rodriguez', role: 'CTO', bio: 'Ex-Amazon cloud architect specializing in scalable systems.', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face' },
    { name: 'Michael Kim', role: 'Head of AI Research', bio: 'PhD in Computer Science, published 50+ research papers.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face' },
    { name: 'Emily Watson', role: 'VP of Operations', bio: 'MBA from Wharton, expert in scaling tech companies.', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/40 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-blue-400/5 rounded-full blur-xl"
            style={{
              width: `${80 + i * 20}px`,
              height: `${80 + i * 20}px`,
              top: `${10 + i * 12}%`,
              left: `${5 + i * 10}%`,
              transform: `
                perspective(1000px) 
                translateZ(${scrollY * 0.05 + i * 30}px) 
                rotateX(${scrollProgress * 180 + i * 45}deg) 
                rotateY(${scrollProgress * -90 + i * 30}deg)
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
                  Pioneering the Future
                </span>
                <br />
                <span className="text-gray-900">of Technology</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
                We're a team of visionaries, engineers, and innovators dedicated to transforming 
                how businesses leverage AI and cloud technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              { 
                icon: Target, 
                title: 'Our Mission', 
                content: 'To democratize access to cutting-edge AI and cloud technologies, empowering businesses of all sizes to innovate and scale with confidence.',
                color: 'from-blue-500 to-cyan-500'
              },
              { 
                icon: Lightbulb, 
                title: 'Our Vision', 
                content: 'A world where intelligent technology seamlessly integrates with human creativity to solve the most complex challenges facing our society.',
                color: 'from-indigo-500 to-purple-500'
              }
            ].map((item, index) => (
              <Card 
                key={index}
                className="backdrop-blur-xl bg-white/20 border border-white/30 shadow-2xl group cursor-pointer overflow-hidden"
                style={{
                  transform: `perspective(1000px) translateZ(${scrollY * 0.02 + index * 20}px) rotateY(${scrollProgress * (index === 0 ? 3 : -3)}deg)`,
                  transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
              >
                <CardContent className="p-12 relative">
                  <div 
                    className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500 shadow-lg`}
                    style={{
                      transform: `perspective(1000px) translateZ(30px) rotateX(${scrollProgress * 20}deg)`,
                      transition: 'transform 0.3s ease-out'
                    }}
                  >
                    <item.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-gray-900">{item.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section 
        ref={timelineRef}
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Journey</span>
            </h2>
          </div>

          <div className="relative">
            {/* 3D Timeline Line */}
            <div 
              className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-indigo-600 transform -translate-x-1/2"
              style={{
                transform: `perspective(1000px) translateX(-50%) translateZ(${scrollY * 0.05}px) rotateY(${scrollProgress * 10}deg)`,
                transition: 'transform 0.1s ease-out'
              }}
            ></div>

            {timeline.map((item, index) => (
              <div 
                key={index}
                className={`flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                style={{
                  transform: `perspective(1000px) translateZ(${timelineInView ? 30 + index * 10 : 0}px) translateX(${timelineInView ? 0 : (index % 2 === 0 ? -50 : 50)}px)`,
                  opacity: timelineInView ? 1 : 0,
                  transition: `all ${0.8 + index * 0.2}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`
                }}
              >
                <div className="flex-1 p-8">
                  <Card className="backdrop-blur-xl bg-white/80 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        <div 
                          className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-lg"
                          style={{
                            transform: `perspective(1000px) translateZ(20px) rotateY(${scrollProgress * 180}deg)`,
                            transition: 'transform 0.3s ease-out'
                          }}
                        >
                          {item.year}
                        </div>
                        <div className="ml-6">
                          <h3 className="text-xl font-bold text-blue-600 mb-2">{item.milestone}</h3>
                          <p className="text-gray-600">{item.event}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* 3D Timeline Node */}
                <div 
                  className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10 relative"
                  style={{
                    transform: `perspective(1000px) translateZ(${40 + index * 5}px) rotateZ(${scrollProgress * 360}deg)`,
                    transition: 'transform 0.1s ease-out'
                  }}
                ></div>

                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section 
        ref={teamRef}
        className="py-20 relative"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Meet Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white/80 backdrop-blur-sm"
                style={{
                  transform: `perspective(1000px) translateZ(${teamInView ? 30 + index * 10 : 0}px) rotateY(${teamInView ? 0 : 15}deg) translateY(${teamInView ? 0 : 50}px)`,
                  opacity: teamInView ? 1 : 0,
                  transition: `all ${0.6 + index * 0.1}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`
                }}
              >
                <CardContent className="p-8 text-center relative">
                  {/* 3D Avatar Container */}
                  <div 
                    className="relative mb-6 mx-auto w-32 h-32"
                    style={{
                      transform: `perspective(1000px) translateZ(20px) rotateX(${scrollProgress * 10}deg)`,
                      transition: 'transform 0.3s ease-out'
                    }}
                  >
                    <img 
                      src={member.avatar}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto shadow-lg group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* 3D Ring Effect */}
                    <div 
                      className="absolute inset-0 rounded-full border-4 border-blue-600/20 group-hover:border-blue-600/60 transition-all duration-500"
                      style={{
                        transform: `perspective(1000px) translateZ(5px) rotateY(${scrollProgress * 90}deg)`,
                        transition: 'all 0.5s ease-out'
                      }}
                    ></div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>

                  {/* 3D Hover Glow */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"
                    style={{
                      transform: 'translateZ(-5px)'
                    }}
                  ></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Quote Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
        {/* 3D Particle Field */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `
                  perspective(1000px) 
                  translateZ(${scrollY * 0.1 + i * 20}px) 
                  rotateX(${scrollProgress * 360 + i * 30}deg)
                `,
                transition: 'transform 0.1s ease-out',
                animation: `float ${2 + i * 0.2}s ease-in-out infinite`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div 
            className="max-w-4xl mx-auto"
            style={{
              transform: `perspective(1000px) translateZ(50px) rotateX(${scrollProgress * -5}deg)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              "Innovation, Integrity, Impact."
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              These three principles guide everything we do. We believe in pushing the boundaries 
              of what's possible while maintaining the highest standards of ethics and delivering 
              measurable results for our clients.
            </p>
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

export default About;
