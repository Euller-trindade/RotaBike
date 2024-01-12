import React from "react";
import { MdOutlineDirectionsBike, MdEmail, MdPhone } from "react-icons/md";
import "./style.css";
const Footer = () => {
  return (
    <footer className="footer">
      <h2>
        {" "}
        RotaBike <MdOutlineDirectionsBike />
      </h2>

      <div className="divs__footer">
        <h3>Contato</h3>
        <p>
          <MdEmail /> eullertrindade2000@gmail.com
        </p>
        <p>
          <MdPhone /> (79) 99843-8276
        </p>
      </div>
      <div className="divs__footer">
        <h3>Outras informações</h3>
        <p>Termos e condições</p>
        <p>Política de privacidade</p>
      </div>
    </footer>
  );
};

export default Footer;
