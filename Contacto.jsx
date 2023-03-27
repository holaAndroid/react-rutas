import React from "react";

const Contacto = () => {
  return (
    <div className="contacto2">
      <h1>Nuestro Contacto</h1>
      <br />
      <br />
      <ul>
        <li>
          <a className="movil" href="tel:+34625146235">
            {" "}
            Móvil
          </a>
        </li>
        <br />
        <li>
          <a className="email" href="mailto:aprediendo-react.com">
            {" "}
            E-mail
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contacto;
