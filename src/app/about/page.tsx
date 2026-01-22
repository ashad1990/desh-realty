import { Target, Eye, Heart, Award } from "lucide-react";

export default function About() {
  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Desh Realty</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Building dreams, creating communities, and transforming Bangladesh&apos;s real estate landscape
          </p>
        </div>
      </section>

      {/* CEO Profile Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-dark">
              Leadership
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <span className="text-white text-6xl font-bold">MC</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Moammir Chowdhury</h3>
                  <p className="text-primary font-semibold mb-4">Chief Executive Officer</p>
                  <p className="text-gray-600 mb-4">
                    With over 15 years of experience in Bangladesh&apos;s real estate industry, 
                    Moammir Chowdhury has been instrumental in transforming Desh Realty into 
                    one of the most trusted names in property development and management.
                  </p>
                  <p className="text-gray-600">
                    His vision is to make quality housing accessible to every Bangladeshi family 
                    while maintaining the highest standards of integrity and customer service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Target className="text-primary mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide exceptional real estate services that exceed our clients&apos; expectations 
                through innovation, integrity, and personalized attention. We strive to make the 
                property buying, selling, and renting process seamless and transparent for everyone.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Eye className="text-primary mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be Bangladesh&apos;s leading real estate platform, recognized for setting new 
                standards in customer service, property quality, and sustainable development. 
                We envision a future where every Bangladeshi has access to safe, affordable, 
                and quality housing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-dark">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Heart className="mx-auto mb-4 text-primary" size={48} />
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We conduct our business with the highest ethical standards, 
                ensuring transparency in every transaction.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Award className="mx-auto mb-4 text-primary" size={48} />
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We are committed to delivering superior quality in every property 
                and service we offer.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Target className="mx-auto mb-4 text-primary" size={48} />
              <h3 className="text-xl font-bold mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                Our clients&apos; needs drive everything we do. We listen, understand, 
                and deliver tailored solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">15+</p>
              <p className="text-lg">Years of Experience</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">5000+</p>
              <p className="text-lg">Happy Clients</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">1000+</p>
              <p className="text-lg">Properties Sold</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">50+</p>
              <p className="text-lg">Expert Agents</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
