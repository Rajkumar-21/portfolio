import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Build email body with sender's email and message only
    const emailBody = `Sender: ${formData.email}

${formData.message}`.trim();
    
    // Create mailto link to your email with subject and body
    const mailtoLink = `mailto:rajkumar218.r@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl text-primary-600" />,
      title: 'Email',
      value: 'rajkumar218.r@gmail.com',
      link: 'mailto:rajkumar218.r@gmail.com',
    },
    {
      icon: <FaPhone className="text-2xl text-primary-600" />,
      title: 'Phone',
      value: '+91 8220345151',
      link: 'tel:+918220345151',
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-primary-600" />,
      title: 'Location',
      value: 'Palakkad, India',
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="text-2xl" />,
      name: 'GitHub',
      url: 'https://github.com/Rajkumar-21',
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rajkumarravi218/',
    },
  ];

  return (
    <section id="contact" className="section-container bg-white">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">
        Feel free to reach out for collaborations, opportunities, or just to say hello!
      </p>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <div>{info.icon}</div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{info.title}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-800 dark:text-gray-100 font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-800 dark:text-gray-100 font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Connect With Me
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-600 text-white p-4 rounded-lg hover:bg-primary-700 transition-colors"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Send Me a Message
          </h3>
          
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <p className="text-green-700 text-lg font-medium">
                Thank you for your message! I'll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent bg-white text-gray-900"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent bg-white text-gray-900"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent bg-white text-gray-900"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent resize-none bg-white text-gray-900"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
