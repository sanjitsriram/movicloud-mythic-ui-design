
import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const FeaturedProjects = () => {
  const projects = [
    {
      title: 'HealthTech AI Platform',
      industry: 'Healthcare',
      description: 'AI-powered diagnostic platform serving 50,000+ patients daily with 99.2% accuracy.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      metrics: ['99.2% Accuracy', '50K+ Patients', '40% Faster Diagnosis'],
      tech: ['Python', 'TensorFlow', 'AWS', 'React']
    },
    {
      title: 'FinTech Cloud Infrastructure',
      industry: 'Finance',
      description: 'Scalable cloud architecture processing $1B+ in transactions with zero downtime.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      metrics: ['$1B+ Processed', '99.99% Uptime', '10x Scalability'],
      tech: ['Kubernetes', 'Docker', 'AWS', 'Node.js']
    },
    {
      title: 'Smart Manufacturing IoT',
      industry: 'Manufacturing',
      description: 'IoT-enabled production optimization reducing costs by 30% across 15 facilities.',
      image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600&h=400&fit=crop',
      metrics: ['30% Cost Reduction', '15 Facilities', '24/7 Monitoring'],
      tech: ['IoT', 'Azure', 'Python', 'Power BI']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Featured <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped leading companies transform their operations with innovative technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer bg-white/80 backdrop-blur-sm"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                    {project.industry}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-1 gap-2 mb-6">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      {metric}
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <Button 
                  variant="ghost" 
                  className="w-full justify-between text-blue-600 hover:text-blue-700 hover:bg-blue-50 group/btn"
                >
                  View Case Study
                  <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
