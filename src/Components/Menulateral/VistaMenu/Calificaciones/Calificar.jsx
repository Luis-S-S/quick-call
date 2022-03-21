import { useState } from 'react';

function Signup() {
  const [form, setForm] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const datatosend = {
    //   ...form, profile: 'imagen.png',
    // };
    await createUsuarios(form);
    setForm({});
    document.querySelector('form').reset();
  };

  return (
    <div className="login">
      <div className="texto">
        <span className="titulo_register">Register</span>
        <span className="texto_register">Create your new account</span>
      </div>
      <form className="formulario" onSubmit={handleSubmit}>
        <input name="name" placeholder="Full name" type="text" onChange={handleChange} />
        <input name="email" placeholder="Michelle@example.com" type="email" onChange={handleChange} />
        <input name="password" placeholder="Password" type="password" onChange={handleChange} />
        <input name="password2" placeholder="Repeat password" type="password" onChange={handleChange} />
        <button className="boton" type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Signup;
