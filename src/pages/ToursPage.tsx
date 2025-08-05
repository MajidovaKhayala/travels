import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import greeceSantorini from '@/assets/greece-santorini.jpg';
import turkeyAntalya from '@/assets/turkey-antalya.jpg';
import italyVenice from '@/assets/italy-venice.jpg';

const tours = [
  {
    id: 1,
    name: 'Greece - Santorini & Mykonos',
    image: greeceSantorini,
    description: 'Experience the magic of Greek islands with stunning sunsets, crystal-clear waters, and authentic Mediterranean culture. Visit iconic windmills, explore charming villages, and relax on beautiful beaches.',
    price: 'From €899',
    duration: '7 days',
    groupSize: '8-16 people',
    rating: 4.9,
    highlights: ['Sunset in Oia', 'Blue Dome Churches', 'Greek Cuisine', 'Island Hopping'],
    includes: ['Flights', 'Hotels', 'Meals', 'Transfers']
  },
  {
    id: 2,
    name: 'Turkey - Antalya Beach Resort',
    image: turkeyAntalya,
    description: 'Discover the Turkish Riviera with luxury beachfront resorts, historic sites, and warm hospitality. Enjoy pristine beaches, explore ancient ruins, and indulge in world-class spa treatments.',
    price: 'From €599',
    duration: '5 days',
    groupSize: '6-12 people',
    rating: 4.8,
    highlights: ['Luxury Beach Resort', 'Historical Sites', 'Turkish Bath', 'Mediterranean Coast'],
    includes: ['Flights', 'All-inclusive Resort', 'Tours', 'Transfers']
  },
  {
    id: 3,
    name: 'Italy - Venice & Florence',
    image: italyVenice,
    description: 'Immerse yourself in Renaissance art and architecture while cruising romantic canals. Experience the cultural heart of Italy with guided tours of museums, historic palaces, and authentic Italian cuisine.',
    price: 'From €1,299',
    duration: '6 days',
    groupSize: '10-18 people',
    rating: 4.9,
    highlights: ['Gondola Rides', 'Renaissance Art', 'Italian Cuisine', 'Historic Centers'],
    includes: ['Flights', 'Boutique Hotels', 'Guided Tours', 'Train Transfers']
  },
  {
    id: 4,
    name: 'Turkey - Bodrum Peninsula',
    image: turkeyAntalya,
    description: 'Explore the glamorous Turkish coast with its pristine beaches, luxury marinas, and vibrant nightlife. Perfect blend of relaxation and entertainment on the Aegean Sea.',
    price: 'From €749',
    duration: '6 days',
    groupSize: '8-14 people',
    rating: 4.7,
    highlights: ['Marina Views', 'Beach Clubs', 'Ancient Ruins', 'Aegean Coast'],
    includes: ['Flights', 'Beachfront Hotels', 'Boat Tours', 'Transfers']
  },
  {
    id: 5,
    name: 'Greece - Athens & Islands',
    image: greeceSantorini,
    description: 'Journey through ancient history and island paradise. Visit the Acropolis, explore historic neighborhoods, then relax on stunning Greek islands with their iconic blue and white architecture.',
    price: 'From €1,099',
    duration: '8 days',
    groupSize: '12-20 people',
    rating: 4.8,
    highlights: ['Acropolis', 'Greek Islands', 'Archaeological Sites', 'Traditional Villages'],
    includes: ['Flights', 'Hotels', 'Island Ferries', 'Guided Tours']
  },
  {
    id: 6,
    name: 'Italy - Rome & Tuscany',
    image: italyVenice,
    description: 'Experience the eternal city and rolling hills of Tuscany. From ancient Roman monuments to charming wine villages, discover the diverse beauty of central Italy.',
    price: 'From €1,399',
    duration: '7 days',
    groupSize: '10-16 people',
    rating: 4.9,
    highlights: ['Colosseum', 'Tuscan Wine', 'Vatican City', 'Medieval Towns'],
    includes: ['Flights', 'Historic Hotels', 'Wine Tours', 'Train Transfers']
  }
];

export default function ToursPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-navy-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Discover Amazing <span className="text-bright-orange">Destinations</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Carefully curated tours to Europe's most beautiful destinations. Each journey is designed for comfort, culture, and unforgettable memories.
            </p>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tours.map((tour) => (
              <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-bright-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {tour.price}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 text-navy-blue px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 fill-current text-yellow-500 mr-1" />
                    {tour.rating}
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-navy-blue">{tour.name}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="secondary" className="bg-soft-purple text-white">
                      <Calendar className="h-3 w-3 mr-1" />
                      {tour.duration}
                    </Badge>
                    <Badge variant="secondary" className="bg-soft-purple text-white">
                      <Users className="h-3 w-3 mr-1" />
                      {tour.groupSize}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">{tour.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-navy-blue mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {tour.highlights.map((highlight, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-navy-blue mb-2">Includes:</h4>
                    <div className="flex flex-wrap gap-1">
                      {tour.includes.map((item, index) => (
                        <Badge key={index} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Link to="/request">
                    <Button variant="orange" className="w-full">
                      <MapPin className="mr-2 h-4 w-4" />
                      Book This Tour
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
            Don't See Your Dream Destination?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We create custom tours tailored to your preferences and interests
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request">
              <Button variant="orange" size="lg" className="w-full sm:w-auto">
                Plan Custom Tour
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Speak with Expert
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}