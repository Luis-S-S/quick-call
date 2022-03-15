import './ProCard.scss';

function ProCard() {
  return (
    <div className="procard">
      <div className="card">
        <div className="image">
          <img src="pro/constructor.jpeg" alt="constructor" />
        </div>
        <div className="details">
          <div className="center">
            <h1>
              Pepito Perez
              <br />
              <span>Constructor</span>
            </h1>
            <p>Lorem ipsum is simple dummy text on the printing and typesetting industry.</p>
            <ul>
              <li><a href="#"><i className="fa fa-commenting-o" aria-hidden="true" /></a></li>
              <li><a href="#"><i className="fa fa-user" aria-hidden="true" /></a></li>
              <li>
                <a href="#">
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star-half-o" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProCard;
