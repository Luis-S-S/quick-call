import React from 'react';

function Form() {
  return (
    <>
      <div className="name">
        <img src="images/user.png" alt="user" />
        {' '}
        Full name
      </div>
      <div className="name">
        <img src="images/mensaje.png" alt="mensaje" />
        {' '}
        michelle@example.com
      </div>
      <div className="name">
        <img src="images/password.png" alt="password" />
        {' '}
        Password
      </div>
      <div className="name">
        <img src="images/password.png" alt="password" />
        {' '}
        Repeat password
      </div>
      <input type="text" />
    </>
  );
}

export default Form;
