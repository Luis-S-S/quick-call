import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getJobById } from '../../services/jobs';
import NavBar from '../../components/Navbar/NavigationBar';
import Footer from '../../components/Footer/Footer';
import JobDetail from '../../components/JobDetail/JobDetail';
import FormProfessionals from '../../components/FormUser/FormProfessionals';
import './Job.scss';

export default function Job() {
  const role = useSelector((state) => state.user.role);
  const [job, setJob] = useState({});
  const jobId = useParams().id;

  useEffect(async () => {
    const jobs = await getJobById(jobId);
    const response = await jobs.json();
    setJob(response);
  }, []);

  return (
    <>
      <NavBar />
      <div className="job__container">
        {
        role === 'professional' && (job.status === 'Oferta' || job.status === 'Pendiente pago')
          ? (
            <FormProfessionals job={job} id={jobId} setJob={setJob} />
          )
          : (
            <JobDetail job={job} />
          )
      }
      </div>
      <Footer />
    </>
  );
}
