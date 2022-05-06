/* eslint-disable max-len */
import PropTypes from 'prop-types';

export default function DetailsClients({ job }) {
  return (
    <>
      <label htmlFor="title">Nombre de reforma</label>
      <label htmlFor="title">{job.title}</label>
      <label htmlFor="objective">Breve descripcion</label>
      <label htmlFor="objective">{job.objective}</label>
      <legend>Condiciones profesional</legend>
      <legend>Condiciones Cliente</legend>
      {job.conditionsClients?.map((todo) => (
        <div className="section1">
          <label htmlFor={todo.name}>{todo.name}</label>
        </div>
      ))}
    </>
  );
}
DetailsClients.propTypes = {
  job: PropTypes.shape({
    title: PropTypes.string,
    objective: PropTypes.string,
    conditionsClients: PropTypes.arrayOf(PropTypes.string),
    status: PropTypes.string,
    amount: PropTypes.number,
  }).isRequired,
  id: PropTypes.string.isRequired,
  setJob: PropTypes.func.isRequired,
};
