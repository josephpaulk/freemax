// EWasteProtection.tsx
import React from 'react';
import { Trash2, Lock, ShieldCheck, CheckCircle } from 'lucide-react';

const EWasteProtection: React.FC = () => {
  return (
    <div className="pt-16">
      <section className="bg-white dark:bg-gray-900 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            E-Waste Protection That Defends Communities
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
            Every improperly recycled laptop is a doorway to fraud. That’s why we take
            e-waste seriously—not just as an environmental issue, but as a frontline
            defense for vulnerable communities.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              The $12.7 Billion Problem
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Identity theft fueled by discarded devices is a growing national crisis.
              Many nonprofits and churches unknowingly toss out electronics filled with
              sensitive data—endangering every donor, volunteer, and client they’ve ever served.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Maxsys Tech Hubs operate as certified collection points. Our trained Tech Stewards
              sanitize data properly—because deleting files isn’t enough. Every hard drive is
              wiped using forensic standards or physically destroyed.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400 mt-1" />
                <span className="text-gray-700 dark:text-gray-300">On-site data destruction or certified erasure</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400 mt-1" />
                <span className="text-gray-700 dark:text-gray-300">Chain-of-custody tracking for all collected devices</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400 mt-1" />
                <span className="text-gray-700 dark:text-gray-300">Environmental compliance + community security</span>
              </li>
            </ul>
          </div>

          <div className="bg-teal-50 dark:bg-teal-900 rounded-2xl p-8 shadow-lg text-center">
            <div className="flex justify-center mb-6">
              <ShieldCheck className="h-12 w-12 text-teal-600 dark:text-teal-300" />
            </div>
            <blockquote className="text-xl italic text-teal-800 dark:text-teal-200 mb-4">
              “Responsible recycling isn’t charity. It’s protection.”
            </blockquote>
            <p className="text-gray-700 dark:text-gray-300">
              When we collect and destroy old devices, we’re not just preventing environmental harm—
              we’re keeping fraud rings from exploiting your neighbors.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Schedule a Secure Pickup
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-400 mb-8">
            If your organization needs to dispose of old computers, let us help you do it safely.
            Keep your people protected and your conscience clear.
          </p>
          <a
            href="/impact-desk"
            className="inline-block px-8 py-4 bg-teal-600 text-white rounded-lg text-lg font-medium hover:bg-teal-700 transition-colors duration-200"
          >
            Contact a Local Tech Hub
          </a>
        </div>
      </section>
    </div>
  );
};

export default EWasteProtection;
