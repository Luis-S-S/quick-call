import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getJobById } from '../../services/jobs';
import NavBar from '../../components/Navbar/NavigationBar';
import Footer from '../../components/Footer/Footer';
import FormProfessionals from '../../components/FormUser/FormProfessionals';
import './Job.scss';

export default function Job() {
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
      {
        job.status === 'En progreso' || job.status === 'Finalizado' || job.status === 'Cerrado'
          ? (
            <h1>Ya esta pago</h1>
          )
          : (
            <div className="job__container">
              <div className="job-offer">Lo que mando el cliente</div>
              <FormProfessionals job={job} id={jobId} setJob={setJob} />
            </div>
          )
      }
      <Footer />
    </>
  );
}
