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
  const { handleCart, handleValue } = useContext(BikeContext);
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
          initial={{ y: 1000 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          className="container__card"
        >
          {data.map((bike) => (
            <div key={bike.id} className="card">
              <img src={bike.foto} alt="" />
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
              <div className="card__button">
                <button>
                  <Link to={"/cart"}>Comprar</Link>
                </button>
                <button onClick={() => handleCart(bike)}>
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
