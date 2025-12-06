import React, { useState, useEffect } from 'react';
import { FaAward, FaSpinner, FaExternalLinkAlt, FaCalendar, FaBuilding } from 'react-icons/fa';
import { fetchCredlyBadges, formatDate } from '../services/credlyService';

const Certifications = () => {
  const [badges, setBadges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBadge, setSelectedBadge] = useState(null);

  useEffect(() => {
    const loadBadges = async () => {
      try {
        setLoading(true);
        const data = await fetchCredlyBadges();
        setBadges(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadBadges();
  }, []);

  if (loading) {
    return (
      <section id="certifications" className="section-container bg-gray-50 dark:bg-gray-800">
        <h2 className="section-title">Certifications</h2>
        <div className="flex justify-center items-center py-20">
          <FaSpinner className="animate-spin text-primary-600 text-5xl" />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="certifications" className="section-container bg-gray-50 dark:bg-gray-800">
        <h2 className="section-title">Certifications</h2>
        <div className="max-w-2xl mx-auto text-center py-20">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <p className="text-red-700 text-lg">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 btn-primary"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="certifications" className="section-container bg-gray-50 dark:bg-gray-800">
      <h2 className="section-title">
        <FaAward className="inline-block mr-3 text-primary-600" />
        Certifications
      </h2>
      <p className="section-subtitle">
        Professional certifications and badges earned through continuous learning
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {badges.map((badge, index) => (
          <div
            key={badge.id}
            className="card p-6 animate-slide-up hover:scale-105 transition-transform duration-300 cursor-pointer"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => setSelectedBadge(badge)}
          >
            {/* Badge Image */}
            <div className="flex justify-center mb-4">
              <img
                src={badge.imageUrl}
                alt={badge.name}
                className="w-32 h-32 object-contain"
                loading="lazy"
              />
            </div>

            {/* Badge Info */}
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2 text-center line-clamp-2">
              {badge.name}
            </h3>

            <div className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-400 mb-2">
              <FaBuilding className="mr-2" />
              <span className="line-clamp-1">{badge.issuer}</span>
            </div>

            <div className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-400 mb-4">
              <FaCalendar className="mr-2" />
              <span>{formatDate(badge.issuedAt)}</span>
            </div>

            {/* Skills Tags */}
            {badge.skills.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4 justify-center">
                {badge.skills.slice(0, 3).map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
                {badge.skills.length > 3 && (
                  <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                    +{badge.skills.length - 3} more
                  </span>
                )}
              </div>
            )}

            {/* View Badge Link */}
            <a
              href={badge.publicUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm"
              onClick={(e) => e.stopPropagation()}
            >
              View Badge
              <FaExternalLinkAlt className="ml-2" />
            </a>
          </div>
        ))}
      </div>

      {/* Badge Detail Modal */}
      {selectedBadge && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedBadge(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{selectedBadge.name}</h3>
              <button
                onClick={() => setSelectedBadge(null)}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="flex justify-center mb-6">
              <img
                src={selectedBadge.imageUrl}
                alt={selectedBadge.name}
                className="w-48 h-48 object-contain"
              />
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Issued By</p>
                <p className="text-lg font-medium text-gray-800 dark:text-gray-100">{selectedBadge.issuer}</p>
              </div>

              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Issued Date</p>
                <p className="text-lg font-medium text-gray-800 dark:text-gray-100">{formatDate(selectedBadge.issuedAt)}</p>
              </div>

              {selectedBadge.expiresAt && (
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Expires</p>
                  <p className="text-lg font-medium text-gray-800 dark:text-gray-100">{formatDate(selectedBadge.expiresAt)}</p>
                </div>
              )}

              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Description</p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{selectedBadge.description}</p>
              </div>

              {selectedBadge.skills.length > 0 && (
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedBadge.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-4">
                <a
                  href={selectedBadge.publicUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center inline-flex items-center justify-center gap-2"
                >
                  View on Credly
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
