
import React, { useState, useEffect } from 'react';
import { Users, Target, Eye, Award, Linkedin, Twitter, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const timeline = [
    {
      year: '2019',
      title: 'Founded',
      description: 'Movicloud Labs was founded with a vision to democratize AI and cloud technologies.'
    },
    {
      year: '2020',
      title: 'First Major Client',
      description: 'Secured our first enterprise client, delivering a transformative AI solution.'
    },
    {
      year: '2021',
      title: 'Series A Funding',
      description: 'Raised $10M to expand our team and capabilities across multiple domains.'
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description: 'Opened offices in London and Singapore, serving clients worldwide.'
    },
    {
      year: '2023',
      title: 'AI Excellence Award',
      description: 'Recognized as the leading AI innovation company by TechCrunch.'
    },
    {
      year: '2024',
      title: 'Sustainable Growth',
      description: 'Reached 500+ successful projects with 50+ enterprise clients globally.'
    }
  ];

  const team = [
    {
      name: 'Alex Chen',
      role: 'CEO & Founder',
      bio: 'Former Google AI researcher with 15+ years in enterprise technology.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Sarah Kim',
      role: 'CTO',
      bio: 'Ex-Amazon cloud architect specializing in scalable infrastructure solutions.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      social: { linkedin: '#', github: '#' }
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of AI',
      bio: 'PhD in Machine Learning from Stanford, published researcher in AI ethics.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Emily Watson',
      role: 'VP of Engineering',
      bio: 'Former Microsoft principal engineer with expertise in large-scale systems.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      social: { linkedin: '#', github: '#' }
    },
    {
      name: 'David Park',
      role: 'Head of Design',
      bio: 'Award-winning UX designer with experience at Apple and Airbnb.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Lisa Zhang',
      role: 'Director of Operations',
      bio: 'Operations expert with MBA from Wharton, scaling tech companies globally.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face',
      social: { linkedin: '#', twitter: '#' }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/40">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              About <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Movicloud Labs</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We're a team of passionate technologists, researchers, and innovators dedicated to building 
              the future of AI and cloud computing. Our mission is to democratize advanced technology 
              and make it accessible to businesses of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-blue-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To empower businesses with cutting-edge AI and cloud technologies that drive innovation, 
                  efficiency, and growth. We believe that advanced technology should be accessible, 
                  reliable, and transformative for organizations ready to embrace the future.
                </p>
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                  <h3 className="font-bold text-blue-900 mb-3">Core Values</h3>
                  <ul className="space-y-2 text-blue-800">
                    <li>• Innovation through collaboration</li>
                    <li>• Integrity in every solution</li>
                    <li>• Excellence in execution</li>
                    <li>• Sustainability in growth</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="h-8 w-8 text-indigo-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To become the global leader in AI-powered cloud solutions, creating a world where 
                  intelligent technology seamlessly integrates with human creativity to solve the 
                  most complex challenges facing businesses and society.
                </p>
                <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl">
                  <h3 className="font-bold text-indigo-900 mb-3">2024 Goals</h3>
                  <ul className="space-y-2 text-indigo-800">
                    <li>• Serve 100+ enterprise clients</li>
                    <li>• Launch AI ethics framework</li>
                    <li>• Achieve carbon neutrality</li>
                    <li>• Open 3 new global offices</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small startup to a global technology leader, discover the milestones that shaped our growth.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>
            
            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Meet Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The brilliant minds behind Movicloud Labs. Our diverse team brings together expertise from 
              the world's leading technology companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    />
                    <div className="absolute inset-0 w-24 h-24 rounded-full mx-auto bg-gradient-to-br from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{member.bio}</p>
                  
                  <div className="flex justify-center space-x-3">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-200">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center text-white hover:bg-blue-500 transition-colors duration-200">
                        <Twitter className="h-4 w-4" />
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-white hover:bg-gray-900 transition-colors duration-200">
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              "Innovation, Integrity, Scale."
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              These three words define everything we do at Movicloud Labs. We innovate with purpose, 
              operate with integrity, and build solutions that scale with your ambitions.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
