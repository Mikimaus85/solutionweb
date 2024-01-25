// JobListings.js

import React, { useState, useEffect } from 'react';
import Filter from './Filter';
import JobCard from './JobCard';
import './styles/JobListings.css';  // Importiere das CSS

const JobListings = () => {
  const [jobData, setJobData] = useState([]);
  const [filters, setFilters] = useState({
    role: '',
    level: '',
    languages: [],
    tools: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/path/to/data.json');
        const data = await response.json();
        setJobData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (category, value) => {
    setFilters({ ...filters, [category]: value });
  };

  const filteredJobs = jobData.filter((job) => {
    // Implementiere deine Filterlogik basierend auf den Filtern
    return (
      (filters.role === '' || job.role === filters.role) &&
      (filters.level === '' || job.level === filters.level) &&
      (filters.languages.length === 0 || filters.languages.every(lang => job.languages.includes(lang))) &&
      (filters.tools.length === 0 || filters.tools.every(tool => job.tools.includes(tool)))
    );
  });

  return (
    <div>
      <Filter filters={filters} onFilterChange={handleFilterChange} />
      <div className="job-listings">
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobListings;