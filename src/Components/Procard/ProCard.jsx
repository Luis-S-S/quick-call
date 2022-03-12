import React from "react";
import './ProCard.scss';

export const ProCard = () => {
  return (
    <>
      <div class="card">
        <div class="image">
          <img src="pro/constructor.jpeg" alt="constructor" />
        </div>
        <div class="details">
          <div class="center">
            <h1>Pepito Perez<br/><span>Constructor</span></h1>
            <p>Lorem ipsum is simple dummy text on the printing and typesetting industry.</p>
            <ul>
              <li><a href="#"><i class="fa fa-commenting-o" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-user" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-half-o" aria-hidden="true"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
