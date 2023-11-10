// JobCard.js
import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{job.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{job.company}</h6>
        <p className="card-text">{job.location}</p>
      </div>
    </div>
  );
};

export default JobCard;
