import Link from "next/link";
import { ArrowRight, Home, MapPin, DollarSign } from "lucide-react";
import { properties } from "@/data/properties";

export default function HomePage() {
  const featuredProperties = properties.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-red-600 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg: px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find Your Perfect Property in Bangladesh
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              Buy, sell, or rent properties with ease.  Desh Realty makes finding
              your dream home simple. 
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                Explore Properties <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#contact"
                className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Desh Realty?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-primary text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Vast Selection</h3>
              <p className="text-gray-600">
                Choose from thousands of properties for sale and rent across
                Bangladesh. 
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-secondary text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Easy Navigation</h3>
              <p className="text-gray-600">
                Find properties by location, price, and type with our simple
                search interface.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-primary text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Best Prices</h3>
              <p className="text-gray-600">
                Transparent pricing with no hidden fees. Get the best deals on
                the market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Featured Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProperties. map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="bg-gray-300 h-40 flex items-center justify-center text-6xl">
                  {property.image}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{property.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{property.location}</p>
                  <p className="text-sm text-gray-500 mb-3">{property.size}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-bold">
                      {property.type === "sale"
                        ? `৳${(property.price / 1000000).toFixed(1)}M`
                        : `৳${property.price.toLocaleString()}/month`}
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-xs font-medium">
                      {property.type. charAt(0).toUpperCase() +
                        property.type.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center gap-2"
            >
              View All Properties <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg: px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-lg mb-8 text-gray-100">
            Let our experts help you find the perfect home or investment
            opportunity. 
          </p>
          <Link
            href="#contact"
            className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
          >
            Get Started <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
