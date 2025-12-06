import axios from 'axios';

/**
 * Extracts GitHub repository information from a URL
 * @param {string} url - GitHub repository URL
 * @returns {object|null} - Repository owner and name
 */
export const parseGitHubUrl = (url) => {
  if (!url) return null;
  
  // Remove .git extension if present
  const cleanUrl = url.replace(/\.git$/, '');
  
  const regex = /github\.com\/([^\/]+)\/([^\/\?#]+)/;
  const match = cleanUrl.match(regex);
  
  if (match) {
    return {
      owner: match[1],
      repo: match[2]
    };
  }
  
  return null;
};

/**
 * Fetches GitHub repository social preview image (Open Graph image)
 * @param {string} githubUrl - GitHub repository URL
 * @returns {Promise<string>} - Image URL or fallback
 */
export const fetchGitHubRepoImage = async (githubUrl) => {
  try {
    const repoInfo = parseGitHubUrl(githubUrl);
    
    if (!repoInfo) {
      return null;
    }

    // GitHub's Open Graph image URL format
    const ogImageUrl = `https://opengraph.githubassets.com/1/${repoInfo.owner}/${repoInfo.repo}`;
    
    return ogImageUrl;
  } catch (error) {
    return null;
  }
};

/**
 * Fetches Open Graph image from a live URL
 * Uses a CORS proxy to fetch meta tags
 * @param {string} url - Website URL
 * @returns {Promise<string|null>} - OG image URL or null
 */
export const fetchWebsiteOGImage = async (url) => {
  if (!url || url === '#') {
    return null;
  }

  try {
    // Use AllOrigins proxy to bypass CORS
    const encodedUrl = encodeURIComponent(url);
    const proxyUrl = `https://api.allorigins.win/get?url=${encodedUrl}`;
    
    const response = await axios.get(proxyUrl, { timeout: 5000 });
    const html = response.data.contents;
    
    // Extract OG image from meta tags
    const ogImageMatch = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["'][^>]*>/i) ||
                         html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*property=["']og:image["'][^>]*>/i);
    
    if (ogImageMatch && ogImageMatch[1]) {
      return ogImageMatch[1];
    }

    // Fallback: Try to find twitter:image
    const twitterImageMatch = html.match(/<meta[^>]*name=["']twitter:image["'][^>]*content=["']([^"']+)["'][^>]*>/i) ||
                              html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*name=["']twitter:image["'][^>]*>/i);
    
    if (twitterImageMatch && twitterImageMatch[1]) {
      return twitterImageMatch[1];
    }

    return null;
  } catch (error) {
    console.error('Error fetching website OG image:', error);
    return null;
  }
};

/**
 * Gets the appropriate project image based on available URLs
 * Priority: Live URL OG image > GitHub repo image > Placeholder
 * @param {object} project - Project object with githubUrl and liveUrl
 * @returns {Promise<string>} - Image URL
 */
export const getProjectImage = async (project) => {
  // If project already has a custom image that's not a placeholder, use it
  if (project.image && !project.image.includes('placeholder')) {
    return project.image;
  }

  // Try to fetch from live URL first
  if (project.liveUrl && project.liveUrl !== '#') {
    const liveImage = await fetchWebsiteOGImage(project.liveUrl);
    if (liveImage) {
      return liveImage;
    }
  }

  // Fallback to GitHub repository image
  if (project.githubUrl) {
    const githubImage = await fetchGitHubRepoImage(project.githubUrl);
    if (githubImage) {
      return githubImage;
    }
  }

  // Final fallback to placeholder with project title
  const placeholderTitle = encodeURIComponent(project.title || 'Project');
  return `https://via.placeholder.com/400x250/0ea5e9/ffffff?text=${placeholderTitle}`;
};

/**
 * Generates a placeholder image URL with project title
 * @param {string} title - Project title
 * @returns {string} - Placeholder image URL
 */
export const getPlaceholderImage = (title) => {
  const encodedTitle = encodeURIComponent(title.replace(/\s+/g, '+'));
  return `https://via.placeholder.com/400x250/0ea5e9/ffffff?text=${encodedTitle}`;
};
