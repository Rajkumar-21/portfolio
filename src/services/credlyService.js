import axios from 'axios';

const CREDLY_USER_ID = 'aa930a5b-a2a3-4922-8bc3-43292f13eacb';
const CREDLY_BADGES_URL = `https://www.credly.com/users/${CREDLY_USER_ID}/badges.json`;

/**
 * Fetches Credly badges using AllOrigins proxy to bypass CORS
 * @returns {Promise<Array>} Array of badge objects
 */
export const fetchCredlyBadges = async () => {
  try {
    // Encode the Credly URL for the AllOrigins proxy
    const encodedUrl = encodeURIComponent(CREDLY_BADGES_URL);
    const proxyUrl = `https://api.allorigins.win/get?url=${encodedUrl}`;
    
    // Fetch data through the proxy
    const response = await axios.get(proxyUrl);
    
    // Parse the JSON response from AllOrigins
    const credlyData = JSON.parse(response.data.contents);
    
    // Transform the data into a simplified format
    const badges = credlyData.data.map(item => {
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
    
    return badges;
  } catch (error) {
    console.error('Error fetching Credly badges:', error);
    throw new Error('Failed to fetch Credly badges. Please try again later.');
  }
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
