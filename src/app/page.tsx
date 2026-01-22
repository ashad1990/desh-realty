import { Building2, Shield, TrendingUp, Users } from "lucide-react";
import Link from "next/link";
import { properties } from "@/data/properties";

export default function Home() {
  const featuredProperties = properties.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Your Dream Property in Bangladesh
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover the perfect home, land, or investment opportunity with Desh Realty
          </p>
          <Link
            href="/services"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Browse Properties
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark">
            Why Choose Desh Realty?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <Building2 className="mx-auto mb-4 text-primary" size={48} />
              <h3 className="text-xl font-bold mb-2">Wide Selection</h3>
              <p className="text-gray-600">
                Browse thousands of properties across Bangladesh
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <Shield className="mx-auto mb-4 text-primary" size={48} />
              <h3 className="text-xl font-bold mb-2">Trusted Service</h3>
              <p className="text-gray-600">
                Reliable and transparent real estate solutions
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <TrendingUp className="mx-auto mb-4 text-primary" size={48} />
              <h3 className="text-xl font-bold mb-2">Best Deals</h3>
              <p className="text-gray-600">
                Competitive prices and great investment opportunities
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <Users className="mx-auto mb-4 text-primary" size={48} />
              <h3 className="text-xl font-bold mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Professional agents ready to help you
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark">
            Featured Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
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
                    <span className="bg-primary text-white px-2 py-1 rounded text-sm">
                      {property.type === "sale" ? "For Sale" : "For Rent"}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{property.location}</p>
                  <p className="text-2xl font-bold text-primary mb-4">
                    ৳{property.price.toLocaleString()}
                    {property.type === "rent" && <span className="text-sm">/month</span>}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {property.bedrooms && (
                      <span className="text-sm text-gray-600">
                        {property.bedrooms} Beds
                      </span>
                    )}
                    {property.bathrooms && (
                      <span className="text-sm text-gray-600">
                        • {property.bathrooms} Baths
                      </span>
                    )}
                    <span className="text-sm text-gray-600">
                      • {property.area} sq ft
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {property.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
            >
              View All Properties
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
