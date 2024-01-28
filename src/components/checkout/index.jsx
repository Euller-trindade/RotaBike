import React, { useContext, useState } from "react";
import { FaPix, FaRegCreditCard, FaBarcode } from "react-icons/fa6";
import { motion } from "framer-motion";
import "./style.css";
import { BikeContext } from "../../context/BikeContext";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const Checkout = () => {
  const [botaoAtivo, setBotaoAtivo] = useState(null);
  const {
    message,
    severity,
    openAlert,
    setOpenAlert,
    checkoutAlert,
    setFormActive,
  } = useContext(BikeContext);
  const handleBotaoAtivo = (botao) => {
    if (botao === botaoAtivo) {
      setBotaoAtivo(null);
    } else {
      setBotaoAtivo(botao);
    }
  };
  const handleConfirmarPagamento = (e) => {
    e.preventDefault();
    if (botaoAtivo !== null) {
      checkoutAlert("success");
      setTimeout(() => {
        setFormActive(false);
        setOpenAlert(false);
      }, 3000);
    } else {
      checkoutAlert("warning");
    }
  };

  return (
    <motion.form
      onSubmit={handleConfirmarPagamento}
      className="checkout"
      initial={{ y: 1000, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container__campos">
        <input type="text" placeholder="Nome Completo" required />
      </div>
      <div className="container__campos">
        <input type="email" placeholder="Email" required />
      </div>
      <div className="container__campos">
        <input type="text" placeholder="Estado" required />
      </div>
      <div className="container__campos">
        <input type="text" placeholder="Cidade" required />
      </div>
      <div className="container__campos">
        <input type="text" placeholder="Barrio" required />
      </div>
      <div className="container__campos">
        <input type="text" placeholder="Rua" required />
      </div>
      <div className="container__campos">
        <input type="number" placeholder="Número " required />
      </div>
      <div className="container__campos">
        <input type="text" placeholder="Complemeto" required />
      </div>
      <div className="formas__pagamentos">
        <h2>Formas de pagamento</h2>
        <div className="pagamentos">
          <button
            type="button"
            onClick={() => handleBotaoAtivo("pix")}
            className={botaoAtivo === "pix" ? "active" : ""}
          >
            <FaPix className="pix" /> Pix
          </button>
          <button
            type="button"
            onClick={() => handleBotaoAtivo("cartao")}
            className={botaoAtivo === "cartao" ? "active" : ""}
          >
            <FaRegCreditCard className="cartao" /> Cartão de Crédito
          </button>
          <button
            type="button"
            onClick={() => handleBotaoAtivo("boleto")}
            className={botaoAtivo === "boleto" ? "active" : ""}
          >
            <FaBarcode /> Boleto
          </button>
        </div>
      </div>
      <div className="pagamento__footer">
        <button
          className="cancelar"
          type="button"
          onClick={() => setFormActive(false)}
        >
          Cancelar
        </button>
        <button className="confirmar" type="submit">
          Confirmar Pagamento
        </button>
      </div>
      <Snackbar
        open={openAlert}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        onClose={() => setOpenAlert(false)}
      >
        <Alert onClose={() => setOpenAlert(false)} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </motion.form>
  );
};

export default Checkout;
