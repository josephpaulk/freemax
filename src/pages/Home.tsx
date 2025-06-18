import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Recycle, ArrowRight, CheckCircle, Globe, Heart, Zap } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Tech that serves.<br />
                <span className="text-blue-600 dark:text-blue-400">People who care.</span>
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                Connecting nonprofits and communities with verified local tech experts. 
                Secure e-waste recycling that protects against identity fraud while building 
                trusted digital infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/impact-desk"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors duration-200 group"
                >
                  Find Tech Help
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  to="/start-tech-hub"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg text-lg font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200"
                >
                  Start a Tech Hub
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">1,200+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Tech Stewards</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Shield className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">50k+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Devices Secured</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Recycle className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">$2.5M</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Fraud Prevented</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Heart className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">500+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Communities</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Real Tech Solutions for Real Communities
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We connect local nonprofits with verified tech experts while protecting communities 
              from the $12.7 billion identity fraud crisis through secure e-waste handling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Verified Tech Stewards</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Vetted IT professionals providing trustworthy tech support to nonprofits and churches. 
                Background-checked experts who understand community needs.
              </p>
              <Link 
                to="/impact-desk" 
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline inline-flex items-center"
              >
                Find Tech Stewards <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="group bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">E-Waste Protection</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Secure device recycling that prevents identity theft. Our first line of defense 
                against the growing fraud crisis affecting communities nationwide.
              </p>
              <Link 
                to="/e-waste-protection" 
                className="text-teal-600 dark:text-teal-400 font-medium hover:underline inline-flex items-center"
              >
                Schedule Pickup <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="group bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="h-8 w-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Local Tech Hubs</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Community-based support centers led by trusted veterans and leaders. 
                Building local-first digital infrastructure that serves real needs.
              </p>
              <Link 
                to="/start-tech-hub" 
                className="text-orange-600 dark:text-orange-400 font-medium hover:underline inline-flex items-center"
              >
                Start a Hub <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Our Mission: Tech That Actually Works
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Founded by veteran and technologist Maryanne Rozier Chiriboga, Maxsys exists 
                to provide real tech solutions for real communities. We believe in trust-based, 
                local-first support that protects and empowers.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-300 mt-1 flex-shrink-0" />
                  <span className="text-lg">Veteran-founded and community-focused</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-300 mt-1 flex-shrink-0" />
                  <span className="text-lg">Secure e-waste recycling prevents fraud</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-300 mt-1 flex-shrink-0" />
                  <span className="text-lg">Local expertise for local challenges</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <Zap className="h-8 w-8 mx-auto mb-3 text-yellow-300" />
                    <div className="text-2xl font-bold">99.9%</div>
                    <div className="text-sm text-blue-200">Uptime</div>
                  </div>
                  <div>
                    <Heart className="h-8 w-8 mx-auto mb-3 text-red-300" />
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm text-blue-200">Support</div>
                  </div>
                  <div>
                    <Globe className="h-8 w-8 mx-auto mb-3 text-green-300" />
                    <div className="text-2xl font-bold">50</div>
                    <div className="text-sm text-blue-200">States</div>
                  </div>
                  <div>
                    <Users className="h-8 w-8 mx-auto mb-3 text-blue-300" />
                    <div className="text-2xl font-bold">10k+</div>
                    <div className="text-sm text-blue-200">Helped</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Build Trusted Tech Communities?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Join the growing network of communities protecting themselves from tech fraud 
            while getting the reliable support they deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/impact-desk"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors duration-200 group"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              to="/our-story"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg text-lg font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200"
            >
              Learn Our Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;