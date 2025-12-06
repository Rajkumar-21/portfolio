import React from 'react';
import { FaUser, FaLightbulb, FaHeart } from 'react-icons/fa';

const About = () => {
  const highlights = [
    {
      icon: <FaUser className="text-3xl text-primary-600" />,
      title: 'Who I Am',
      description: 'A passionate developer with a love for clean code and innovative solutions, with DevOps experience.',
    },
    {
      icon: <FaLightbulb className="text-3xl text-primary-600" />,
      title: 'What I Do',
      description: 'Building modern web applications with Python, and cloud technologies developments and automations.',
    },
    {
      icon: <FaHeart className="text-3xl text-primary-600" />,
      title: 'What I Love',
      description: 'Continuous learning, problem-solving, and developing AI Agent Solutions.',
    },
  ];

  return (
    <section id="about" className="section-container bg-white dark:bg-gray-900">
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">
        Get to know more about my background, skills, and passion for technology
      </p>
      
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="card p-6 text-center animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>
      
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          I'm a full-stack developer with a strong focus on creating efficient, scalable, and 
          user-friendly applications. With experience in modern web technologies and cloud platforms, 
          I continuously strive to expand my knowledge and stay current with industry trends.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          My journey in tech is driven by curiosity and the desire to solve real-world problems 
          through code. I believe in writing clean, maintainable code and following best practices 
          to deliver high-quality solutions.
        </p>
      </div>
    </section>
  );
};

export default About;
