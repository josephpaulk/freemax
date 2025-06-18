import React, { useState, useEffect } from 'react';
import { Calendar, User, ArrowRight, Search, Filter, BookOpen } from 'lucide-react';

interface BlogPost {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  author: number;
  featured_media: number;
  categories: number[];
  tags: number[];
  link: string;
  _embedded?: {
    author?: Array<{ name: string; avatar_urls: { 96: string } }>;
    'wp:featuredmedia'?: Array<{ source_url: string; alt_text: string }>;
    'wp:term'?: Array<Array<{ name: string; slug: string }>>;
  };
}

const Insights: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('/api-wordpress/wp/v2/posts?_embed&per_page=12');
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError('Failed to load blog posts. Using demo content.');
        // Load demo posts as fallback
        setPosts(demoPosts);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Demo posts for fallback
  const demoPosts: BlogPost[] = [
    {
      id: 1,
      title: { rendered: 'The Hidden Gateway: How E-Waste Becomes Identity Fraud' },
      excerpt: { rendered: 'Discover how improperly disposed electronic devices create entry points for criminals and what communities can do to protect themselves.' },
      content: { rendered: '' },
      date: '2024-01-15T10:00:00',
      author: 1,
      featured_media: 1,
      categories: [1],
      tags: [1, 2],
      link: 'https://hub.maxsys.org/blog/e-waste-identity-fraud',
      _embedded: {
        author: [{ name: 'Maryanne Rozier Chiriboga', avatar_urls: { 96: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=96&h=96&dpr=1' } }],
        'wp:featuredmedia': [{ source_url: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800', alt_text: 'Electronic waste disposal' }],
        'wp:term': [[{ name: 'E-Waste', slug: 'e-waste' }, { name: 'Security', slug: 'security' }]]
      }
    },
    {
      id: 2,
      title: { rendered: 'Building Trust-Based Tech Communities: The Maxsys Approach' },
      excerpt: { rendered: 'Learn how verified Tech Stewards are creating safer digital environments for nonprofits and churches across America.' },
      content: { rendered: '' },
      date: '2024-01-12T14:30:00',
      author: 1,
      featured_media: 2,
      categories: [2],
      tags: [3, 4],
      link: 'https://hub.maxsys.org/blog/trust-based-tech-communities',
      _embedded: {
        author: [{ name: 'Tech Steward Network', avatar_urls: { 96: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=96&h=96&dpr=1' } }],
        'wp:featuredmedia': [{ source_url: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800', alt_text: 'Community tech support' }],
        'wp:term': [[{ name: 'Community', slug: 'community' }, { name: 'Tech Stewards', slug: 'tech-stewards' }]]
      }
    },
    {
      id: 3,
      title: { rendered: 'The $12.7 Billion Crisis: Understanding Identity Fraud in America' },
      excerpt: { rendered: 'A deep dive into the statistics and real-world impact of identity fraud, and how proper e-waste disposal can help prevent it.' },
      content: { rendered: '' },
      date: '2024-01-10T09:15:00',
      author: 1,
      featured_media: 3,
      categories: [1],
      tags: [1, 5],
      link: 'https://hub.maxsys.org/blog/identity-fraud-crisis',
      _embedded: {
        author: [{ name: 'Maxsys Research Team', avatar_urls: { 96: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=96&h=96&dpr=1' } }],
        'wp:featuredmedia': [{ source_url: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800', alt_text: 'Cybersecurity concept' }],
        'wp:term': [[{ name: 'Research', slug: 'research' }, { name: 'Fraud Prevention', slug: 'fraud-prevention' }]]
      }
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.rendered.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.rendered.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || 
                           (post._embedded?.['wp:term']?.[0]?.some(term => term.slug === selectedCategory));
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const stripHtml = (html: string) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl mb-6">
              <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Insights & Resources
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Stay informed about the latest developments in community tech security, e-waste protection, 
              and trusted digital infrastructure.
            </p>
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
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Categories</option>
              <option value="e-waste">E-Waste</option>
              <option value="security">Security</option>
              <option value="community">Community</option>
              <option value="tech-stewards">Tech Stewards</option>
              <option value="research">Research</option>
              <option value="fraud-prevention">Fraud Prevention</option>
            </select>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="text-gray-600 dark:text-gray-400 mt-4">Loading articles...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-orange-600 dark:text-orange-400 mb-4">{error}</p>
          </div>
        ) : null}

        {filteredPosts.length === 0 && !loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">No articles found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                {/* Featured Image */}
                {post._embedded?.['wp:featuredmedia']?.[0] && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post._embedded['wp:featuredmedia'][0].source_url}
                      alt={post._embedded['wp:featuredmedia'][0].alt_text || post.title.rendered}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <div className="p-6">
                  {/* Categories */}
                  {post._embedded?.['wp:term']?.[0] && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post._embedded['wp:term'][0].slice(0, 2).map((term) => (
                        <span
                          key={term.slug}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium"
                        >
                          {term.name}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                    {post.title.rendered}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {stripHtml(post.excerpt.rendered)}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center space-x-2">
                      {post._embedded?.author?.[0] && (
                        <>
                          <img
                            src={post._embedded.author[0].avatar_urls[96]}
                            alt={post._embedded.author[0].name}
                            className="w-6 h-6 rounded-full"
                          />
                          <span>{post._embedded.author[0].name}</span>
                        </>
                      )}
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                  </div>

                  {/* Read More */}
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                  >
                    Read Full Article
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Subscribe to our newsletter for the latest insights on community tech security and fraud prevention.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-300 focus:outline-none"
            />
            <button className="bg-blue-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-900 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights;