"use client";

import { useState } from "react";
import { properties } from "@/data/properties";
import { Filter } from "lucide-react";

export default function Services() {
  const [selectedType, setSelectedType] = useState<"all" | "sale" | "rent">("all");
  const [selectedCategory, setSelectedCategory] = useState<"all" | "land" | "house" | "apartment">("all");
  const [selectedFurnished, setSelectedFurnished] = useState<"all" | "furnished" | "non-furnished">("all");

  const filteredProperties = properties.filter((property) => {
    if (selectedType !== "all" && property.type !== selectedType) return false;
    if (selectedCategory !== "all" && property.category !== selectedCategory) return false;
    if (selectedFurnished === "furnished" && !property.furnished) return false;
    if (selectedFurnished === "non-furnished" && property.furnished) return false;
    return true;
  });

  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Browse our extensive collection of properties across Bangladesh
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50 sticky top-16 z-40 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="text-primary" size={24} />
            <h2 className="text-xl font-bold">Filter Properties</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Type Filter */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700">
                Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value as any)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="all">All Types</option>
                <option value="sale">For Sale</option>
                <option value="rent">For Rent</option>
              </select>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as any)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="all">All Categories</option>
                <option value="land">Land</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
              </select>
            </div>

            {/* Furnished Filter */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700">
                Furnished
              </label>
              <select
                value={selectedFurnished}
                onChange={(e) => setSelectedFurnished(e.target.value as any)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="all">All</option>
                <option value="furnished">Furnished</option>
                <option value="non-furnished">Non-Furnished</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Listing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <p className="text-lg text-gray-600">
              Showing <span className="font-bold text-primary">{filteredProperties.length}</span> properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{property.title}</h3>
                    <span className="bg-primary text-white px-2 py-1 rounded text-sm whitespace-nowrap">
                      {property.type === "sale" ? "For Sale" : "For Rent"}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{property.location}</p>
                  <p className="text-2xl font-bold text-primary mb-4">
                    ৳{property.price.toLocaleString()}
                    {property.type === "rent" && <span className="text-sm">/month</span>}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-gray-100 px-2 py-1 rounded text-sm text-gray-700">
                      {property.category.charAt(0).toUpperCase() + property.category.slice(1)}
                    </span>
                    {property.furnished && (
                      <span className="bg-secondary bg-opacity-20 px-2 py-1 rounded text-sm text-gray-700">
                        Furnished
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4 text-sm text-gray-600">
                    {property.bedrooms && (
                      <span>{property.bedrooms} Beds</span>
                    )}
                    {property.bathrooms && (
                      <span>• {property.bathrooms} Baths</span>
                    )}
                    <span>• {property.area} sq ft</span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {property.description}
                  </p>

                  <div className="border-t pt-4">
                    <p className="text-sm font-semibold mb-2 text-gray-700">Features:</p>
                    <div className="flex flex-wrap gap-1">
                      {property.features.slice(0, 3).map((feature, index) => (
                        <span
                          key={index}
                          className="text-xs bg-gray-100 px-2 py-1 rounded"
                        >
                          {feature}
                        </span>
                      ))}
                      {property.features.length > 3 && (
                        <span className="text-xs text-gray-500 px-2 py-1">
                          +{property.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">
                No properties found matching your filters.
              </p>
              <button
                onClick={() => {
                  setSelectedType("all");
                  setSelectedCategory("all");
                  setSelectedFurnished("all");
                }}
                className="mt-4 bg-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
