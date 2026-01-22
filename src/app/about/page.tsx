import { Target, Eye, Award, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Desh Realty</h1>
            <p className="text-xl text-white/90">
              Your trusted partner in finding the perfect property in Bangladesh. 
              We are committed to excellence in real estate services.
            </p>
          </div>
        </div>
      </section>

      {/* CEO Profile Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Leadership
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-primary to-secondary p-8 text-white flex flex-col items-center justify-center">
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-4xl font-bold">MC</span>
                </div>
                <h3 className="text-2xl font-bold text-center">Moammir Chowdhury</h3>
                <p className="text-white/90 text-center mt-2">CEO & Founder</p>
              </div>
              <div className="md:w-2/3 p-8">
                <p className="text-gray-700 mb-4">
                  Moammir Chowdhury is the visionary founder and CEO of Desh Realty. With over 15 years of 
                  experience in the Bangladesh real estate market, he has built Desh Realty into one of the 
                  most trusted names in the industry.
                </p>
                <p className="text-gray-700 mb-4">
                  Under his leadership, Desh Realty has successfully helped thousands of families find their 
                  dream homes and assisted numerous investors in making sound real estate decisions.
                </p>
                <p className="text-gray-700">
                  His commitment to transparency, integrity, and customer satisfaction has been the cornerstone 
                  of Desh Realty's success and reputation in the market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-lg">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark">Integrity</h3>
              <p className="text-gray-600">
                We maintain the highest standards of honesty and ethical behavior in all our dealings.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every property and service we offer to our clients.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark">Commitment</h3>
              <p className="text-gray-600">
                We are dedicated to helping our clients achieve their real estate goals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark">Transparency</h3>
              <p className="text-gray-600">
                We believe in clear, open communication and honest dealings with all stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-dark mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                To provide exceptional real estate services that exceed our clients' expectations, 
                making property transactions simple, transparent, and rewarding.
              </p>
              <p className="text-gray-700">
                We aim to be the bridge between property seekers and their dream homes, offering 
                expert guidance and personalized service every step of the way.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-dark mb-4">Our Vision</h2>
              <p className="text-gray-700 mb-4">
                To become Bangladesh's most trusted and innovative real estate platform, 
                transforming how people buy, sell, and rent properties.
              </p>
              <p className="text-gray-700">
                We envision a future where finding the perfect property is effortless, 
                accessible, and empowering for all Bangladeshis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
