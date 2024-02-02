import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import data from "../../data";
import { BikeContext } from "../../context/BikeContext";
import { BsCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Loading from "../../components/loading";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const Bicicletas = () => {
  const [loading, setLoading] = useState(true);

  const {
    handleCart,
    handleValue,
    openAlert,
    setOpenAlert,
    severity,
    message,
    setFormActive,
  } = useContext(BikeContext);

  const navigate = useNavigate();
  const detailsBike = (id) => {
    navigate(`/details/${id}`);
  };
  const handleClose = () => {
    setOpenAlert(false);
  };
  const handleBtnComprar = (bike) => {
    navigate("/cart");
    handleCart(bike);
    setOpenAlert(false);
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    setFormActive(false);
  }, []);

  return (
    <div className="container__bicicletas">
      {loading ? (
        <Loading />
      ) : (
        <motion.div
          initial={{ width: 0, height: 0, opacity: 0 }}
          animate={{ width: "100%", height: "100%", opacity: 1 }}
          transition={{ duration: 1 }}
          className="container__card"
        >
          {data.map((bike) => (
            <div key={bike.id} className="card">
              <div onClick={() => detailsBike(bike.id)} className="card__div">
                <img src={bike.foto} alt={bike.nome} draggable={false} />
                <h1>{bike.nome}</h1>
                <p className="price">
                  R$
                  {parseFloat(bike.valor).toLocaleString("pt-BR", {
                    maximumFractionDigits: 2,
                  })}
                  ,00
                  <br />
                </p>
                <p className="parcelas">
                  Em até 6x R${handleValue(bike.valor)},00
                </p>
                <h4>Frete grátis</h4>
              </div>
              <div className="card__button">
                <button
                  className="btn__comprar"
                  onClick={() => handleBtnComprar(bike)}
                >
                  <Link>Comprar</Link>
                </button>
                <button className="btn_cart" onClick={() => handleCart(bike)}>
                  <BsCartPlusFill />
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      )}
      <Snackbar
        open={openAlert}
        autoHideDuration={1000}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Bicicletas;
