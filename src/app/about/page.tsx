import { Award, Target, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-red-600 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Desh Realty</h1>
          <p className="text-lg md:text-xl text-gray-100">
            Transforming the real estate industry in Bangladesh
          </p>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* CEO Image Placeholder */}
            <div className="flex justify-center">
              <div className="bg-gray-300 w-72 h-72 rounded-lg flex items-center justify-center text-9xl shadow-lg">
                👨‍💼
              </div>
            </div>

            {/* CEO Bio */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Moammir Chowdhury
              </h2>
              <p className="text-secondary font-semibold text-lg mb-6">
                Founder & CEO
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Moammir Chowdhury is a visionary entrepreneur with over 15 years
                of experience in the real estate industry. He founded Desh
                Realty with a mission to revolutionize how people buy, sell, and
                rent properties in Bangladesh.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                With a deep understanding of the Bangladesh market and a passion
                for innovation, Moammir has built Desh Realty into a trusted
                platform that connects buyers, sellers, and renters seamlessly.
              </p>
              <p className="text-gray-700 leading-relaxed">
                His vision is to make real estate transactions simple, transparent,
                and accessible to everyone in Bangladesh.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Transparency</h3>
              <p className="text-gray-600">
                We believe in honest, transparent dealings with all our clients.
                No hidden fees, no surprises. 
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-secondary text-white w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                Our customers are at the heart of everything we do.  We listen,
                adapt, and improve based on their feedback.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our business, from
                technology to customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg: px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To make real estate transactions in Bangladesh simple, fast, and
                transparent.  We aim to empower individuals and families to make
                informed property decisions while supporting sellers and investors
                in achieving their goals.
              </p>
            </div>

            {/* Vision */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the leading real estate platform in South Asia, known for
                our innovation, integrity, and customer-centric approach. We
                envision a future where finding the perfect property is as easy
                as a few clicks. 
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
