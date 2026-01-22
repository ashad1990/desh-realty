'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { MapPin, Bed, Bath, Building2, Home as HomeIcon } from 'lucide-react';
import { properties, Property } from '@/data/properties';
import { useSearchParams } from 'next/navigation';

export default function ServicesPage() {
  const searchParams = useSearchParams();
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);
  const [activeType, setActiveType] = useState<'all' | 'sale' | 'rent'>('all');
  const [activeCategory, setActiveCategory] = useState<'all' | 'house' | 'land'>('all');
  const [activeFurnished, setActiveFurnished] = useState<'all' | 'furnished' | 'non-furnished'>('all');

  useEffect(() => {
    // Get initial filter from URL params
    const typeParam = searchParams.get('type');
    if (typeParam === 'sale' || typeParam === 'rent') {
      setActiveType(typeParam);
    }
  }, [searchParams]);

  useEffect(() => {
    let filtered = properties;

    // Filter by type
    if (activeType !== 'all') {
      filtered = filtered.filter(p => p.type === activeType);
    }

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(p => p.category === activeCategory);
    }

    // Filter by furnished (only for houses)
    if (activeFurnished !== 'all' && activeCategory === 'house') {
      if (activeFurnished === 'furnished') {
        filtered = filtered.filter(p => p.furnished === true);
      } else {
        filtered = filtered.filter(p => p.furnished === false);
      }
    }

    setFilteredProperties(filtered);
  }, [activeType, activeCategory, activeFurnished]);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-white/90">
              Browse our comprehensive collection of properties for sale and rent across Bangladesh.
            </p>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-dark mb-4">Properties for Sale</h2>
              <p className="text-gray-700 mb-4">
                Find your dream home or investment property from our extensive collection of houses 
                and land available for purchase across prime locations in Bangladesh.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Luxury residential homes</li>
                <li>• Commercial land plots</li>
                <li>• Investment properties</li>
                <li>• Transparent pricing</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <HomeIcon className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-dark mb-4">Properties for Rent</h2>
              <p className="text-gray-700 mb-4">
                Discover comfortable rental properties ranging from furnished apartments to 
                spacious family homes in desirable neighborhoods.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Fully furnished apartments</li>
                <li>• Unfurnished homes</li>
                <li>• Flexible rental terms</li>
                <li>• Premium locations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Property Filtering and Listings */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-8 text-center">
            Browse Properties
          </h2>

          {/* Filters */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            {/* Type Filter */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-dark mb-3">Property Type</h3>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setActiveType('all')}
                  className={`px-6 py-2 rounded-md font-medium transition-all ${
                    activeType === 'all'
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setActiveType('sale')}
                  className={`px-6 py-2 rounded-md font-medium transition-all ${
                    activeType === 'sale'
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  For Sale
                </button>
                <button
                  onClick={() => setActiveType('rent')}
                  className={`px-6 py-2 rounded-md font-medium transition-all ${
                    activeType === 'rent'
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  For Rent
                </button>
              </div>
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-dark mb-3">Category</h3>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-6 py-2 rounded-md font-medium transition-all ${
                    activeCategory === 'all'
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setActiveCategory('house')}
                  className={`px-6 py-2 rounded-md font-medium transition-all ${
                    activeCategory === 'house'
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Houses
                </button>
                <button
                  onClick={() => setActiveCategory('land')}
                  className={`px-6 py-2 rounded-md font-medium transition-all ${
                    activeCategory === 'land'
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Land
                </button>
              </div>
            </div>

            {/* Furnished Filter (only show for houses) */}
            {activeCategory === 'house' && activeType === 'rent' && (
              <div>
                <h3 className="text-lg font-semibold text-dark mb-3">Furnishing</h3>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setActiveFurnished('all')}
                    className={`px-6 py-2 rounded-md font-medium transition-all ${
                      activeFurnished === 'all'
                        ? 'bg-primary text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setActiveFurnished('furnished')}
                    className={`px-6 py-2 rounded-md font-medium transition-all ${
                      activeFurnished === 'furnished'
                        ? 'bg-primary text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Furnished
                  </button>
                  <button
                    onClick={() => setActiveFurnished('non-furnished')}
                    className={`px-6 py-2 rounded-md font-medium transition-all ${
                      activeFurnished === 'non-furnished'
                        ? 'bg-primary text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Non-Furnished
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Property Grid */}
          <div className="mb-4">
            <p className="text-gray-600">
              Showing <span className="font-semibold">{filteredProperties.length}</span> {filteredProperties.length === 1 ? 'property' : 'properties'}
            </p>
          </div>

          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((property) => (
                <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-56">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {property.type === 'sale' ? 'For Sale' : 'For Rent'}
                    </div>
                    {property.furnished !== undefined && (
                      <div className="absolute top-3 left-3 bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {property.furnished ? 'Furnished' : 'Unfurnished'}
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-xl mb-2 text-dark">{property.title}</h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{property.description}</p>
                    {property.category === 'house' && (
                      <div className="flex items-center gap-4 text-gray-600 mb-4">
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
                      <div className="text-gray-600 mb-4">
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
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No properties found matching your criteria.</p>
              <button
                onClick={() => {
                  setActiveType('all');
                  setActiveCategory('all');
                  setActiveFurnished('all');
                }}
                className="mt-4 bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-all"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
