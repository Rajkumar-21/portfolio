import React from 'react';
import { FaCode, FaRocket } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 pt-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center mb-6 animate-float shadow-lg">
              <FaCode className="text-white text-5xl" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Hi, I'm <span className="text-primary-600 dark:text-primary-400">Rajkumar</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            DevOps Engineer | Cloud Enthusiast | AI Engineer
          </p>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate about building scalable cloud infrastructure and exploring cutting-edge AI technologies.
            Certified professional with expertise in modern DevOps practices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              <FaRocket />
              View My Work
            </a>
            <a
              href="#contact"
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
