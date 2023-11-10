// JobList.js
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import JobCard from './JobCard';

const JobList = ({ jobs }) => {
  return (
    <div className="row">
      {jobs.map((job) => (
        <div key={job.id} className="col-md-4 mb-4">
          <JobCard job={job} />
        </div>
      ))}
    </div>
  );
};

export default JobList;
