import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, MessageCircle, Instagram, Clock, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-navy-blue text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="text-bright-orange">Touch</span>
          </h1>
          <p className="text-xl text-white/90">
            Ready to plan your next adventure? We're here to help make your travel dreams come true
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Cards */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-navy-blue mb-8">Contact Information</h2>
              </div>

              {/* Phone Numbers */}
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-navy-blue">
                    <Phone className="h-6 w-6 mr-3 text-bright-orange" />
                    Phone Numbers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Mobile:</span>
                      <a href="tel:+994504981999" className="text-navy-blue font-semibold hover:text-bright-orange transition-colors">
                        +994 50 498 19 99
                      </a>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Office:</span>
                      <a href="tel:+994124606030" className="text-navy-blue font-semibold hover:text-bright-orange transition-colors">
                        012 460 60 30
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp */}
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-navy-blue">
                    <MessageCircle className="h-6 w-6 mr-3 text-bright-orange" />
                    WhatsApp
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Get instant support via WhatsApp</p>
                  <a href="https://wa.me/994504981999" target="_blank" rel="noopener noreferrer">
                    <Button variant="purple" className="w-full">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Chat on WhatsApp
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-navy-blue">
                    <Instagram className="h-6 w-6 mr-3 text-bright-orange" />
                    Social Media
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Follow us for travel inspiration</p>
                  <a href="https://instagram.com/trywell.az" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full">
                      <Instagram className="mr-2 h-4 w-4" />
                      @trywell.az
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-navy-blue">
                    <Clock className="h-6 w-6 mr-3 text-bright-orange" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday:</span>
                      <span className="text-navy-blue font-semibold">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday:</span>
                      <span className="text-navy-blue font-semibold">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday:</span>
                      <span className="text-navy-blue font-semibold">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Office Location */}
            <div>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-navy-blue">
                    <MapPin className="h-6 w-6 mr-3 text-bright-orange" />
                    Our Office
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-navy-blue mb-2">Address:</h4>
                      <p className="text-gray-600">
                        Jale Plaza, 5th floor<br />
                        140 Shamil Azizbeyov street<br />
                        Baku, Azerbaijan
                      </p>
                    </div>

                    {/* Embedded Google Maps */}
                    <div className="relative h-80 rounded-lg overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.8267852474977!2d49.83982231537086!3d40.38001787937019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f69843b1ed084!2sShamil%20Azizbeyov%20St%20140%2C%20Baku%2C%20Azerbaijan!5e0!3m2!1sen!2sus!4v1635789123456!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="TryWell Office Location"
                      ></iframe>
                    </div>

                    <div className="pt-4">
                      <h4 className="font-semibold text-navy-blue mb-2">Getting Here:</h4>
                      <p className="text-gray-600 text-sm">
                        Located in the heart of Baku's business district, our office is easily accessible by metro, bus, and taxi. 
                        Free parking is available in the building.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-8">
            Ready to Start Planning?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <Phone className="h-12 w-12 text-bright-orange mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-navy-blue mb-2">Call Us</h3>
                <p className="text-gray-600 text-sm mb-4">Speak directly with our travel experts</p>
                <a href="tel:+994504981999">
                  <Button variant="orange" size="sm" className="w-full">
                    Call Now
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <MessageCircle className="h-12 w-12 text-bright-orange mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-navy-blue mb-2">WhatsApp</h3>
                <p className="text-gray-600 text-sm mb-4">Get instant responses to your questions</p>
                <a href="https://wa.me/994504981999" target="_blank" rel="noopener noreferrer">
                  <Button variant="purple" size="sm" className="w-full">
                    Chat Now
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <Mail className="h-12 w-12 text-bright-orange mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-navy-blue mb-2">Send Request</h3>
                <p className="text-gray-600 text-sm mb-4">Fill out our detailed travel form</p>
                <a href="/request">
                  <Button variant="outline" size="sm" className="w-full">
                    Request Form
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}