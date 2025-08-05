import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Plane, FileText, Heart, Star, Users } from 'lucide-react';
import heroBeach from '@/assets/hero-beach.jpg';
import greeceSantorini from '@/assets/greece-santorini.jpg';
import turkeyAntalya from '@/assets/turkey-antalya.jpg';
import italyVenice from '@/assets/italy-venice.jpg';

export default function HomePage() {
  const featuredTours = [
    {
      name: 'Greece - Santorini',
      image: greeceSantorini,
      description: 'Romantic getaway with stunning sunsets',
      price: 'From €899',
      href: '/tours'
    },
    {
      name: 'Turkey - Antalya',
      image: turkeyAntalya,
      description: 'Beautiful beaches and luxury resorts',
      price: 'From €599',
      href: '/tours'
    },
    {
      name: 'Italy - Venice',
      image: italyVenice,
      description: 'Historic canals and Italian culture',
      price: 'From €1,299',
      href: '/tours'
    }
  ];

  const services = [
    {
      icon: Plane,
      title: 'Custom Tours',
      description: 'Personalized travel experiences tailored to your preferences'
    },
    {
      icon: FileText,
      title: 'Visa Services',
      description: 'Complete visa support for Schengen and other destinations'
    },
    {
      icon: Heart,
      title: 'Sanatorium Bookings',
      description: 'Wellness and health-focused travel experiences'
    },
    {
      icon: Users,
      title: 'Group Travel',
      description: 'Special packages for families and groups'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBeach})` }}
        >
          <div className="absolute inset-0 bg-navy-blue/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover the World with <span className="text-bright-orange">TryWell</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Your trusted partner for unforgettable international travel experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/tours">
              <Button variant="orange" size="lg" className="w-full sm:w-auto">
                <Plane className="mr-2 h-5 w-5" />
                Explore Tours
              </Button>
            </Link>
            <Link to="/request">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 text-white border-white hover:bg-white hover:text-navy-blue">
                Plan Your Trip
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Featured Destinations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most popular travel packages designed for unforgettable experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTours.map((tour, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-bright-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {tour.price}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-navy-blue mb-2">{tour.name}</h3>
                  <p className="text-gray-600 mb-4">{tour.description}</p>
                  <Link to={tour.href}>
                    <Button variant="purple" className="w-full">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/tours">
              <Button variant="outline" size="lg">
                View All Tours
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete travel solutions for every type of journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-soft-purple rounded-full mb-4">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy-blue mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy-blue">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let us help you plan the perfect international trip
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request">
              <Button variant="orange" size="lg" className="w-full sm:w-auto">
                <MapPin className="mr-2 h-5 w-5" />
                Plan Your Trip
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 text-white border-white hover:bg-white hover:text-navy-blue">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-bright-orange mb-2">500+</div>
              <div className="text-gray-600">Happy Travelers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-bright-orange mb-2">15+</div>
              <div className="text-gray-600">Destinations</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-bright-orange mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-bright-orange mb-2">3+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}