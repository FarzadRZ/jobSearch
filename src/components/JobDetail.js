import React from "react";
import Details from "../data/jobsDetail";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function JobDetail() {
  let { id } = useParams();
  let filterJobId = Details.filter(obj => {
    return obj.jobId === id;
  });
  let job = filterJobId[0];
  return (
    <div className="right-side">
      <div className="job-detail">
        <Link to="/" className="exit">
          <span className="exit-line"></span>
          <span className="exit-line"></span>
        </Link>
        <h2 className="jobDetail-title">{job.positionName}</h2>
        <span className="jobDetail-name">{job.companyName}</span>
        <span className="jobDetail-duration">{job.durationDayText}</span>
        <p>{job.description}</p>
        <strong>{job.address}</strong>
      </div>
      <div></div>
    </div>
  );
}

export default JobDetail;
