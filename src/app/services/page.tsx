"use client";

import { properties } from "@/data/properties";
import { useState } from "react";
import { Home, Droplet } from "lucide-react";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<"sale" | "rent">("sale");
  const [activeCategory, setActiveCategory] = useState<"all" | "land" | "house">(
    "all"
  );

  const filteredProperties = properties.filter((property) => {
    const typeMatch = property.type === activeTab;
    const categoryMatch =
      activeCategory === "all" || property.category === activeCategory;
    return typeMatch && categoryMatch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-red-600 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md: text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg md:text-xl text-gray-100">
            Comprehensive real estate solutions for buying, selling, and renting
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Sale Service */}
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-primary">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary text-white w-12 h-12 rounded-lg flex items-center justify-center">
                  <Home className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">Sale</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Looking to buy or sell property in Bangladesh?  Desh Realty offers
                a wide range of properties including: 
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Residential Houses
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Land Plots
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Commercial Properties
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Investment Opportunities
                </li>
              </ul>
            </div>

            {/* Rent Service */}
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-secondary">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-secondary text-white w-12 h-12 rounded-lg flex items-center justify-center">
                  <Droplet className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">Rent</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Need a temporary or permanent place to stay? Browse our rental
                options: 
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-secondary">✓</span> Furnished Houses
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-secondary">✓</span> Non-Furnished Houses
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-secondary">✓</span> Apartments
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-secondary">✓</span> Short-term Rentals
                </li>
              </ul>
            </div>
          </div>

          {/* Properties Filter */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-6">Browse Properties</h2>

            {/* Type Tabs */}
            <div className="flex gap-4 mb-6 overflow-x-auto">
              <button
                onClick={() => setActiveTab("sale")}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap ${
                  activeTab === "sale"
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                For Sale
              </button>
              <button
                onClick={() => setActiveTab("rent")}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap ${
                  activeTab === "rent"
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                For Rent
              </button>
            </div>

            {/* Category Filter */}
            <div className="flex gap-4 mb-8 overflow-x-auto">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap ${
                  activeCategory === "all"
                    ? "bg-secondary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveCategory("house")}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap ${
                  activeCategory === "house"
                    ? "bg-secondary text-white"
                    : "bg-gray-100 text-gray-700 hover: bg-gray-200"
                }`}
              >
                Houses
              </button>
              <button
                onClick={() => setActiveCategory("land")}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap ${
                  activeCategory === "land"
                    ? "bg-secondary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Land
              </button>
            </div>

            {/* Properties Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.length > 0 ? (
                filteredProperties.map((property) => (
                  <div
                    key={property.id}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                  >
                    <div className="bg-gray-300 h-48 flex items-center justify-center text-7xl">
                      {property.image}
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-2">
                        {property.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-1">
                        📍 {property.location}
                      </p>
                      <p className="text-sm text-gray-500 mb-4">
                        📏 {property.size}
                      </p>

                      {property.furnished && (
                        <p className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded inline-block mb-4">
                          {property.furnished. charAt(0).toUpperCase() +
                            property.furnished.slice(1)}
                        </p>
                      )}

                      <div className="flex justify-between items-center">
                        <span className="text-primary font-bold text-lg">
                          {property.type === "sale"
                            ? `৳${(property.price / 1000000).toFixed(1)}M`
                            : `৳${property.price.toLocaleString()}/month`}
                        </span>
                        <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium">
                          Inquire
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12 bg-gray-50 rounded-lg">
                  <p className="text-gray-600 text-lg">
                    No properties found.  Try adjusting your filters.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
