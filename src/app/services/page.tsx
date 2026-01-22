'use client';

import { useState } from 'react';
import Image from 'next/image';
import { properties } from '@/data/properties';
import { MapPin, Home, Bed, Bath } from 'lucide-react';

export default function ServicesPage() {
  const [selectedType, setSelectedType] = useState<'all' | 'sale' | 'rent'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProperties = properties.filter((property) => {
    if (selectedType !== 'all' && property.type !== selectedType) {
      return false;
    }
    if (selectedCategory !== 'all' && property.category !== selectedCategory) {
      return false;
    }
    return true;
  });

  const categories = {
    sale: ['land', 'house'],
    rent: ['furnished', 'non-furnished'],
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Services</h1>
          <p className="text-xl text-center text-gray-100">
            Find the perfect property for sale or rent
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-primary">For Sale</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <div>
                    <strong>Land:</strong> Residential and commercial plots across prime 
                    locations in Dhaka
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <div>
                    <strong>Houses:</strong> Modern villas, apartments, and family homes 
                    ready for ownership
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-primary">For Rent</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <div>
                    <strong>Furnished:</strong> Ready-to-move-in apartments with modern 
                    furniture and amenities
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <div>
                    <strong>Non-Furnished:</strong> Flexible rental spaces for you to 
                    customize as your own
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setSelectedType('all');
                  setSelectedCategory('all');
                }}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                  selectedType === 'all'
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                All
              </button>
              <button
                onClick={() => {
                  setSelectedType('sale');
                  setSelectedCategory('all');
                }}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                  selectedType === 'sale'
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                For Sale
              </button>
              <button
                onClick={() => {
                  setSelectedType('rent');
                  setSelectedCategory('all');
                }}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                  selectedType === 'rent'
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                For Rent
              </button>
            </div>

            {selectedType !== 'all' && (
              <div className="flex gap-2">
                {categories[selectedType].map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-semibold capitalize transition-colors ${
                      selectedCategory === category
                        ? 'bg-secondary text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category === 'non-furnished' ? 'Non-Furnished' : category}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Properties Listing */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
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
                  <div className="absolute top-3 left-3 bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
                    {property.category === 'non-furnished' ? 'Non-Furnished' : property.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-xl mb-2 text-dark">
                    {property.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {property.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      {property.location}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Home className="h-4 w-4 mr-2 text-primary" />
                      {property.area}
                    </div>
                    {property.bedrooms && property.bathrooms && (
                      <div className="flex items-center gap-4 text-gray-600 text-sm">
                        <div className="flex items-center">
                          <Bed className="h-4 w-4 mr-1 text-primary" />
                          {property.bedrooms} Beds
                        </div>
                        <div className="flex items-center">
                          <Bath className="h-4 w-4 mr-1 text-primary" />
                          {property.bathrooms} Baths
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-primary font-bold text-2xl">{property.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filteredProperties.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No properties found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
