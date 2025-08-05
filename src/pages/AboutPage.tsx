import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Globe, Users, Award, Heart, MapPin, FileText, Plane } from 'lucide-react';
import heroBeach from '@/assets/hero-beach.jpg';

const values = [
  {
    icon: Heart,
    title: 'Customer First',
    description: 'Every travel plan is tailored to create unforgettable experiences for our clients'
  },
  {
    icon: Globe,
    title: 'Expert Knowledge',
    description: 'Deep understanding of destinations, visa requirements, and local cultures'
  },
  {
    icon: Award,
    title: 'Quality Service',
    description: '95% success rate and hundreds of satisfied customers trust our expertise'
  },
  {
    icon: Users,
    title: 'Personal Touch',
    description: 'From consultation to return, we provide personalized support every step of the way'
  }
];

const services = [
  {
    icon: Plane,
    title: 'Guided Tours',
    description: 'Carefully curated group and private tours to Europe\'s most beautiful destinations'
  },
  {
    icon: FileText,
    title: 'Visa Support',
    description: 'Complete visa assistance for Schengen countries with 95% approval success rate'
  },
  {
    icon: Heart,
    title: 'Wellness Travel',
    description: 'Sanatorium bookings and wellness retreats for health-focused travel experiences'
  },
  {
    icon: Users,
    title: 'Custom Planning',
    description: 'Personalized travel consulting for families, couples, and business travelers'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBeach})` }}
        >
          <div className="absolute inset-0 bg-navy-blue/70"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-bright-orange">TryWell</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Your trusted partner for international travel, visa services, and unforgettable experiences since 2021
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                At TryWell, we believe that travel is more than just visiting new places—it's about creating 
                memories that last a lifetime. We specialize in making international travel accessible, 
                comfortable, and worry-free for Azerbaijani travelers.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                Since our founding, we have helped hundreds of families, couples, and individuals explore 
                Europe's most beautiful destinations. Our expertise in visa services, particularly for 
                Schengen countries, combined with our carefully curated tour packages, ensures that every 
                aspect of your journey is perfectly planned.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-bright-orange mb-1">500+</div>
                  <div className="text-gray-600 text-sm">Happy Travelers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-bright-orange mb-1">95%</div>
                  <div className="text-gray-600 text-sm">Visa Success Rate</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <Card key={index} className="text-center p-4 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-soft-purple rounded-full mb-3">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-navy-blue mb-2 text-sm">{value.title}</h3>
                    <p className="text-gray-600 text-xs">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              What We Do
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive travel solutions designed to make your international journey seamless and memorable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-bright-orange rounded-full mb-4 mx-auto">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-navy-blue">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Company Details */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-2xl text-navy-blue">Company Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-navy-blue mb-2">Legal Name:</h4>
                  <p className="text-gray-600">"TRYVVELL" MMC</p>
                </div>
                <div>
                  <h4 className="font-semibold text-navy-blue mb-2">Founded:</h4>
                  <p className="text-gray-600">2021</p>
                </div>
                <div>
                  <h4 className="font-semibold text-navy-blue mb-2">Specialization:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-soft-purple text-white">International Tourism</Badge>
                    <Badge variant="secondary" className="bg-soft-purple text-white">Visa Services</Badge>
                    <Badge variant="secondary" className="bg-soft-purple text-white">Wellness Travel</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-navy-blue mb-2">Office Location:</h4>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-bright-orange mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600">
                      Jale Plaza, 5th floor<br />
                      140 Shamil Azizbeyov street<br />
                      Baku, Azerbaijan
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Banking Information */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-2xl text-navy-blue">Banking Information (AZN)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-navy-blue text-sm mb-1">Bank:</h4>
                    <p className="text-gray-600 text-sm">Kapitalbank ASC, Sahil branch</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-blue text-sm mb-1">Branch Code:</h4>
                    <p className="text-gray-600 text-sm">201218</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-navy-blue text-sm mb-1">VOEN:</h4>
                    <p className="text-gray-600 text-sm">9900003611</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-blue text-sm mb-1">SWIFT:</h4>
                    <p className="text-gray-600 text-sm">AIIBAZ2XXXX</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-navy-blue text-sm mb-1">Correspondent Account:</h4>
                  <p className="text-gray-600 text-sm font-mono">AZ37NABZ01350100000000001944</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-navy-blue text-sm mb-1">Beneficiary:</h4>
                  <p className="text-gray-600 text-sm">"TRYVVELL" MMC</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-navy-blue text-sm mb-1">Account Number:</h4>
                  <p className="text-gray-600 text-sm font-mono">AZ94AIIB400600J9446775120208</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-navy-blue text-sm mb-1">Beneficiary VOEN:</h4>
                  <p className="text-gray-600 text-sm">2009134621</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-navy-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose TryWell?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We combine local expertise with international standards to deliver exceptional travel experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-bright-orange mb-4">Local Expertise</div>
              <p className="text-white/80">
                Based in Baku, we understand the specific needs and preferences of Azerbaijani travelers
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-bright-orange mb-4">Proven Results</div>
              <p className="text-white/80">
                95% visa approval success rate and hundreds of satisfied customers
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-bright-orange mb-4">Full Service</div>
              <p className="text-white/80">
                From visa assistance to accommodation, we handle every aspect of your journey
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}