import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Send, User, Phone, Users, MapPin, Hotel, Calendar as CalendarIconAlt, MessageSquare } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

export default function RequestPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    numberOfPeople: '',
    destination: '',
    hotelPreference: '',
    notes: ''
  });
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const { toast } = useToast();

  const destinations = [
    'Greece - Santorini',
    'Greece - Mykonos', 
    'Greece - Athens',
    'Turkey - Antalya',
    'Turkey - Bodrum',
    'Turkey - Istanbul',
    'Italy - Venice',
    'Italy - Rome',
    'Italy - Florence',
    'Spain - Barcelona',
    'Spain - Madrid',
    'France - Paris',
    'Other (please specify in notes)'
  ];

  const hotelPreferences = [
    '3-star Hotel',
    '4-star Hotel',
    '5-star Hotel',
    'Boutique Hotel',
    'Beach Resort',
    'City Center Hotel',
    'Budget Accommodation',
    'Luxury Resort',
    'Other (please specify in notes)'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.phone || !formData.numberOfPeople || !formData.destination) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // In a real application, this would send data to a backend
    toast({
      title: "Request Submitted Successfully!",
      description: "We'll contact you within 24 hours to discuss your travel plans.",
    });

    // Log the form data (in real app, this would be sent to backend)
    console.log('Form submitted:', {
      ...formData,
      startDate,
      endDate,
      submittedAt: new Date()
    });

    // Reset form
    setFormData({
      fullName: '',
      phone: '',
      numberOfPeople: '',
      destination: '',
      hotelPreference: '',
      notes: ''
    });
    setStartDate(undefined);
    setEndDate(undefined);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-navy-blue text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Plan Your <span className="text-bright-orange">Perfect Trip</span>
          </h1>
          <p className="text-xl text-white/90">
            Tell us about your travel dreams and we'll create a personalized itinerary just for you
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-navy-blue text-center">Travel Request Form</CardTitle>
              <p className="text-gray-600 text-center">
                Fill out the form below and our travel experts will contact you within 24 hours
              </p>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-navy-blue font-semibold">
                      <User className="inline h-4 w-4 mr-2" />
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-navy-blue font-semibold">
                      <Phone className="inline h-4 w-4 mr-2" />
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+994 50 123 45 67"
                      required
                    />
                  </div>
                </div>

                {/* Travel Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="numberOfPeople" className="text-navy-blue font-semibold">
                      <Users className="inline h-4 w-4 mr-2" />
                      Number of People *
                    </Label>
                    <Select value={formData.numberOfPeople} onValueChange={(value) => handleInputChange('numberOfPeople', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select number of travelers" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Person</SelectItem>
                        <SelectItem value="2">2 People</SelectItem>
                        <SelectItem value="3">3 People</SelectItem>
                        <SelectItem value="4">4 People</SelectItem>
                        <SelectItem value="5">5 People</SelectItem>
                        <SelectItem value="6+">6+ People</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="destination" className="text-navy-blue font-semibold">
                      <MapPin className="inline h-4 w-4 mr-2" />
                      Destination *
                    </Label>
                    <Select value={formData.destination} onValueChange={(value) => handleInputChange('destination', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose your destination" />
                      </SelectTrigger>
                      <SelectContent>
                        {destinations.map((destination) => (
                          <SelectItem key={destination} value={destination}>
                            {destination}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Hotel Preference */}
                <div className="space-y-2">
                  <Label htmlFor="hotelPreference" className="text-navy-blue font-semibold">
                    <Hotel className="inline h-4 w-4 mr-2" />
                    Hotel Preference
                  </Label>
                  <Select value={formData.hotelPreference} onValueChange={(value) => handleInputChange('hotelPreference', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select hotel preference (optional)" />
                    </SelectTrigger>
                    <SelectContent>
                      {hotelPreferences.map((preference) => (
                        <SelectItem key={preference} value={preference}>
                          {preference}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Travel Dates */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-navy-blue font-semibold">
                      <CalendarIconAlt className="inline h-4 w-4 mr-2" />
                      Departure Date
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !startDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {startDate ? format(startDate, "PPP") : "Select departure date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={startDate}
                          onSelect={setStartDate}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-navy-blue font-semibold">
                      <CalendarIconAlt className="inline h-4 w-4 mr-2" />
                      Return Date
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !endDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {endDate ? format(endDate, "PPP") : "Select return date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={endDate}
                          onSelect={setEndDate}
                          disabled={(date) => date < (startDate || new Date())}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                {/* Notes */}
                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-navy-blue font-semibold">
                    <MessageSquare className="inline h-4 w-4 mr-2" />
                    Additional Notes
                  </Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    placeholder="Tell us about any special requirements, dietary restrictions, celebration occasions, or other preferences..."
                    rows={4}
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <Button type="submit" variant="orange" size="lg" className="w-full md:w-auto">
                    <Send className="mr-2 h-5 w-5" />
                    Submit Travel Request
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info Card */}
          <Card className="mt-8 bg-gray-50">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-navy-blue mb-4">
                  Need immediate assistance?
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://wa.me/994504981999" target="_blank" rel="noopener noreferrer">
                    <Button variant="purple" className="w-full sm:w-auto">
                      WhatsApp: +994 50 498 19 99
                    </Button>
                  </a>
                  <a href="tel:+994124606030">
                    <Button variant="outline" className="w-full sm:w-auto">
                      Call: 012 460 60 30
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}