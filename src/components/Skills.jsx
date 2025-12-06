import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cloud Platforms & Certifications',
      skills: [
        { name: 'Azure (AZ-400, AZ-104, AZ-303)', level: 95 },
        { name: 'AWS (DOP-C02)', level: 90 },
        { name: 'Google Cloud (ACE)', level: 85 },
        { name: 'Terraform (Associate)', level: 90 },
      ],
    },
    {
      title: 'DevOps & CI/CD',
      skills: [
        { name: 'Azure DevOps', level: 95 },
        { name: 'GitHub Actions', level: 90 },
        { name: 'Jenkins', level: 85 },
        { name: 'GitLab CI', level: 80 },
        { name: 'Docker', level: 95 },
        { name: 'Kubernetes', level: 85 },
        { name: 'Ansible', level: 80 },
      ],
    },
    {
      title: 'GenAI & LLM Development',
      skills: [
        { name: 'Azure OpenAI', level: 95 },
        { name: 'Semantic Kernel', level: 90 },
        { name: 'Autogen', level: 90 },
        { name: 'LangChain', level: 85 },
        { name: 'FastAPI', level: 90 },
        { name: 'Streamlit', level: 85 },
        { name: 'MCP Server', level: 85 },
      ],
    },
    {
      title: 'Scripting & Automation',
      skills: [
        { name: 'PowerShell', level: 95 },
        { name: 'Python', level: 90 },
        { name: 'Bash', level: 85 },
        { name: 'Git', level: 95 },
      ],
    },
    {
      title: 'Monitoring & Observability',
      skills: [
        { name: 'Azure Monitor', level: 90 },
        { name: 'KQL Queries', level: 90 },
        { name: 'Prometheus', level: 80 },
        { name: 'Grafana', level: 80 },
        { name: 'ELK Stack', level: 75 },
      ],
    },
    {
      title: 'Azure Services & Networking',
      skills: [
        { name: 'Azure PaaS', level: 95 },
        { name: 'VNet & Firewalls', level: 90 },
        { name: 'NSG & Security', level: 90 },
        { name: 'Power Apps', level: 85 },
      ],
    }
  ];

  return (
    <section id="skills" className="section-container bg-white dark:bg-gray-900">
      <h2 className="section-title">Technical Skills</h2>
      <p className="section-subtitle">
        Multi-cloud certified DevOps & AI Engineer with expertise in Azure, AWS, GCP, and cutting-edge GenAI technologies
      </p>

      <div className="space-y-12">
        {skillCategories.map((category, categoryIndex) => (
          <div 
            key={categoryIndex}
            className="animate-slide-up"
            style={{ animationDelay: `${categoryIndex * 0.1}s` }}
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
              {category.title}
            </h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="card p-6 hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex flex-col items-center">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
                      {skill.name}
                    </h4>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                      <div
                        className="bg-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    
                    <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">Additional Expertise</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            'DevSecOps',
            'Infrastructure as Code',
            'Cost Optimization',
            'Hybrid Cloud',
            'VM Automation',
            'Azure Advisor',
            'Prompt Engineering',
            'Multi-Agent Systems',
            'ChromaDB',
            'Vector Databases',
            'REST API',
            'Microservices',
            'Agile/Scrum',
            'Configuration Management',
            'Network Security',
            'Pipeline Automation',
            'Cloud Migration',
            'Disaster Recovery',
          ].map((skill, index) => (
            <span
              key={index}
              className="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full font-medium hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-12 bg-gradient-to-r from-primary-600 to-blue-600 rounded-xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Key Achievements</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="text-4xl font-bold mb-2">3X</div>
            <p className="text-primary-100">User Recognition Awards</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">95%</div>
            <p className="text-primary-100">Deployment Time Reduction</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">35%</div>
            <p className="text-primary-100">Cloud Cost Savings</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
