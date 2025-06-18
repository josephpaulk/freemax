import React from 'react';
import { Shield, Heart, Globe, Users, Award, Zap, CheckCircle, Star } from 'lucide-react';

const OurStory: React.FC = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                Founded by veteran, technologist, and missionary Maryanne Rozier Chiriboga, 
                Maxsys exists to provide real tech solutions for real communities. We believe 
                technology should serve people, not the other way around.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <Heart className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Mission-Driven</p>
                  <p className="text-gray-600 dark:text-gray-400">People first, always</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8">
<div className="text-center mb-6">
  {/* The image tag below replaces the initials circle. */}
  {/* IMPORTANT: Make sure 'maryanne-chiriboga.jpg' is in your /public folder. */}
  <img
    src="/maryanne-chiriboga.jpg"
    alt="Maryanne Rozier Chiriboga, Founder & CEO"
    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-white dark:border-gray-800 shadow-lg"
  />
  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Maryanne Rozier Chiriboga</h3>
  <p className="text-gray-600 dark:text-gray-400">Founder & CEO</p>
</div>
                
                <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    <span>USMC Veteran</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                    <span>Entrepreneur</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Heart className="h-4 w-4 text-red-600 dark:text-red-400" />
                    <span>Community Missionary</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <span>Nonprofit Advocate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Mission & Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We're building trust-based, local-first digital support hubs across America. 
              Technology that actually works for the people who need it most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Trust First</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Every interaction built on transparency, verification, and genuine care for community wellbeing.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Globe className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Local Impact</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Solutions designed for real communities by people who understand local challenges and needs.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Mission Driven</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Profit with purpose. Every service advances our mission of protecting and empowering communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-red-50 dark:bg-red-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              The Problem We're Solving
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              America faces a $12.7 billion identity fraud crisis, with improper e-waste disposal 
              as the hidden gateway criminals use to access personal information.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 dark:text-red-400 font-bold text-sm">!</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">$12.7 Billion Lost Annually</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Identity fraud costs Americans billions each year, with community organizations 
                      being particularly vulnerable targets.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600 dark:text-orange-400 font-bold text-sm">!</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Improper E-Waste Disposal</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Over 60 million devices are discarded annually without proper data destruction, 
                      creating entry points for criminals.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-600 dark:text-yellow-400 font-bold text-sm">!</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Nonprofit Vulnerability</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Community organizations often lack resources for proper IT security and data protection, 
                      making them prime targets.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Solution</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-300" />
                  <span>Verified Tech Stewards providing trusted local support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-300" />
                  <span>Certified secure e-waste recycling and data destruction</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-300" />
                  <span>Community-based tech hubs led by trusted leaders</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-300" />
                  <span>Affordable, mission-driven technology services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Growing Impact
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From a single vision to a nationwide network of trusted tech advocates.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">1,200+</div>
              <div className="text-gray-600 dark:text-gray-400">Certified Tech Stewards</div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-400">Communities Served</div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">50,000+</div>
              <div className="text-gray-600 dark:text-gray-400">Devices Secured</div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">$2.5M</div>
              <div className="text-gray-600 dark:text-gray-400">Fraud Prevented</div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Star className="h-6 w-6 text-yellow-500" />
                <h4 className="font-bold text-gray-900 dark:text-white">Community First</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                "Maxsys doesn't just provide tech support – they become part of our community. 
                Their Tech Stewards understand our mission and work with genuine care."
              </p>
              <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                — Sarah M., Community Food Bank Director
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <h4 className="font-bold text-gray-900 dark:text-white">Trusted Protection</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                "After a security breach, Maxsys helped us completely overhaul our systems. 
                Their e-waste disposal gave us peace of mind about our old equipment."
              </p>
              <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                — Rev. James K., St. Mary's Church
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Heart className="h-6 w-6 text-red-600 dark:text-red-400" />
                <h4 className="font-bold text-gray-900 dark:text-white">Mission Aligned</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                "Working with Maxsys as a Tech Steward lets me serve my community while 
                building a sustainable business. It's technology work with real purpose."
              </p>
              <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                — Marcus R., Certified Tech Steward
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Leadership
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Experienced professionals united by a mission to protect and empower communities through technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
  {/* Using the same image for the leadership card. */}
  <img
    src="/maryanne-chiriboga.jpg"
    alt="Maryanne Rozier Chiriboga, Founder & CEO"
    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 shadow-md"
  />
  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Maryanne Rozier Chiriboga</h3>
  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">Founder & CEO</p>
  <p className="text-gray-600 dark:text-gray-400 text-sm">
    Veteran, technologist, and missionary with 15+ years building tech solutions for underserved communities.
  </p>
</div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">DW</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Dr. David Williams</h3>
              <p className="text-green-600 dark:text-green-400 font-medium mb-3">Chief Technology Officer</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Former cybersecurity executive with expertise in secure data destruction and nonprofit IT infrastructure.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">LM</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Lisa Martinez</h3>
              <p className="text-orange-600 dark:text-orange-400 font-medium mb-3">VP of Community Operations</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                20+ years in nonprofit leadership, specializing in community partnership development and volunteer management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Whether you need tech help, want to become a Tech Steward, or are ready to start a 
            Tech Hub in your community, there's a place for you in the Maxsys family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/impact-desk"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              Find Help Today
            </a>
            <a
              href="/start-tech-hub"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg text-lg font-medium hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Start a Tech Hub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
