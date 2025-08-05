import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone, MessageCircle, Instagram } from 'lucide-react';
import tryWellLogo from '@/assets/trywell-logo.png';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Tours', href: '/tours' },
  { name: 'Visa Services', href: '/visa' },
  { name: 'Sanatoriums', href: '/sanatoriums' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-navy-blue shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src={tryWellLogo} 
                alt="TryWell" 
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-white hover:text-bright-orange transition-colors duration-200 ${
                    location.pathname === item.href ? 'text-bright-orange font-semibold' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Contact Icons & CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <a 
                href="https://wa.me/994504981999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-bright-orange transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/trywell.az" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-bright-orange transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <Link to="/request">
                <Button variant="orange" size="sm">
                  Book Now
                </Button>
              </Link>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-navy-blue border-navy-blue">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-white hover:text-bright-orange transition-colors p-2 rounded ${
                        location.pathname === item.href ? 'text-bright-orange bg-white/10' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="flex space-x-4 pt-4">
                    <a 
                      href="https://wa.me/994504981999" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-bright-orange"
                    >
                      <MessageCircle className="h-6 w-6" />
                    </a>
                    <a 
                      href="https://instagram.com/trywell.az" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-bright-orange"
                    >
                      <Instagram className="h-6 w-6" />
                    </a>
                  </div>
                  <Link to="/request" onClick={() => setIsOpen(false)}>
                    <Button variant="orange" className="w-full">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-navy-blue text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <img 
                src={tryWellLogo} 
                alt="TryWell" 
                className="h-12 w-auto mb-4"
              />
              <p className="text-white/80 text-sm">
                Your trusted partner for international travel, visa services, and unforgettable experiences.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+994 50 498 19 99</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>012 460 60 30</span>
                </div>
                <p className="text-white/80">
                  Jale Plaza, 5th floor, 140 Shamil Azizbeyov street, Baku, Azerbaijan
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/tours" className="block text-sm text-white/80 hover:text-bright-orange transition-colors">
                  Tours
                </Link>
                <Link to="/visa" className="block text-sm text-white/80 hover:text-bright-orange transition-colors">
                  Visa Services
                </Link>
                <Link to="/sanatoriums" className="block text-sm text-white/80 hover:text-bright-orange transition-colors">
                  Sanatoriums
                </Link>
                <Link to="/request" className="block text-sm text-white/80 hover:text-bright-orange transition-colors">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
            <p>&copy; 2024 TryWell. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}