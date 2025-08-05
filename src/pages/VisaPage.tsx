import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, FileText, Users, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import visaServices from '@/assets/visa-services.jpg';

const visaTypes = [
  {
    name: 'Schengen Visa',
    description: 'Visit 27 European countries with a single visa',
    processingTime: '10-15 days',
    validity: 'Up to 90 days',
    countries: ['Germany', 'France', 'Italy', 'Spain', 'Greece', 'Netherlands', 'And 21 more'],
    requirements: [
      'Valid passport (6+ months)',
      'Completed application form',
      'Travel insurance',
      'Bank statements',
      'Hotel reservations',
      'Flight itinerary'
    ]
  },
  {
    name: 'Turkey Visa',
    description: 'Electronic visa for Turkey tourism and business',
    processingTime: '1-3 days',
    validity: 'Up to 90 days',
    countries: ['Turkey'],
    requirements: [
      'Valid passport (6+ months)',
      'Online application',
      'Payment confirmation',
      'Email address'
    ]
  },
  {
    name: 'UK Visa',
    description: 'Visit visa for United Kingdom',
    processingTime: '15-20 days',
    validity: 'Up to 180 days',
    countries: ['United Kingdom'],
    requirements: [
      'Valid passport',
      'Completed application',
      'Financial documents',
      'Accommodation proof',
      'Travel itinerary',
      'Biometric appointment'
    ]
  }
];

const steps = [
  {
    step: 1,
    title: 'Consultation',
    description: 'Free consultation to determine the best visa option for your travel plans'
  },
  {
    step: 2,
    title: 'Document Preparation',
    description: 'We help you gather and prepare all required documents correctly'
  },
  {
    step: 3,
    title: 'Application Submission',
    description: 'We submit your application and schedule any required appointments'
  },
  {
    step: 4,
    title: 'Tracking & Updates',
    description: 'Regular updates on your application status until visa approval'
  }
];

export default function VisaPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-navy-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-bright-orange">Visa Services</span> Made Simple
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Professional visa assistance for Schengen countries and beyond. We handle the paperwork so you can focus on planning your perfect trip.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/request">
                  <Button variant="orange" size="lg" className="w-full sm:w-auto">
                    <FileText className="mr-2 h-5 w-5" />
                    Start Application
                  </Button>
                </Link>
                <a href="https://wa.me/994504981999" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 text-white border-white hover:bg-white hover:text-navy-blue">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Consultation
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src={visaServices} 
                alt="Visa Services"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visa Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Visa Types We Handle
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete visa assistance for your international travel needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {visaTypes.map((visa, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-navy-blue">{visa.name}</CardTitle>
                  <p className="text-gray-600">{visa.description}</p>
                  <div className="flex gap-2 mt-4">
                    <Badge variant="secondary" className="bg-soft-purple text-white">
                      <Clock className="h-3 w-3 mr-1" />
                      {visa.processingTime}
                    </Badge>
                    <Badge variant="outline" className="text-bright-orange border-bright-orange">
                      {visa.validity}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold text-navy-blue mb-2">Countries:</h4>
                    <div className="flex flex-wrap gap-1">
                      {visa.countries.map((country, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {country}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-navy-blue mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {visa.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link to="/request">
                    <Button variant="purple" className="w-full">
                      Apply for {visa.name}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Our Visa Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple, transparent steps to get your visa approved
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="text-center relative">
                <CardContent className="pt-8 pb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-bright-orange rounded-full text-white text-xl font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-navy-blue mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </CardContent>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-soft-purple"></div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-16 bg-navy-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose TryWell for Visa Services?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-bright-orange mb-2">95%</div>
              <div className="text-white/90">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-bright-orange mb-2">500+</div>
              <div className="text-white/90">Visas Processed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-bright-orange mb-2">3+</div>
              <div className="text-white/90">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-bright-orange mb-2">24/7</div>
              <div className="text-white/90">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
            Ready to Apply for Your Visa?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get expert guidance and support throughout your visa application process
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request">
              <Button variant="orange" size="lg" className="w-full sm:w-auto">
                <FileText className="mr-2 h-5 w-5" />
                Start Your Application
              </Button>
            </Link>
            <a href="tel:+994504981999">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <Phone className="mr-2 h-5 w-5" />
                Call for Consultation
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}