
import React, { useState } from 'react';
import { Brain, Cloud, Smartphone, Shield, Code, X, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: Brain,
      title: 'AI & Data Engineering',
      shortDescription: 'Machine learning models, data pipelines, and intelligent automation solutions.',
      fullDescription: 'Transform your business with cutting-edge artificial intelligence and data engineering solutions. Our team of ML engineers and data scientists build custom AI models, implement robust data pipelines, and create intelligent automation systems that drive real business value.',
      features: [
        'Custom Machine Learning Models',
        'Predictive Analytics & Forecasting',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Real-time Data Processing',
        'AI Ethics & Governance',
        'MLOps & Model Deployment',
        'Data Pipeline Architecture'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Apache Spark', 'Kubernetes', 'MLflow', 'Apache Airflow', 'AWS SageMaker'],
      color: 'from-blue-500 to-cyan-500',
      projects: [
        { name: 'Healthcare Diagnostic AI', result: '99.2% accuracy improvement' },
        { name: 'Financial Fraud Detection', result: '85% reduction in false positives' },
        { name: 'Supply Chain Optimization', result: '30% cost reduction' }
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      shortDescription: 'Scalable cloud infrastructure, CI/CD pipelines, and automated deployment.',
      fullDescription: 'Accelerate your digital transformation with our comprehensive cloud and DevOps solutions. We design, implement, and manage scalable cloud architectures that grow with your business while ensuring security, reliability, and cost-effectiveness.',
      features: [
        'Multi-Cloud Architecture Design',
        'Containerization & Orchestration',
        'CI/CD Pipeline Implementation',
        'Infrastructure as Code',
        'Cloud Migration Services',
        'Monitoring & Observability',
        'Security & Compliance',
        'Cost Optimization'
      ],
      technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Prometheus', 'Grafana'],
      color: 'from-indigo-500 to-purple-500',
      projects: [
        { name: 'FinTech Platform Migration', result: '99.99% uptime achieved' },
        { name: 'E-commerce Auto-scaling', result: '60% infrastructure cost savings' },
        { name: 'Healthcare Compliance Cloud', result: 'HIPAA certification in 3 months' }
      ]
    },
    {
      icon: Smartphone,
      title: 'Web & Mobile Apps',
      shortDescription: 'Modern, responsive applications built with cutting-edge technologies.',
      fullDescription: 'Create exceptional digital experiences with our full-stack development services. From responsive web applications to native mobile apps, we build products that users love and businesses depend on.',
      features: [
        'Progressive Web Applications',
        'Native Mobile Development',
        'Cross-platform Solutions',
        'API Design & Development',
        'UI/UX Design',
        'Performance Optimization',
        'Accessibility Compliance',
        'Third-party Integrations'
      ],
      technologies: ['React', 'Vue.js', 'React Native', 'Flutter', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
      color: 'from-emerald-500 to-teal-500',
      projects: [
        { name: 'B2B SaaS Platform', result: '500K+ active users' },
        { name: 'Healthcare Mobile App', result: '4.9 star rating' },
        { name: 'E-learning Platform', result: '2M+ course enrollments' }
      ]
    },
    {
      icon: Shield,
      title: 'IT Strategy & Support',
      shortDescription: 'Strategic technology consulting and comprehensive IT support services.',
      fullDescription: 'Navigate the complex technology landscape with our strategic IT consulting and support services. We help you make informed decisions, implement best practices, and maintain secure, efficient IT operations.',
      features: [
        'Digital Transformation Strategy',
        'Technology Roadmap Planning',
        'IT Security Assessments',
        'Vendor Selection & Management',
        '24/7 Technical Support',
        'Backup & Disaster Recovery',
        'Compliance & Governance',
        'Training & Knowledge Transfer'
      ],
      technologies: ['ITIL', 'COBIT', 'ISO 27001', 'SOC 2', 'PCI DSS', 'GDPR', 'ServiceNow', 'Microsoft 365'],
      color: 'from-orange-500 to-red-500',
      projects: [
        { name: 'Enterprise Digital Strategy', result: '40% operational efficiency gain' },
        { name: 'Cybersecurity Overhaul', result: 'Zero security incidents in 2 years' },
        { name: 'IT Modernization Program', result: '$2M annual cost savings' }
      ]
    },
    {
      icon: Code,
      title: 'Custom Software Development',
      shortDescription: 'Bespoke software solutions tailored to your unique business requirements.',
      fullDescription: 'Solve unique business challenges with custom software solutions designed specifically for your needs. Our experienced development team creates scalable, maintainable applications that integrate seamlessly with your existing systems.',
      features: [
        'Requirements Analysis',
        'Custom Application Development',
        'Legacy System Modernization',
        'API Integration Services',
        'Database Design & Optimization',
        'Performance Tuning',
        'Quality Assurance Testing',
        'Ongoing Maintenance & Support'
      ],
      technologies: ['Java', 'C#', '.NET', 'Python', 'Go', 'Ruby', 'PHP', 'PostgreSQL', 'Oracle', 'Redis'],
      color: 'from-purple-500 to-pink-500',
      projects: [
        { name: 'Enterprise Resource Planning', result: 'Streamlined operations for 10K+ employees' },
        { name: 'Custom CRM Solution', result: '25% increase in sales productivity' },
        { name: 'Manufacturing Execution System', result: '20% reduction in production time' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/40">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation journey. 
              From AI-powered insights to cloud-native architectures, we deliver results that matter.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer bg-white/80 backdrop-blur-sm"
                onClick={() => setSelectedService(service)}
              >
                <CardContent className="p-8 text-center relative h-full flex flex-col">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Icon Container */}
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-10 w-10 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-grow mb-6">
                    {service.shortDescription}
                  </p>

                  <Button 
                    variant="ghost" 
                    className="w-full justify-center text-blue-600 hover:text-blue-700 hover:bg-blue-50 group/btn"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>

                  {/* Hover Effect */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          {selectedService && (
            <div>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold flex items-center">
                  <div className={`w-12 h-12 mr-4 rounded-2xl bg-gradient-to-br ${selectedService.color} flex items-center justify-center`}>
                    <selectedService.icon className="h-6 w-6 text-white" />
                  </div>
                  {selectedService.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="mt-6 space-y-8">
                <p className="text-lg text-gray-600 leading-relaxed">
                  {selectedService.fullDescription}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Success Stories</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {selectedService.projects.map((project, idx) => (
                      <div key={idx} className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">{project.name}</h4>
                        <p className="text-sm text-green-600 font-medium">{project.result}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-lg font-semibold flex-1"
                  >
                    Get Started
                  </Button>
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold flex-1"
                  >
                    Schedule Consultation
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

export default Services;
