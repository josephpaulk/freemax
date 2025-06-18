import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Shield className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold">Maxsys</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Building trust-based, local-first digital support hubs across America. 
              Tech solutions that actually work for real communities.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">info@maxsys.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">Nationwide Network</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/impact-desk" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Find Help
              </Link>
              <Link to="/e-waste-protection" className="block text-gray-400 hover:text-white transition-colors duration-200">
                E-Waste Protection
              </Link>
              <Link to="/start-tech-hub" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Start a Hub
              </Link>
              <Link to="/our-story" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Our Mission
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Tech Steward Guide
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">
                E-Waste Safety
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Community Resources
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Support Center
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Maxsys. All rights reserved. Building trusted tech communities.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;