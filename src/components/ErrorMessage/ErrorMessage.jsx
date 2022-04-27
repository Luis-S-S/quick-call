import PropTypes from 'prop-types';
import './ErrorMessage.scss';

function ErrorMessage({ code, message }) {
  return (
    <div className="error-page">
      <div>{code}</div>
      <div className="txt">
        {message}
        <span className="blink">_</span>
      </div>
    </div>
  );
}

ErrorMessage.propTypes = {
  code: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
