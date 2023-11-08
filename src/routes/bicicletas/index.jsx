import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import data from "../../data";
import { BikeContext } from "../../context/BikeContext";
import { BsCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Loading from "../../components/loading";

const Bicicletas = () => {
  const [loading, setLoading] = useState(true);
  const { handleCart } = useContext(BikeContext);
  const handleValue = (valor) => {
    const valorNumero = parseFloat(valor.replace(",", "."));
    const resultado = valorNumero / 6;
    const resultadoSting = String(resultado.toFixed(2));
    return resultadoSting.replace(".", ",");
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="container__bicicletas">
      {loading ? (
        <Loading />
      ) : (
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 30, opacity: 1 }}
          transition={{ duration: 1 }}
          className="container__card"
        >
          {data.map((bike) => (
            <div key={bike.id} className="card">
              <img src={bike.foto} alt="" />
              <h1>{bike.nome}</h1>
              <p className="price">
                R${bike.valor} <br />
              </p>
              <p className="parcelas">Em até 6x de {handleValue(bike.valor)}</p>
              <h4>Frete grátis</h4>
              <div className="card__button">
                <button>
                  <Link to={"/cart"}>Comprar</Link>
                </button>
                <button onClick={handleCart}>
                  <BsCartPlusFill />
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Bicicletas;
