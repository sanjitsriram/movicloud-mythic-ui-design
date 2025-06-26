
import React, { useState } from 'react';
import { ExternalLink, Calendar, Users, TrendingUp, Filter, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Healthcare', 'Finance', 'Manufacturing', 'E-commerce', 'Education'];

  const projects = [
    {
      title: 'HealthTech AI Diagnostic Platform',
      industry: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      description: 'AI-powered diagnostic platform revolutionizing healthcare delivery with machine learning.',
      metrics: ['99.2% Accuracy', '50K+ Patients Daily', '40% Faster Diagnosis', '15 Hospitals'],
      technologies: ['Python', 'TensorFlow', 'React', 'AWS', 'Docker', 'PostgreSQL'],
      timeline: '8 months',
      teamSize: '12 members',
      challenge: 'The client needed to improve diagnostic accuracy while reducing the time required for medical image analysis. Traditional methods were prone to human error and took too long for critical cases.',
      solution: 'We developed a comprehensive AI platform using deep learning models trained on over 1 million medical images. The system integrates seamlessly with existing hospital workflows and provides real-time diagnostic suggestions.',
      results: [
        'Increased diagnostic accuracy from 85% to 99.2%',
        'Reduced average diagnosis time from 2 hours to 45 minutes',
        'Deployed across 15 major hospitals',
        'Processing 50,000+ patient cases daily',
        'Saved an estimated 10,000 hours of physician time monthly'
      ],
      testimonial: {
        text: "This AI platform has transformed how we approach diagnostics. The accuracy improvements have been remarkable.",
        author: "Dr. Sarah Chen, Chief Medical Officer"
      }
    },
    {
      title: 'FinTech Cloud Infrastructure',
      industry: 'Finance',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      description: 'Scalable cloud architecture processing billions in transactions with zero downtime.',
      metrics: ['$1B+ Processed', '99.99% Uptime', '10x Scalability', '50ms Latency'],
      technologies: ['Kubernetes', 'Docker', 'AWS', 'Node.js', 'Redis', 'PostgreSQL'],
      timeline: '12 months',
      teamSize: '15 members',
      challenge: 'The financial services company was experiencing downtime during peak trading hours and needed a solution that could handle massive transaction volumes while maintaining regulatory compliance.',
      solution: 'We architected a multi-region, auto-scaling cloud infrastructure with real-time monitoring, automated failover, and comprehensive security measures. The system was designed to handle 10x the current transaction volume.',
      results: [
        'Achieved 99.99% uptime (previously 99.5%)',
        'Reduced average response time from 200ms to 50ms',
        'Successfully processed over $1B in transactions',
        'Passed all regulatory compliance audits',
        'Reduced infrastructure costs by 40%'
      ],
      testimonial: {
        text: "The new infrastructure has been flawless. We've handled our highest trading volumes without any issues.",
        author: "Michael Rodriguez, VP of Engineering"
      }
    },
    {
      title: 'Smart Manufacturing IoT Platform',
      industry: 'Manufacturing',
      image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600&h=400&fit=crop',
      description: 'IoT-enabled production optimization reducing costs across multiple facilities.',
      metrics: ['30% Cost Reduction', '15 Facilities', '24/7 Monitoring', '95% Efficiency'],
      technologies: ['IoT', 'Azure', 'Python', 'Power BI', 'InfluxDB', 'Grafana'],
      timeline: '10 months',
      teamSize: '18 members',
      challenge: 'The manufacturing company had limited visibility into their production processes across multiple facilities, leading to inefficiencies and unexpected downtime.',
      solution: 'We implemented a comprehensive IoT platform with thousands of sensors, real-time analytics, and predictive maintenance capabilities. The system provides complete visibility into all manufacturing processes.',
      results: [
        'Reduced operational costs by 30%',
        'Decreased unplanned downtime by 85%',
        'Improved overall equipment effectiveness to 95%',
        'Deployed across 15 manufacturing facilities',
        'Prevented 47 potential equipment failures'
      ],
      testimonial: {
        text: "The IoT platform has given us unprecedented visibility into our operations. The cost savings have been substantial.",
        author: "Emily Watson, Director of Operations"
      }
    },
    {
      title: 'E-commerce Personalization Engine',
      industry: 'E-commerce',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      description: 'AI-driven personalization platform boosting conversion rates and customer satisfaction.',
      metrics: ['45% Conversion Increase', '2M+ Users', '85% Satisfaction', '3.2x Revenue'],
      technologies: ['Python', 'React', 'AWS', 'Elasticsearch', 'Redis', 'Apache Kafka'],
      timeline: '6 months',
      teamSize: '10 members',
      challenge: 'The e-commerce platform was struggling with low conversion rates and poor customer engagement due to generic product recommendations and lack of personalization.',
      solution: 'We built an AI-powered personalization engine that analyzes user behavior, preferences, and purchase history to deliver highly targeted product recommendations and personalized shopping experiences.',
      results: [
        'Increased conversion rates by 45%',
        'Improved customer satisfaction scores to 85%',
        'Generated 3.2x increase in revenue per user',
        'Reduced cart abandonment by 35%',
        'Serving personalized experiences to 2M+ users'
      ],
      testimonial: {
        text: "The personalization engine has completely transformed our customer experience and bottom line.",
        author: "David Park, Head of E-commerce"
      }
    },
    {
      title: 'EdTech Learning Management System',
      industry: 'Education',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop',
      description: 'Comprehensive learning platform serving millions of students worldwide.',
      metrics: ['2M+ Students', '10K+ Courses', '4.8 Rating', '95% Completion'],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'WebRTC', 'Socket.io'],
      timeline: '14 months',
      teamSize: '20 members',
      challenge: 'The educational institution needed a scalable platform to deliver online courses to millions of students while maintaining high engagement and completion rates.',
      solution: 'We developed a comprehensive learning management system with interactive features, real-time collaboration tools, adaptive learning paths, and robust analytics to track student progress.',
      results: [
        'Onboarded 2M+ students across 150 countries',
        'Achieved 95% course completion rate',
        'Maintained 4.8/5 student satisfaction rating',
        'Reduced infrastructure costs by 50%',
        'Enabled delivery of 10,000+ courses'
      ],
      testimonial: {
        text: "This LMS has enabled us to reach students globally while maintaining the quality of education we're known for.",
        author: "Lisa Zhang, VP of Digital Learning"
      }
    },
    {
      title: 'Supply Chain Optimization Platform',
      industry: 'Manufacturing',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
      description: 'AI-powered supply chain management reducing costs and improving efficiency.',
      metrics: ['25% Cost Savings', '60% Faster Delivery', '99% Accuracy', '200+ Suppliers'],
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'Apache Spark', 'Docker'],
      timeline: '9 months',
      teamSize: '14 members',
      challenge: 'The company was facing supply chain inefficiencies, unpredictable delivery times, and high operational costs due to lack of visibility and predictive capabilities.',
      solution: 'We created an AI-powered supply chain optimization platform that predicts demand, optimizes inventory levels, and automates supplier selection based on performance metrics and real-time data.',
      results: [
        'Reduced supply chain costs by 25%',
        'Improved delivery speed by 60%',
        'Achieved 99% demand forecasting accuracy',
        'Integrated with 200+ suppliers',
        'Reduced inventory holding costs by 40%'
      ],
      testimonial: {
        text: "The supply chain platform has revolutionized our operations. We've never been more efficient or cost-effective.",
        author: "James Wilson, Supply Chain Director"
      }
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.industry === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/40">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Discover how we've helped leading companies transform their operations with innovative 
              technology solutions. Each project represents our commitment to delivering exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer bg-white/80 backdrop-blur-sm"
                onClick={() => setSelectedProject(project)}
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
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {project.metrics.slice(0, 4).map((metric, idx) => (
                      <div key={idx} className="text-xs text-gray-500 flex items-center">
                        <TrendingUp className="w-3 h-3 text-emerald-500 mr-1" />
                        {metric}
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <Button 
                    variant="ghost" 
                    className="w-full justify-between text-blue-600 hover:text-blue-700 hover:bg-blue-50 group/btn text-sm"
                  >
                    View Case Study
                    <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <div>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="mt-6 space-y-8">
                {/* Project Image */}
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                      {selectedProject.industry}
                    </span>
                    <div className="flex space-x-4 text-white text-sm">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {selectedProject.timeline}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {selectedProject.teamSize}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {selectedProject.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                      <div className="text-lg font-bold text-blue-600">{metric.split(' ')[0]}</div>
                      <div className="text-sm text-gray-600">{metric.split(' ').slice(1).join(' ')}</div>
                    </div>
                  ))}
                </div>

                {/* Challenge & Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Challenge</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedProject.challenge}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Solution</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Results</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.results.map((result, idx) => (
                      <div key={idx} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                        {result}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Client Testimonial</h3>
                  <blockquote className="text-gray-700 italic mb-4">
                    "{selectedProject.testimonial.text}"
                  </blockquote>
                  <div className="text-blue-600 font-semibold">
                    — {selectedProject.testimonial.author}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-lg font-semibold flex-1"
                  >
                    Start Similar Project
                  </Button>
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold flex-1"
                  >
                    Download Case Study
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Projects;
