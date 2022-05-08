import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';

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
            <div className="flex_job">
              <FormProfessionals job={job} id={jobId} setJob={setJob} />
              <div className="conditions__Clients">
                <h3>Imagenes de trabajo de Cliente</h3>
                <Carousel className="Carousel">
                  {(job.evidenceClients).map((evidence) => (<img src={evidence.value} alt="img" />))}
                </Carousel>
                <fieldset>
                  <legend>Condiciones Cliente</legend>
                  {job.conditionsClients?.map((todo, index) => (
                    <div className="section1">
                      <label htmlFor={todo.name}>{`${index + 1} -`}</label>
                      <label htmlFor={todo.name}>{todo.name}</label>
                    </div>
                  ))}
                </fieldset>
              </div>
            </div>
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
