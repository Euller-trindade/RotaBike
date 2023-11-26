import { createContext, useEffect, useState } from "react";
import { getItem, setItem } from "../services/localStorage";

export const BikeContext = createContext();

export const BikeProvider = ({ children }) => {
  const [itemCart, setItemCart] = useState(getItem("carrinho") || []);
  const handleValue = (valor) => {
    const valorNumero = parseFloat(valor.replace(",", "."));
    let resultado = Math.ceil(valorNumero / 6);
    const resultadoFinal = resultado.toLocaleString("pt-BR", {
      maximumFractionDigits: 2,
    });
    return resultadoFinal;
  };

  const handleCart = (obj) => {
    if (itemCart.some((item) => item.id === obj.id)) {
      alert("Este item já existe em seu carrinho!");
      return;
    } else {
      setItemCart([...itemCart, obj]);
      setItem("carrinho", [...itemCart, obj]);
    }
  };
  return (
    <BikeContext.Provider
      value={{
        itemCart,
        setItemCart,
        handleCart,
        handleValue,
      }}
    >
      {children}
    </BikeContext.Provider>
  );
};
