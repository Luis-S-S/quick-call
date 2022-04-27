import PropTypes from 'prop-types';
import './ErrorMessage.scss';
import Navbar from '../Navbar/NavigationBar';

function ErrorMessage({ code, message }) {
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
