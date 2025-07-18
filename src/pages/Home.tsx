// Home.tsx
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
                Rebuilding Trust with<br />
                <span className="text-blue-600 dark:text-blue-400">Tech that Serves</span>
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                We're a nonprofit bridging the digital divide through local Tech Hubs.
                Real people. Real solutions. Because good technology is just good neighbors helping each other.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/impact-desk" className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors duration-200 group">
                  Get Help Locally
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link to="/start-tech-hub" className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg text-lg font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200">
                  Launch a Tech Hub
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
                <div className="grid grid-cols-2 gap-6">
                  <Stat icon={<Users />} value="1,200+" label="Tech Stewards" color="blue" />
                  <Stat icon={<Shield />} value="50k+" label="Devices Secured" color="teal" />
                  <Stat icon={<Recycle />} value="$2.5M" label="Fraud Prevented" color="orange" />
                  <Stat icon={<Heart />} value="500+" label="Communities Served" color="green" />
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
              Bringing Tech Support Back to the Neighborhood
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Small nonprofits shouldn’t have to choose between feeding families and fixing email.
              Maxsys makes sure they don’t have to.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Feature icon={<Users />} title="Verified Tech Stewards" color="blue" link="/impact-desk">
              Local, background-checked IT professionals who offer trustworthy support built on relationships, not sales quotas.
            </Feature>
            <Feature icon={<Shield />} title="E-Waste Protection" color="teal" link="/e-waste-protection">
              Secure, certified device disposal—protecting identities and preventing data leaks before they happen.
            </Feature>
            <Feature icon={<Globe />} title="Local Tech Hubs" color="orange" link="/start-tech-hub">
              Virtual service centers led by trusted locals. No offices. No overhead. Just real help from people who care.
            </Feature>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Mission: Tech That Respects People</h2>
              <p className="text-xl mb-8 text-blue-100">
                Maxsys was founded by Maryanne Rozier Chiriboga—Marine veteran, missionary, cancer survivor—
                to make technology work for the communities too often overlooked.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-300 mt-1" />
                  <span className="text-lg">Built by and for the community</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-300 mt-1" />
                  <span className="text-lg">Retired tech pros earning fair wages</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-300 mt-1" />
                  <span className="text-lg">No sales pressure, just honest help</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <Stat icon={<Zap />} value="99.9%" label="Uptime" color="yellow" />
                  <Stat icon={<Heart />} value="24/7" label="Support" color="red" />
                  <Stat icon={<Globe />} value="50" label="States" color="green" />
                  <Stat icon={<Users />} value="10k+" label="People Helped" color="blue" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Want to Help Your Community Get Better Tech?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Whether you’re a nonprofit, a local leader, or a laid-off tech worker—
            there’s a place for you at Maxsys.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/impact-desk" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors duration-200 group">
              Join the Network
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link to="/our-story" className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg text-lg font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const Stat = ({ icon, value, label, color }: any) => (
  <div className="text-center">
    <div className={`w-12 h-12 bg-${color}-100 dark:bg-${color}-900 rounded-lg flex items-center justify-center mx-auto mb-3`}>
      {React.cloneElement(icon, { className: `h-6 w-6 text-${color}-600 dark:text-${color}-400` })}
    </div>
    <div className="text-2xl font-bold text-gray-900 dark:text-white">{value}</div>
    <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
  </div>
);

const Feature = ({ icon, title, color, children, link }: any) => (
  <div className="group bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
    <div className={`w-16 h-16 bg-${color}-100 dark:bg-${color}-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
      {React.cloneElement(icon, { className: `h-8 w-8 text-${color}-600 dark:text-${color}-400` })}
    </div>
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400 mb-6">{children}</p>
    <Link to={link} className={`text-${color}-600 dark:text-${color}-400 font-medium hover:underline inline-flex items-center`}>
      Learn More <ArrowRight className="ml-1 h-4 w-4" />
    </Link>
  </div>
);

export default Home;
