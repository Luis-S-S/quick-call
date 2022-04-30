import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getJobsByUserId } from '../../../../services/jobs';
import JobListItem from '../../../JobListItem/JobListItem';
import LinkRound from '../../../LinkRound/LinkRound';
import './Jobs.scss';

export default function Jobs() {
  const { id } = useSelector((state) => state.user);
  const [jobsArray, setJobsArray] = useState([]);

  useEffect(async () => {
    const jobsResp = await getJobsByUserId(id);
    const response = await jobsResp.json();
    setJobsArray(response);
  }, []);

  return (
    <div className="dashboard-jobs">
      <h1 className="dashboard-jobs__title">Tus Trabajos</h1>
      {
      jobsArray.length > 0
        ? jobsArray.map((job) => (
          <JobListItem jobInfo={job} />
        ))
        : (
          <>
            <h1 className="dashboard-jobs--error">Actualmente no tienes trabajos pendientes</h1>
            <LinkRound link="/search">Encuentra a los mejores profesionales en QC</LinkRound>
          </>
        )
      }
    </div>
  );
}
