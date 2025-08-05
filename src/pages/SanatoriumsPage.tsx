import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Waves, Mountain, Leaf, Phone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import sanatoriumWellness from '@/assets/sanatorium-wellness.jpg';

const sanatoriumTypes = [
  {
    type: 'Thermal Spa Resorts',
    icon: Waves,
    description: 'Natural hot springs and mineral water therapy',
    benefits: ['Joint Pain Relief', 'Skin Treatment', 'Stress Reduction', 'Circulation Improvement'],
    destinations: ['Turkey - Pamukkale', 'Hungary - Budapest', 'Czech Republic - Karlovy Vary']
  },
  {
    type: 'Mountain Wellness',
    icon: Mountain,
    description: 'High-altitude healing and fresh mountain air',
    benefits: ['Respiratory Health', 'Cardiovascular Improvement', 'Mental Clarity', 'Physical Fitness'],
    destinations: ['Switzerland - Davos', 'Austria - Bad Gastein', 'Germany - Garmisch']
  },
  {
    type: 'Detox & Wellness',
    icon: Leaf,
    description: 'Comprehensive detoxification and wellness programs',
    benefits: ['Body Cleansing', 'Weight Management', 'Energy Boost', 'Nutritional Reset'],
    destinations: ['Germany - Baden-Baden', 'Italy - Montecatini', 'Slovenia - Portorož']
  }
];

const programs = [
  {
    name: 'Classic Wellness Package',
    duration: '7 days',
    price: 'From €899',
    includes: [
      'Medical consultation',
      'Daily spa treatments',
      'Healthy meal plan',
      'Accommodation',
      'Airport transfers'
    ]
  },
  {
    name: 'Intensive Health Program',
    duration: '14 days',
    price: 'From €1,699',
    includes: [
      'Comprehensive health check',
      'Personalized treatment plan',
      'Daily medical supervision',
      'Spa & therapy sessions',
      'Nutritional counseling',
      'Luxury accommodation'
    ]
  },
  {
    name: 'Couples Retreat',
    duration: '10 days',
    price: 'From €2,299',
    includes: [
      'Couples spa treatments',
      'Romantic accommodations',
      'Wellness activities',
      'Healthy gourmet dining',
      'Private consultations'
    ]
  }
];

export default function SanatoriumsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-navy-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Wellness & <span className="text-bright-orange">Sanatorium</span> Travel
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Rejuvenate your body and mind with our carefully selected wellness resorts and medical sanatoriums across Europe. Professional health programs in beautiful locations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/request">
                  <Button variant="orange" size="lg" className="w-full sm:w-auto">
                    <Heart className="mr-2 h-5 w-5" />
                    Book Wellness Trip
                  </Button>
                </Link>
                <a href="tel:+994504981999">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 text-white border-white hover:bg-white hover:text-navy-blue">
                    <Phone className="mr-2 h-5 w-5" />
                    Health Consultation
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src={sanatoriumWellness} 
                alt="Wellness Resort"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sanatorium Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Types of Wellness Programs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from various wellness and medical tourism options tailored to your health needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {sanatoriumTypes.map((type, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-soft-purple rounded-full mr-4">
                      <type.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-navy-blue">{type.type}</CardTitle>
                  </div>
                  <p className="text-gray-600">{type.description}</p>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold text-navy-blue mb-2">Health Benefits:</h4>
                    <ul className="space-y-1">
                      {type.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <Heart className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-navy-blue mb-2">Popular Destinations:</h4>
                    <div className="space-y-1">
                      {type.destinations.map((destination, idx) => (
                        <Badge key={idx} variant="outline" className="mr-1 mb-1 text-xs">
                          {destination}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Link to="/request">
                    <Button variant="purple" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Wellness Packages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive wellness programs designed for different needs and durations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="absolute top-0 right-0 bg-bright-orange text-white px-4 py-2 text-sm font-semibold">
                  {program.price}
                </div>
                
                <CardHeader className="pt-12">
                  <CardTitle className="text-xl text-navy-blue">{program.name}</CardTitle>
                  <Badge variant="secondary" className="bg-soft-purple text-white w-fit">
                    <Calendar className="h-3 w-3 mr-1" />
                    {program.duration}
                  </Badge>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold text-navy-blue mb-3">Package Includes:</h4>
                    <ul className="space-y-2">
                      {program.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <Heart className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link to="/request">
                    <Button variant="orange" className="w-full">
                      Book This Package
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-navy-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Medical Tourism?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Combine the benefits of professional medical care with the relaxation of travel
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-bright-orange rounded-full mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Professional Care</h3>
              <p className="text-white/80 text-sm">Expert medical supervision and personalized treatment plans</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-bright-orange rounded-full mb-4">
                <Waves className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Natural Healing</h3>
              <p className="text-white/80 text-sm">Natural thermal waters and mineral-rich environments</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-bright-orange rounded-full mb-4">
                <Mountain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Beautiful Locations</h3>
              <p className="text-white/80 text-sm">Scenic destinations that enhance the healing process</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-bright-orange rounded-full mb-4">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Holistic Approach</h3>
              <p className="text-white/80 text-sm">Complete wellness programs for body, mind, and spirit</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
            Start Your Wellness Journey
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let us help you find the perfect wellness retreat for your health and relaxation needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request">
              <Button variant="orange" size="lg" className="w-full sm:w-auto">
                <Heart className="mr-2 h-5 w-5" />
                Plan Wellness Trip
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <Phone className="mr-2 h-5 w-5" />
                Health Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}