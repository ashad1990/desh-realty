import Link from 'next/link';
import Image from 'next/image';
import { Home, Shield, Users, MapPin, Bed, Bath } from 'lucide-react';
import { properties } from '@/data/properties';

export default function HomePage() {
  // Get first 4 properties for featured section
  const featuredProperties = properties.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Find Your Dream Home in Bangladesh
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Discover the perfect property for sale or rent with Bangladesh's most trusted real estate platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="bg-white text-primary px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-all text-center"
              >
                Browse Properties
              </Link>
              <Link
                href="/about"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-primary transition-all text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Why Choose Desh Realty?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We provide exceptional service and expertise to help you find your perfect property.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Home className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark">Wide Selection</h3>
              <p className="text-gray-600">
                Access to premium properties across Bangladesh, from luxury homes to commercial land.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark">Trusted Service</h3>
              <p className="text-gray-600">
                Professional guidance and transparent dealings to ensure your peace of mind.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark">Expert Team</h3>
              <p className="text-gray-600">
                Experienced professionals dedicated to helping you make the right decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Featured Properties
            </h2>
            <p className="text-gray-600 text-lg">
              Explore our handpicked selection of premium properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {property.type === 'sale' ? 'For Sale' : 'For Rent'}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 text-dark">{property.title}</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  {property.category === 'house' && (
                    <div className="flex items-center gap-4 text-gray-600 mb-3">
                      <div className="flex items-center">
                        <Bed className="h-4 w-4 mr-1" />
                        <span className="text-sm">{property.bedrooms}</span>
                      </div>
                      <div className="flex items-center">
                        <Bath className="h-4 w-4 mr-1" />
                        <span className="text-sm">{property.bathrooms}</span>
                      </div>
                      <span className="text-sm">{property.area} sq ft</span>
                    </div>
                  )}
                  {property.category === 'land' && (
                    <div className="text-gray-600 mb-3">
                      <span className="text-sm">{property.area} sq ft</span>
                    </div>
                  )}
                  <div className="text-2xl font-bold text-primary">
                    ৳{property.price.toLocaleString()}
                    {property.type === 'rent' && <span className="text-sm font-normal">/month</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-block bg-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all"
            >
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Perfect Property?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let our expert team help you discover your dream home or investment opportunity.
          </p>
          <Link
            href="/services"
            className="inline-block bg-white text-primary px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-all"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
