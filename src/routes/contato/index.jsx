import React, { useState } from "react";
import { BsSendCheckFill } from "react-icons/bs";
import "./style.css";
import whatsapp from "../../assets/whatsapp.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import facebook from "../../assets/facebook.png";
import contactForm from "../../assets/contact form.jpg";
import { motion } from "framer-motion";
const Contato = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const sendMessage = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      alert("preencha todos os campos!");
    } else {
      setSent(true);
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div>
      {sent && (
        <div className="container__sent">
          <div className="sent">
            <h1>Mensagem enviada</h1>
            <p>
              Obrigado por entrar em contato! Estamos aqui para ajudar e
              ansiosos para atender às suas necessidades.
            </p>
            <div className="close">
              <button onClick={() => setSent(false)}>Fechar</button>
            </div>
          </div>
        </div>
      )}
      <div className="container__contato">
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="form"
          onSubmit={sendMessage}
        >
          <div className="form__content">
            <h1>Contate-nos</h1>
            <div className="nome__email">
              <div className="nome">
                <input
                  type="text"
                  name="name"
                  placeholder="Nome"
                  autoComplete="off"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="email">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="mensagem">
              <textarea
                name="message"
                cols="30"
                rows="10"
                placeholder="Digite sua mensagem"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="send">
              Enviar <BsSendCheckFill />
            </button>
          </div>
          <img src={contactForm} alt="" className="background" />
        </motion.form>
        <div className="redes">
          <img src={whatsapp} alt="" />
          <img src={instagram} alt="" />
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contato;
