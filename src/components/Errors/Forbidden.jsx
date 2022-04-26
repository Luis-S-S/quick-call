import './Forbidden.scss';

function Forbidden() {
  return (
    <div className="forbidden">
      <div>403</div>
      <div className="txt">
        Forbidden
        <span className="blink">_</span>
      </div>
    </div>
  );
}

export default Forbidden;
