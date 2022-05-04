import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonRound from '../ButtonRound/ButtonRound';
import Navbar from '../Navbar/NavigationBar';
import './ErrorMessage.scss';

function ErrorMessage({ code, message }) {
  const navigation = useNavigate();
  return (
    <>
      <Navbar />
      <div className="error-message">
        <div className="error-page">
          <div>{code}</div>
          <div className="txt">
            {message}
            <span className="blink">_</span>
          </div>
          <div className="error-button__container">
            <ButtonRound isSubmit={false} onClickFunction={() => navigation(-1)}>
              Volver
            </ButtonRound>
            {code === 401 && (
              <ButtonRound isSubmit={false} onClickFunction={() => navigation('/login')}>
                Iniciar Sesión
              </ButtonRound>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

ErrorMessage.propTypes = {
  code: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
