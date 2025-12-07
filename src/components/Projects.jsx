import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaSpinner } from 'react-icons/fa';
import { fetchGitHubRepoImage, getPlaceholderImage } from '../services/projectImageService';

const Projects = () => {
  const [projectsWithImages, setProjectsWithImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const projects = [
    {
      title: 'RajFlix - AI Powered Movie & Shows indexing Platform',
      description: 'An AI-powered platform that indexes movies and shows, providing personalized recommendations and search functionality.',
      technologies: ['React', 'Typescript', 'Gemini AI'],
      githubUrl: 'https://github.com/Rajkumar-21/RajFlix',
      liveUrl: 'https://rajkumar-21.github.io/RajFlix/',
    },
    {
      title: 'Google Books Inventory App',
      description: 'A full-stack application to manage and track book inventories using Google Books API.',
      technologies: ['React', 'Node.js', 'Tailwind CSS'],
      githubUrl: 'https://github.com/Rajkumar-21/google-books-inventory-app',
      liveUrl: 'https://github.com/Rajkumar-21/google-books-inventory-app',
    },
    {
      title: 'Microsoft Agent Framework Samples',
      description: 'Collaborative task management application with real-time updates and team collaboration features.',
      technologies: ['Python', 'Agent Framework', 'Openai', 'Genai', 'Azure Cognitive Services'],
      githubUrl: 'https://github.com/Rajkumar-21/Agent-Framework-Samples',
      liveUrl: 'https://github.com/Rajkumar-21/Agent-Framework-Samples',
    },
    {
      title: 'Powershell Scripts Collection',
      description: 'Collection of useful Powershell scripts for automation and system management.',
      technologies: ['Powershell'],
      githubUrl: 'https://github.com/Rajkumar-21/PowerShell-Scripts',
      liveUrl: 'https://github.com/Rajkumar-21/PowerShell-Scripts',
    },
    {
      title: 'AI Agents Samples',
      description: 'Analytics dashboard for social media metrics with data visualization and reporting features.',
      technologies: ['Python', 'Agnos', 'Langchain', 'Agent frameworks'],
      githubUrl: 'https://github.com/Rajkumar-21/AI-Agents-Samples',
      liveUrl: 'https://github.com/Rajkumar-21/AI-Agents-Samples',
    },
    {
      title: 'Github2Markdown',
      description: 'Simple tool to convert GitHub repositories into markdown format for easy documentation.',
      technologies: ['Streamlit', 'Python', 'Git'],
      githubUrl: 'https://github.com/Rajkumar-21/Github2Markdown',
      liveUrl: 'https://github.com/Rajkumar-21/Github2Markdown',
    },
    {
      title: 'Mermaid Flow Builder',
      description: 'Mermaid Flow Builder is a web application that allows users to create and visualize flowcharts using Mermaid syntax.',
      technologies: ['VibeCoding','Typescript', 'HTML', 'JS'],
      githubUrl: 'https://github.com/Rajkumar-21/Mermaid-Flow-Builder',
      liveUrl: 'https://github.com/Rajkumar-21/Mermaid-Flow-Builder',
    },
    {
      title: 'Azure MCP Server',
      description: 'Azure MCP Server implementation for managing cloud resources and services.',
      technologies: ['Azure', 'Python', 'MCP', 'Agent Toolkit'],
      githubUrl: 'https://github.com/Rajkumar-21/azure-mcp-server',
      liveUrl: 'https://github.com/Rajkumar-21/azure-mcp-server',
    },
  ];

  useEffect(() => {
    const loadProjectImages = async () => {
      setLoading(true);
      
      const projectsWithLoadedImages = await Promise.all(
        projects.map(async (project) => {
          let imageUrl = getPlaceholderImage(project.title);

          // Try to fetch GitHub repository Open Graph image
          if (project.githubUrl) {
            const githubImage = await fetchGitHubRepoImage(project.githubUrl);
            if (githubImage) {
              imageUrl = githubImage;
            }
          }
          return {
            ...project,
            image: imageUrl
          };
        })
      );

      setProjectsWithImages(projectsWithLoadedImages);
      setLoading(false);
    };

    loadProjectImages();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="section-container bg-gray-50 dark:bg-gray-800">
        <h2 className="section-title">
          <FaCode className="inline-block mr-3 text-primary-600" />
          Featured Projects
        </h2>
        <div className="flex justify-center items-center py-20">
          <FaSpinner className="animate-spin text-primary-600 text-5xl" />
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="section-container bg-gray-50 dark:bg-gray-800">
      <h2 className="section-title">
        <FaCode className="inline-block mr-3 text-primary-600" />
        Featured Projects
      </h2>
      <p className="section-subtitle">
        A selection of projects showcasing my development skills and creativity
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsWithImages.map((project, index) => (
          <div
            key={index}
            className="card overflow-hidden animate-slide-up group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Project Image */}
            <div className="relative overflow-hidden h-48">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-800 p-3 rounded-full hover:bg-primary-600 hover:text-white transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-800 p-3 rounded-full hover:bg-primary-600 hover:text-white transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaExternalLinkAlt size={20} />
                </a>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="https://github.com/Rajkumar-21"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-2"
        >
          <FaGithub />
          View More on GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;
