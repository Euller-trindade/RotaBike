import { createContext, useState } from "react";
import { getItem, setItem } from "../services/localStorage";

export const BikeContext = createContext();

export const BikeProvider = ({ children }) => {
  const [itemCart, setItemCart] = useState(getItem("carrinho") || []);
  const [openAlert, setOpenAlert] = useState(false);
  const [severity, setSeverity] = useState("");
  const [message, setMessage] = useState("");

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
      setOpenAlert(true);
      setSeverity("info");
      setMessage("Este item já existe em seu carrinho!");
      return;
    } else {
      setItemCart([...itemCart, obj]);
      setItem("carrinho", [...itemCart, obj]);
      setOpenAlert(true);
      setSeverity("success");
      setMessage(" Item adicionado ao carrinho!");
    }
  };
  const checkoutAlert = (alert) => {
    if (alert === "success") {
      setSeverity("success");
      setMessage("Compra realizada com sucesso!");
      setOpenAlert(true);
    }
    if (alert === "warning") {
      setSeverity("warning");
      setMessage("Selecione a forma de pagamento!");
      setOpenAlert(true);
    }
  };
  return (
    <BikeContext.Provider
      value={{
        itemCart,
        setItemCart,
        handleCart,
        handleValue,
        openAlert,
        setOpenAlert,
        severity,
        message,
        checkoutAlert,
      }}
    >
      {children}
    </BikeContext.Provider>
  );
};
