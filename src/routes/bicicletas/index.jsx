import React from "react";
import "./style.css";
import { AiFillHeart } from "react-icons/ai";
import data from "../../data";

const Bicicletas = () => {
  const handleValue = (valor) => {
    const valorNumero = parseFloat(valor.replace(",", "."));
    const resultado = valorNumero / 6;
    const resultadoSting = String(resultado.toFixed(2));
    return resultadoSting.replace(".", ",");
  };
  return (
    <div className="container__bicicletas">
      <div className="container__card">
        {data.map((bike) => (
          <div key={bike.id} className="card">
            <AiFillHeart className="heart" />
            <img src={bike.foto} alt="" />
            <h1>{bike.nome}</h1>
            <p className="price">
              R${bike.valor} <br />
            </p>
            <p className="parcelas">Em até 6x de {handleValue(bike.valor)}</p>
            <h4>Frete grátis</h4>
            <button>Adicionar ao carrinho</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bicicletas;
