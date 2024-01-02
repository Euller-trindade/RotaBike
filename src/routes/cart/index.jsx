import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import { motion } from "framer-motion";
import { BikeContext } from "../../context/BikeContext";
import {
  MdOutlineFormatListNumbered,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { BsDashLg, BsPlusLg, BsEmojiFrown, BsArrowLeft } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { setItem } from "../../services/localStorage";
import { useNavigate } from "react-router-dom";
import Checkout from "../../components/checkout";

const Cart = () => {
  const [formActive, setFormActive] = useState(false);
  const { itemCart, setItemCart } = useContext(BikeContext);
  const [total, setTotal] = useState([]);
  const navigate = useNavigate();

  const handleValueTotal = (valor, quantidade) => {
    const valorNumero = parseFloat(valor.replace(",", "."));
    const valorTotal = valorNumero * quantidade;
    const resultadoFinal = valorTotal.toLocaleString("pt-BR", {
      maximumFractionDigits: 2,
    });
    return resultadoFinal;
  };
  const removeItem = (obj) => {
    const element = itemCart.find((e) => e.id === obj.id);
    if (element) {
      const cartAtualizado = itemCart.filter((e) => e.id !== obj.id);
      setItemCart(cartAtualizado);
      setItem("carrinho", cartAtualizado);
    }
  };

  const handleQuantidade = (id, newQuantidade) => {
    const atuArray = itemCart.map((item) =>
      item.id === id ? { ...item, quantidade: newQuantidade } : item
    );
    setItemCart(atuArray);
    setItem("carrinho", atuArray);
  };
  const calcularTotal = () => {
    let totalCalculado = 0;
    itemCart.forEach((element) => {
      const valorTotalItem = parseFloat(
        handleValueTotal(element.valor, element.quantidade).replace("R$", "")
      );
      totalCalculado += valorTotalItem;
    });
    return totalCalculado.toFixed(3).toLocaleString("pt-BR", {
      maximumFractionDigits: 2,
    });
  };

  useEffect(() => {
    const totalCalculado = calcularTotal();
    setTotal(totalCalculado);
  }, [itemCart]);

  return (
    <div className="container__cart">
      <h1>
        <MdOutlineShoppingCart /> Carrinho de compras
      </h1>
      {formActive ? (
        <Checkout setFormActive={setFormActive} />
      ) : itemCart.length === 0 ? (
        <div className="not__items">
          <h2>
            Você não tem itens em seu carrinho <BsEmojiFrown />
          </h2>
          <button
            onClick={() => {
              navigate("/bicicletas");
            }}
          >
            <BsArrowLeft /> Ir fazer compras
          </button>
        </div>
      ) : (
        <div className="container__info_resumo">
          <motion.table
            className="container__info_cart"
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <thead>
              <tr className="table__header">
                <th></th>
                <th>Produto</th>
                <th>Quantidade</th>
                <th>Preço</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody className="primeira__section">
              {itemCart.map((item, index) => (
                <tr className="item" key={index}>
                  <th className="img__cart">
                    <img src={item.foto} alt="imagem do produto" />
                  </th>
                  <div className="info__mobile">
                    <th>
                      <p>{item.nome}</p>
                    </th>
                    <th>
                      <div className="quantidade">
                        <button
                          onClick={() =>
                            handleQuantidade(
                              item.id,
                              item.quantidade <= 1 ? 1 : item.quantidade - 1
                            )
                          }
                        >
                          <BsDashLg />
                        </button>
                        <p>{item.quantidade}</p>
                        <button
                          onClick={() =>
                            handleQuantidade(item.id, item.quantidade + 1)
                          }
                        >
                          <BsPlusLg />
                        </button>
                      </div>
                    </th>
                    <th className="valor">
                      <p>
                        R$
                        {parseFloat(item.valor).toLocaleString("pt-BR")}
                        ,00
                      </p>
                    </th>
                    <th>
                      <p>
                        R$
                        {handleValueTotal(item.valor, item.quantidade)}
                        ,00
                      </p>
                    </th>
                  </div>
                  <th className="del" onClick={() => removeItem(item)}>
                    <AiFillCloseCircle />
                  </th>
                </tr>
              ))}
            </tbody>
          </motion.table>
          <motion.div
            className="resumo"
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="resumo__compra">resumo da compra</p>
            <div className="resumo__body">
              <div>
                <p>subtotal</p> <p>frete</p>
              </div>
              <div>
                <p className="total__p">R${total},00</p>
                <p className=" gratis">grátis</p>
              </div>
            </div>
            <div className="total">
              <p>total</p>
              <p className="total__p">R${total},00</p>
            </div>
            <button onClick={() => setFormActive(true)}>
              finalizar compra
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Cart;
