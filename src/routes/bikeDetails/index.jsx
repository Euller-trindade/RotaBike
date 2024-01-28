import React, { useContext } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import data from "../../data";
import { BikeContext } from "../../context/BikeContext";
import { useState } from "react";
import { BsDashLg, BsPlusLg } from "react-icons/bs";
import ImageZoom from "react-image-zooom";
import Checkout from "../../components/checkout";

const BikeDetails = () => {
  const { id } = useParams();
  const selectedBike = data.find((bike) => bike.id === parseInt(id));
  const [img, setImage] = useState(
    selectedBike.foto || selectedBike.foto2 || ""
  );
  const [quantidade, setQuantidade] = useState(1);
  const { handleValue, formActive, setFormActive } = useContext(BikeContext);
  if (!selectedBike) {
    return <p>Objeto não encontrado.</p>;
  }
  return (
    <div className="container__details">
      {formActive ? (
        <Checkout />
      ) : (
        <div className="details">
          <div className="images">
            <div className="mini__img">
              <img
                src={selectedBike.foto}
                alt={selectedBike.foto}
                onClick={() => setImage(selectedBike.foto)}
                draggable={false}
              />
              <img
                src={selectedBike.foto2}
                alt={selectedBike.foto2}
                onClick={() => setImage(selectedBike.foto2)}
                draggable={false}
              />
            </div>
            <ImageZoom
              src={img}
              alt={selectedBike.nome}
              zoom="300"
              className="details__img "
            />
          </div>
          <section className="details__info">
            <h1>{selectedBike.nome}</h1>
            <div className="vendas__estoque">
              <p
                className="estoque"
                style={
                  selectedBike.estoque ? { color: "#238d00" } : { color: "red" }
                }
              >
                {selectedBike.estoque ? "Em estoque" : "Indisponível"}
              </p>
              <p className="vendas">Vendas: {selectedBike.vendas}</p>
            </div>
            <p className="details__total">
              R$
              {parseFloat(selectedBike.valor).toLocaleString("pt-BR", {
                maximumFractionDigits: 2,
              })}
              ,00
            </p>
            <p className="details__parcelas">
              Em até 6x R$ {handleValue(selectedBike.valor)},00
            </p>
            <div className="devolucao">
              <h3>Devolução grátis</h3>
              <p>
                Você tem <strong>30 dias</strong> a partir da data de
                recebimento.
              </p>
            </div>
            <div className="details__comprar">
              <div className="details__quantidade">
                <p>{quantidade}</p>
                <div>
                  <button
                    onClick={() =>
                      setQuantidade(quantidade <= 1 ? 1 : quantidade - 1)
                    }
                  >
                    <BsDashLg />
                  </button>
                  <button onClick={() => setQuantidade(quantidade + 1)}>
                    <BsPlusLg />
                  </button>
                </div>
              </div>
              <button
                className="details__btnComprar"
                onClick={() => setFormActive(true)}
              >
                Comprar
              </button>
            </div>
          </section>
          <div className="descricao">
            <h2>Descrição do Produto</h2>
            <p>{selectedBike.descricao}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BikeDetails;
