
import React, { useState } from 'react';
import { MapPin, Calendar, DollarSign, Users, Heart, Lightbulb, Target, Upload, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);
  const [filterLocation, setFilterLocation] = useState('All');
  const [filterRole, setFilterRole] = useState('All');

  const cultureValues = [
    {
      icon: Lightbulb,
      title: 'Curiosity',
      description: 'We foster a culture of continuous learning and exploration, encouraging innovative thinking and creative problem-solving.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe the best solutions come from diverse perspectives working together towards common goals.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Target,
      title: 'Ownership',
      description: 'We take responsibility for our work and decisions, empowering each team member to drive meaningful impact.',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Heart,
      title: 'Empathy',
      description: 'We design with users in mind, creating technology that truly serves human needs and improves lives.',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const jobs = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$150,000 - $220,000',
      posted: '2 days ago',
      description: 'Join our AI team to build next-generation machine learning models that power our clients\' most critical applications.',
      requirements: [
        '5+ years of experience in machine learning and AI',
        'Strong proficiency in Python, TensorFlow, and PyTorch',
        'Experience with cloud platforms (AWS, GCP, Azure)',
        'PhD or Masters in Computer Science, AI, or related field',
        'Experience with MLOps and model deployment'
      ],
      responsibilities: [
        'Design and implement machine learning models for various business applications',
        'Collaborate with data scientists and engineers to deploy AI solutions',
        'Optimize model performance and scalability',
        'Mentor junior engineers and contribute to technical decisions',
        'Stay current with latest AI research and technologies'
      ],
      benefits: [
        'Competitive salary and equity package',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ],
      techStack: ['Python', 'TensorFlow', 'PyTorch', 'AWS', 'Docker', 'Kubernetes']
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$140,000 - $200,000',
      posted: '1 week ago',
      description: 'Design and implement scalable cloud architectures for enterprise clients across multiple industries.',
      requirements: [
        '7+ years of experience in cloud architecture',
        'Expert knowledge of AWS, Azure, or GCP',
        'Experience with containerization and orchestration',
        'Strong understanding of DevOps practices',
        'Professional cloud certifications preferred'
      ],
      responsibilities: [
        'Design scalable and secure cloud architectures',
        'Lead cloud migration projects for enterprise clients',
        'Implement Infrastructure as Code using Terraform or CloudFormation',
        'Optimize cloud costs and performance',
        'Provide technical leadership and mentorship'
      ],
      benefits: [
        'Remote-first culture',
        'Comprehensive health benefits',
        'Home office setup allowance',
        'Annual learning and development budget',
        'Flexible working hours'
      ],
      techStack: ['AWS', 'Azure', 'Terraform', 'Kubernetes', 'Docker', 'Python']
    },
    {
      title: 'Product Designer',
      department: 'Design',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$120,000 - $160,000',
      posted: '3 days ago',
      description: 'Create exceptional user experiences for our AI-powered products and client solutions.',
      requirements: [
        '4+ years of product design experience',
        'Strong portfolio demonstrating UX/UI design skills',
        'Proficiency in Figma, Sketch, or similar design tools',
        'Experience with design systems and accessibility',
        'Understanding of front-end development principles'
      ],
      responsibilities: [
        'Design intuitive and accessible user interfaces',
        'Conduct user research and usability testing',
        'Collaborate with engineering teams on implementation',
        'Maintain and evolve design systems',
        'Present design concepts to stakeholders'
      ],
      benefits: [
        'Creative and collaborative work environment',
        'Latest design tools and equipment',
        'Conference and workshop attendance',
        'Flexible work arrangements',
        'Health and wellness benefits'
      ],
      techStack: ['Figma', 'Sketch', 'Principle', 'Framer', 'HTML/CSS', 'JavaScript']
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$130,000 - $180,000',
      posted: '1 day ago',
      description: 'Build and maintain CI/CD pipelines and infrastructure automation for our growing platform.',
      requirements: [
        '5+ years of DevOps or Site Reliability Engineering experience',
        'Strong knowledge of containerization and orchestration',
        'Experience with CI/CD tools and practices',
        'Proficiency in scripting languages (Python, Bash, Go)',
        'Knowledge of monitoring and observability tools'
      ],
      responsibilities: [
        'Design and implement CI/CD pipelines',
        'Manage Kubernetes clusters and container orchestration',
        'Implement infrastructure monitoring and alerting',
        'Automate deployment and scaling processes',
        'Ensure system reliability and performance'
      ],
      benefits: [
        'Competitive salary and stock options',
        'Comprehensive benefits package',
        'Professional development opportunities',
        'Flexible work environment',
        'Latest technology and tools'
      ],
      techStack: ['Kubernetes', 'Docker', 'Jenkins', 'Terraform', 'Prometheus', 'Grafana']
    },
    {
      title: 'Business Development Manager',
      department: 'Sales',
      location: 'London, UK',
      type: 'Full-time',
      salary: '£80,000 - £120,000',
      posted: '5 days ago',
      description: 'Drive business growth by identifying and developing new client relationships in the European market.',
      requirements: [
        '5+ years of B2B sales experience in technology',
        'Strong understanding of AI and cloud technologies',
        'Proven track record of meeting sales targets',
        'Excellent communication and presentation skills',
        'Experience selling to enterprise clients'
      ],
      responsibilities: [
        'Identify and qualify new business opportunities',
        'Build relationships with key decision makers',
        'Present solutions to C-level executives',
        'Collaborate with technical teams on proposals',
        'Achieve quarterly and annual sales targets'
      ],
      benefits: [
        'Competitive base salary plus commission',
        'European health insurance',
        'Travel allowance and expenses',
        'Professional development budget',
        'Flexible work arrangements'
      ],
      techStack: ['Salesforce', 'HubSpot', 'Slack', 'Zoom', 'Microsoft Office', 'LinkedIn Sales Navigator']
    },
    {
      title: 'Data Scientist',
      department: 'Data Science',
      location: 'Toronto, CA',
      type: 'Full-time',
      salary: 'CAD $110,000 - $150,000',
      posted: '1 week ago',
      description: 'Analyze complex datasets to extract insights and build predictive models for our clients.',
      requirements: [
        '4+ years of experience in data science or analytics',
        'Strong proficiency in Python and R',
        'Experience with machine learning algorithms',
        'Knowledge of statistical analysis and modeling',
        'Advanced degree in Statistics, Mathematics, or related field'
      ],
      responsibilities: [
        'Perform exploratory data analysis and feature engineering',
        'Build and validate predictive models',
        'Communicate findings to stakeholders',
        'Collaborate with engineering teams on model deployment',
        'Stay current with data science best practices'
      ],
      benefits: [
        'Canadian health benefits',
        'Competitive salary and equity',
        'Professional development budget',
        'Flexible work arrangements',
        'Collaborative team environment'
      ],
      techStack: ['Python', 'R', 'SQL', 'Jupyter', 'Pandas', 'Scikit-learn']
    }
  ];

  const locations = [...new Set(jobs.map(job => job.location))];
  const departments = [...new Set(jobs.map(job => job.department))];

  const filteredJobs = jobs.filter(job => {
    const locationMatch = filterLocation === 'All' || job.location === filterLocation;
    const roleMatch = filterRole === 'All' || job.department === filterRole;
    return locationMatch && roleMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/40">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-indigo-100/50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              We're Hiring <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Builders of the Future</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              Join our team of passionate innovators, researchers, and engineers who are shaping the future of AI and cloud computing. 
              Build meaningful products that impact millions of users worldwide.
            </p>
            <div className="flex justify-center">
              <div className="backdrop-blur-xl bg-white/30 rounded-2xl px-8 py-4 border border-white/40 shadow-lg">
                <div className="flex items-center space-x-6 text-sm">
                  <div className="flex items-center text-blue-600">
                    <Users className="w-5 h-5 mr-2" />
                    <span className="font-semibold">200+ Team Members</span>
                  </div>
                  <div className="flex items-center text-emerald-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span className="font-semibold">5 Global Offices</span>
                  </div>
                  <div className="flex items-center text-purple-600">
                    <Heart className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Remote Friendly</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Culture</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe that great technology comes from great people working together. 
              Our culture is built on four core values that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureValues.map((value, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Board */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Open <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Positions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find your next challenge and help us build the future of technology.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <select 
              value={filterLocation}
              onChange={(e) => setFilterLocation(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">All Locations</option>
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
            
            <select 
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">All Departments</option>
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>

          {/* Jobs List */}
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <Card 
                key={index}
                className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-white/80 backdrop-blur-sm"
                onClick={() => setSelectedJob(job)}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {job.title}
                        </h3>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                          {job.department}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {job.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-6 text-sm text-gray-500">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="w-4 h-4 mr-1" />
                          {job.salary}
                        </div>
                        <div className="text-gray-400">
                          Posted {job.posted}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 md:mt-0">
                      <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-semibold">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Details Modal */}
      <Dialog open={!!selectedJob} onOpenChange={() => setSelectedJob(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedJob && (
            <div>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold flex items-center justify-between">
                  <div>
                    {selectedJob.title}
                    <div className="text-lg font-normal text-gray-600 mt-1">
                      {selectedJob.department} • {selectedJob.location}
                    </div>
                  </div>
                  <Button 
                    onClick={() => setIsApplicationOpen(true)}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-semibold"
                  >
                    Apply Now
                  </Button>
                </DialogTitle>
              </DialogHeader>
              
              <div className="mt-6 space-y-8">
                {/* Job Info */}
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {selectedJob.location}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {selectedJob.type}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="w-4 h-4 mr-2" />
                    {selectedJob.salary}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">About This Role</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedJob.description}
                  </p>
                </div>

                {/* Requirements */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Requirements</h3>
                  <ul className="space-y-2">
                    {selectedJob.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Responsibilities */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Responsibilities</h3>
                  <ul className="space-y-2">
                    {selectedJob.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start text-gray-600">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedJob.techStack.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Benefits</h3>
                  <ul className="space-y-2">
                    {selectedJob.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-gray-600">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Application Modal */}
      <Dialog open={isApplicationOpen} onOpenChange={setIsApplicationOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              Apply for {selectedJob?.title}
            </DialogTitle>
          </DialogHeader>
          
          <form className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <Input placeholder="John" className="w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <Input placeholder="Doe" className="w-full" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <Input type="email" placeholder="john.doe@example.com" className="w-full" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <Input type="tel" placeholder="+1 (555) 123-4567" className="w-full" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn Profile</label>
              <Input placeholder="https://linkedin.com/in/johndoe" className="w-full" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Cover Letter</label>
              <Textarea 
                placeholder="Tell us why you're interested in this position and what you can bring to our team..."
                className="w-full h-32"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Resume</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors cursor-pointer">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600">Drag and drop your resume here, or click to browse</p>
                <p className="text-sm text-gray-500 mt-1">PDF, DOC, or DOCX (max 5MB)</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Button 
                type="submit"
                className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-lg font-semibold"
              >
                <Send className="w-4 h-4 mr-2" />
                Submit Application
              </Button>
              <Button 
                type="button"
                variant="outline"
                onClick={() => setIsApplicationOpen(false)}
                className="px-8 py-3 rounded-lg font-semibold"
              >
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Careers;
