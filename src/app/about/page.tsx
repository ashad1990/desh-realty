import { Target, Eye, Heart, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">About Desh Realty</h1>
          <p className="text-xl text-center text-gray-100">
            Your trusted partner in Bangladesh real estate
          </p>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-dark">Meet Our CEO</h2>
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  Moammir Chowdhury
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  With years of experience in the Bangladesh real estate market, Moammir 
                  Chowdhury founded Desh Realty with a vision to revolutionize how people 
                  find and acquire properties in Bangladesh.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Under his leadership, Desh Realty has become a trusted name in the industry, 
                  known for integrity, professionalism, and customer satisfaction. His commitment 
                  to excellence drives our mission to provide the best real estate services 
                  across the nation.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <div className="text-white text-6xl font-bold">MC</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Target className="h-12 w-12 text-primary mr-4" />
                <h2 className="text-2xl font-bold text-dark">Our Mission</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To provide exceptional real estate services that help individuals and 
                families find their perfect property. We strive to make the process of 
                buying, selling, and renting properties as smooth and transparent as 
                possible.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Eye className="h-12 w-12 text-primary mr-4" />
                <h2 className="text-2xl font-bold text-dark">Our Vision</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To become the most trusted and innovative real estate platform in Bangladesh, 
                setting new standards in customer service and property solutions while 
                contributing to the nation's growth and development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-dark">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty and transparency in all our dealings, 
                building trust with every client.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-dark">Excellence</h3>
              <p className="text-gray-600">
                We are committed to delivering the highest quality service and 
                exceeding customer expectations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-dark">Customer Focus</h3>
              <p className="text-gray-600">
                Your needs are at the heart of everything we do. We listen, understand, 
                and deliver solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
