import axios from 'axios';

const CREDLY_USER_ID = 'aa930a5b-a2a3-4922-8bc3-43292f13eacb';
const CREDLY_BADGES_URL = `https://www.credly.com/users/${CREDLY_USER_ID}/badges.json`;

/**
 * Fetches Credly badges with multiple proxy fallbacks
 * @returns {Promise<Array>} Array of badge objects
 */
export const fetchCredlyBadges = async () => {
  const proxies = [
    // Most reliable CORS proxies
    {
      url: `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(CREDLY_BADGES_URL)}`,
      parseResponse: (data) => data
    },
    {
      url: `https://corsproxy.io/?${encodeURIComponent(CREDLY_BADGES_URL)}`,
      parseResponse: (data) => data
    },
    {
      url: `https://api.allorigins.win/raw?url=${encodeURIComponent(CREDLY_BADGES_URL)}`,
      parseResponse: (data) => typeof data === 'string' ? JSON.parse(data) : data
    },
    {
      url: CREDLY_BADGES_URL,
      parseResponse: (data) => data
    }
  ];

  let lastError;
  
  for (const proxy of proxies) {
    try {
      const response = await axios.get(proxy.url, {
        timeout: 15000,
        headers: {
          'Accept': 'application/json',
        }
      });
      
      const data = proxy.parseResponse(response.data);
      return transformCredlyData(data);
    } catch (error) {
      lastError = error;
      continue;
    }
  }

  throw new Error('Unable to load certifications. Please check back later.');
};

/**
 * Transform Credly API data to simplified format
 * @param {Object} credlyData - Raw Credly API response
 * @returns {Array} Transformed badge data
 */
const transformCredlyData = (credlyData) => {
  if (!credlyData || !credlyData.data) {
    throw new Error('Invalid Credly data format');
  }

  return credlyData.data.map(item => {
    // Extract issuer information
    const issuer = item.issuer?.entities
      ?.reduce((acc, current) => {
        return [...acc, current.entity.name];
      }, [])
      .join(', ') || 'Unknown Issuer';
    
    // Extract skills
    const skills = item.badge_template?.skills?.map(skill => skill.name) || [];
    
    return {
      id: item.id,
      name: item.badge_template?.name || 'Unnamed Badge',
      description: item.badge_template?.description || '',
      imageUrl: item.image_url,
      issuedAt: item.issued_at_date,
      expiresAt: item.expires_at_date,
      issuer: issuer,
      skills: skills,
      publicUrl: `https://www.credly.com/badges/${item.id}/public_url`,
    };
  });
};

/**
 * Formats a date string to a readable format
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date
 */
export const formatDate = (dateString) => {
  if (!dateString) return 'N/A';
  
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
