// API service for fetching data from WordPress and Laravel endpoints

const WORDPRESS_API_BASE = '/api-wordpress';
const LARAVEL_API_BASE = '/api-laravel';

// Demo data for fallback when backend is not available
const demoProjects = [
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
  },
  {
    id: '4',
    title: 'Digital Training Program',
    organization: 'Senior Community Center',
    description: 'Setting up digital literacy training program for seniors.',
    location: 'Seattle, WA',
    skills_needed: ['Digital Training', 'IT Support'],
    urgency: 'medium',
    budget: '$800-1200',
    posted_date: '2024-01-12',
    lat: 47.6062,
    lng: -122.3321
  }
];

const demoTechStewards = [
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
  },
  {
    id: '4',
    name: 'David Kim',
    location: 'Seattle, WA',
    specialties: ['Digital Training', 'Website Development', 'IT Support'],
    rating: 4.7,
    reviews_count: 73,
    verified: true,
    availability: 'Available this week',
    bio: 'Passionate about bridging the digital divide through community education and training programs.',
    lat: 47.6062,
    lng: -122.3321
  }
];

// Helper function to check if response is JSON
const isJsonResponse = (response: Response): boolean => {
  const contentType = response.headers.get('content-type');
  return contentType !== null && contentType.includes('application/json');
};

// Helper function to check if backend is available
const isBackendAvailable = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};

// WordPress/FreelanceEngine API calls
export const fetchProjects = async () => {
  try {
    const response = await fetch(`${WORDPRESS_API_BASE}/wp/v2/projects`);
    
    // Check if we got an HTML response instead of JSON (likely 404 or error page)
    if (!isJsonResponse(response)) {
      console.warn('WordPress API endpoint returned non-JSON response, using demo data');
      return demoProjects;
    }
    
    if (!response.ok) {
      console.warn(`WordPress API returned ${response.status}, using demo data`);
      return demoProjects;
    }
    
    const data = await response.json();
    
    // Transform WordPress data to our format
    return data.map((project: any) => ({
      id: project.id.toString(),
      title: project.title.rendered,
      organization: project.acf?.organization || 'Unknown Organization',
      description: project.excerpt.rendered.replace(/<[^>]*>/g, ''),
      location: project.acf?.location || 'Location TBD',
      skills_needed: project.acf?.skills_needed || [],
      urgency: project.acf?.urgency || 'medium',
      budget: project.acf?.budget || 'Budget TBD',
      posted_date: project.date,
      lat: project.acf?.latitude,
      lng: project.acf?.longitude
    }));
  } catch (error) {
    console.warn('Error fetching projects from WordPress API, using demo data:', error);
    return demoProjects;
  }
};

export const fetchTechStewards = async () => {
  try {
    const response = await fetch(`${WORDPRESS_API_BASE}/wp/v2/tech-stewards`);
    
    // Check if we got an HTML response instead of JSON (likely 404 or error page)
    if (!isJsonResponse(response)) {
      console.warn('WordPress API endpoint returned non-JSON response, using demo data');
      return demoTechStewards;
    }
    
    if (!response.ok) {
      console.warn(`WordPress API returned ${response.status}, using demo data`);
      return demoTechStewards;
    }
    
    const data = await response.json();
    
    // Transform WordPress data to our format
    return data.map((steward: any) => ({
      id: steward.id.toString(),
      name: steward.title.rendered,
      location: steward.acf?.location || 'Location TBD',
      specialties: steward.acf?.specialties || [],
      rating: steward.acf?.rating || 4.5,
      reviews_count: steward.acf?.reviews_count || 0,
      verified: steward.acf?.verified || false,
      availability: steward.acf?.availability || 'Contact for availability',
      bio: steward.content.rendered.replace(/<[^>]*>/g, ''),
      lat: steward.acf?.latitude,
      lng: steward.acf?.longitude
    }));
  } catch (error) {
    console.warn('Error fetching tech stewards from WordPress API, using demo data:', error);
    return demoTechStewards;
  }
};

// Blog posts API call
export const fetchBlogPosts = async (params?: { per_page?: number; search?: string; categories?: string }) => {
  try {
    const queryParams = new URLSearchParams();
    if (params?.per_page) queryParams.append('per_page', params.per_page.toString());
    if (params?.search) queryParams.append('search', params.search);
    if (params?.categories) queryParams.append('categories', params.categories);
    queryParams.append('_embed', 'true');

    const response = await fetch(`${WORDPRESS_API_BASE}/wp/v2/posts?${queryParams.toString()}`);
    
    // Check if we got an HTML response instead of JSON
    if (!isJsonResponse(response)) {
      console.warn('WordPress API endpoint returned non-JSON response');
      return [];
    }
    
    if (!response.ok) {
      console.warn(`WordPress API returned ${response.status}`);
      return [];
    }
    
    return await response.json();
  } catch (error) {
    console.warn('Error fetching blog posts from WordPress API:', error);
    return [];
  }
};

// Laravel HR API calls
export const submitTechHubApplication = async (applicationData: any) => {
  try {
    const response = await fetch(`${LARAVEL_API_BASE}/tech-hub-applications`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(applicationData)
    });
    
    if (!isJsonResponse(response)) {
      throw new Error('Laravel API endpoint not found or misconfigured');
    }
    
    if (!response.ok) {
      throw new Error(`Failed to submit application: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error submitting tech hub application:', error);
    throw error;
  }
};

export const fetchTechHubData = async () => {
  try {
    const response = await fetch(`${LARAVEL_API_BASE}/tech-hubs`);
    
    if (!isJsonResponse(response)) {
      console.warn('Laravel API endpoint returned non-JSON response');
      return [];
    }
    
    if (!response.ok) {
      console.warn(`Laravel API returned ${response.status}`);
      return [];
    }
    
    return await response.json();
  } catch (error) {
    console.warn('Error fetching tech hub data from Laravel API:', error);
    return [];
  }
};

// E-waste pickup scheduling
export const scheduleEWastePickup = async (pickupData: any) => {
  try {
    const response = await fetch(`${LARAVEL_API_BASE}/ewaste-pickups`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(pickupData)
    });
    
    if (!isJsonResponse(response)) {
      throw new Error('Laravel API endpoint not found or misconfigured');
    }
    
    if (!response.ok) {
      throw new Error(`Failed to schedule pickup: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error scheduling e-waste pickup:', error);
    throw error;
  }
};

// Contact form submissions
export const submitContactForm = async (contactData: any) => {
  try {
    const response = await fetch(`${LARAVEL_API_BASE}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(contactData)
    });
    
    if (!isJsonResponse(response)) {
      throw new Error('Laravel API endpoint not found or misconfigured');
    }
    
    if (!response.ok) {
      throw new Error(`Failed to submit contact form: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};

// Donation processing
export const processDonation = async (donationData: any) => {
  try {
    const response = await fetch(`${LARAVEL_API_BASE}/donations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(donationData)
    });
    
    if (!isJsonResponse(response)) {
      throw new Error('Laravel API endpoint not found or misconfigured');
    }
    
    if (!response.ok) {
      throw new Error(`Failed to process donation: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error processing donation:', error);
    throw error;
  }
};