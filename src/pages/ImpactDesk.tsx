import React, { useState, useEffect } from 'react';
import { Search, MapPin, Filter, Star, Shield, Clock, ChevronRight } from 'lucide-react';
import MapComponent from '../components/MapComponent';
import { fetchProjects, fetchTechStewards } from '../services/api';

interface Project {
  id: string;
  title: string;
  organization: string;
  description: string;
  location: string;
  skills_needed: string[];
  urgency: 'low' | 'medium' | 'high';
  budget: string;
  posted_date: string;
  lat?: number;
  lng?: number;
}

interface TechSteward {
  id: string;
  name: string;
  location: string;
  specialties: string[];
  rating: number;
  reviews_count: number;
  verified: boolean;
  availability: string;
  bio: string;
  lat?: number;
  lng?: number;
}

const ImpactDesk: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'projects' | 'stewards'>('projects');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('');
  const [projects, setProjects] = useState<Project[]>([]);
  const [techStewards, setTechStewards] = useState<TechSteward[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showMap, setShowMap] = useState(false);

  const skills = [
    'Network Security', 'Data Recovery', 'Cloud Migration', 'Website Development',
    'Database Management', 'IT Support', 'E-waste Disposal', 'Digital Training'
  ];

  const locations = [
    'San Francisco, CA', 'New York, NY', 'Austin, TX', 'Denver, CO',
    'Seattle, WA', 'Chicago, IL', 'Atlanta, GA', 'Boston, MA'
  ];

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        if (activeTab === 'projects') {
          const projectData = await fetchProjects();
          setProjects(projectData);
        } else {
          const stewardData = await fetchTechStewards();
          setTechStewards(stewardData);
        }
      } catch (err) {
        setError('Failed to load data. Using demo data instead.');
        // Load demo data as fallback
        if (activeTab === 'projects') {
          setProjects(demoProjects);
        } else {
          setTechStewards(demoTechStewards);
        }
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [activeTab]);

  // Demo data for fallback
  const demoProjects: Project[] = [
    {
      id: '1',
      title: 'Website Security Audit',
      organization: 'Community Food Bank',
      description: 'Need help securing our donation website and implementing SSL certificates.',
      location: 'San Francisco, CA',
      skills_needed: ['Network Security', 'Website Development'],
      urgency: 'high',
      budget: '$500-1000',
      posted_date: '2024-01-15',
      lat: 37.7749,
      lng: -122.4194
    },
    {
      id: '2',
      title: 'Database Migration Support',
      organization: 'Local Animal Shelter',
      description: 'Migrating from legacy system to cloud-based database for animal records.',
      location: 'Austin, TX',
      skills_needed: ['Database Management', 'Cloud Migration'],
      urgency: 'medium',
      budget: '$1000-2000',
      posted_date: '2024-01-14',
      lat: 30.2672,
      lng: -97.7431
    },
    {
      id: '3',
      title: 'E-waste Collection Setup',
      organization: 'Green Community Initiative',
      description: 'Setting up secure e-waste collection and data destruction protocols.',
      location: 'Denver, CO',
      skills_needed: ['E-waste Disposal', 'Data Recovery'],
      urgency: 'low',
      budget: '$300-500',
      posted_date: '2024-01-13',
      lat: 39.7392,
      lng: -104.9903
    }
  ];

  const demoTechStewards: TechSteward[] = [
    {
      id: '1',
      name: 'Sarah Chen',
      location: 'San Francisco, CA',
      specialties: ['Network Security', 'Cloud Migration', 'IT Support'],
      rating: 4.9,
      reviews_count: 127,
      verified: true,
      availability: 'Available this week',
      bio: 'Veteran cybersecurity specialist with 10+ years helping nonprofits secure their digital infrastructure.',
      lat: 37.7749,
      lng: -122.4194
    },
    {
      id: '2',
      name: 'Marcus Rodriguez',
      location: 'Austin, TX',
      specialties: ['Database Management', 'Website Development', 'Digital Training'],
      rating: 4.8,
      reviews_count: 89,
      verified: true,
      availability: 'Available next week',
      bio: 'Full-stack developer specializing in nonprofit database solutions and staff training.',
      lat: 30.2672,
      lng: -97.7431
    },
    {
      id: '3',
      name: 'Jennifer Park',
      location: 'Denver, CO',
      specialties: ['E-waste Disposal', 'Data Recovery', 'IT Support'],
      rating: 5.0,
      reviews_count: 156,
      verified: true,
      availability: 'Available today',
      bio: 'Certified e-waste specialist focused on secure data destruction and environmental responsibility.',
      lat: 39.7392,
      lng: -104.9903
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = !selectedLocation || project.location === selectedLocation;
    const matchesSkill = !selectedSkill || project.skills_needed.includes(selectedSkill);
    return matchesSearch && matchesLocation && matchesSkill;
  });

  const filteredStewards = techStewards.filter(steward => {
    const matchesSearch = steward.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         steward.bio.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = !selectedLocation || steward.location === selectedLocation;
    const matchesSkill = !selectedSkill || steward.specialties.includes(selectedSkill);
    return matchesSearch && matchesLocation && matchesSkill;
  });

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Impact Desk
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Connect nonprofits with verified Tech Stewards. Find help or offer your expertise 
              to build stronger, more secure communities.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mt-8">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-1 flex">
              <button
                onClick={() => setActiveTab('projects')}
                className={`px-6 py-2 rounded-md font-medium transition-colors duration-200 ${
                  activeTab === 'projects'
                    ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Nonprofits Need Help
              </button>
              <button
                onClick={() => setActiveTab('stewards')}
                className={`px-6 py-2 rounded-md font-medium transition-colors duration-200 ${
                  activeTab === 'stewards'
                    ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Meet the Tech Stewards
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder={`Search ${activeTab === 'projects' ? 'projects' : 'tech stewards'}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Location Filter */}
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Locations</option>
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>

            {/* Skill Filter */}
            <select
              value={selectedSkill}
              onChange={(e) => setSelectedSkill(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Skills</option>
              {skills.map(skill => (
                <option key={skill} value={skill}>{skill}</option>
              ))}
            </select>

            {/* Map Toggle */}
            <button
              onClick={() => setShowMap(!showMap)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2 ${
                showMap
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <MapPin className="h-4 w-4" />
              <span>{showMap ? 'Hide Map' : 'Show Map'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {showMap && (
        <section className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-64 lg:h-96">
              <MapComponent
                items={activeTab === 'projects' ? filteredProjects : filteredStewards}
                type={activeTab}
              />
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="text-gray-600 dark:text-gray-400 mt-4">Loading...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-orange-600 dark:text-orange-400 mb-4">{error}</p>
          </div>
        ) : null}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            {filteredProjects.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 dark:text-gray-400">No projects found matching your criteria.</p>
              </div>
            ) : (
              filteredProjects.map((project) => (
                <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getUrgencyColor(project.urgency)}`}>
                          {project.urgency} priority
                        </span>
                      </div>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{project.organization}</p>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.skills_needed.map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-4 mb-2 sm:mb-0">
                          <span className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {project.location}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {new Date(project.posted_date).toLocaleDateString()}
                          </span>
                        </div>
                        <span className="font-medium text-gray-900 dark:text-white">{project.budget}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 lg:mt-0 lg:ml-6">
                      <button className="w-full lg:w-auto bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
                        Apply to Help
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* Tech Stewards Tab */}
        {activeTab === 'stewards' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredStewards.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-600 dark:text-gray-400">No tech stewards found matching your criteria.</p>
              </div>
            ) : (
              filteredStewards.map((steward) => (
                <div key={steward.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{steward.name}</h3>
                        {steward.verified && (
                          <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        )}
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {steward.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="font-medium text-gray-900 dark:text-white">{steward.rating}</span>
                        <span className="text-gray-500 dark:text-gray-400">({steward.reviews_count})</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4">{steward.bio}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {steward.specialties.map((specialty) => (
                      <span key={specialty} className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-300 rounded-full text-sm">
                        {specialty}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                      {steward.availability}
                    </span>
                    <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors duration-200">
                      Contact
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default ImpactDesk;