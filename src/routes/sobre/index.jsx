import React from "react";
import "./style.css";
import bikeHistoria from "../../assets/bike historia.jpg";

const Sobre = () => {
  return (
    <div className="container__sobre">
      <h1>Sobre nós </h1>
      <img src={bikeHistoria} alt="bicicleta" />
      <div className="historia">
        <h2>Nossa história</h2>
        <p>
          Há muitos anos, em uma pequena cidade chamada Pedalândia, nasceu uma
          loja de bicicletas chamada "RotaBike". A loja tinha uma história
          peculiar e cativante que a tornou uma parte importante da comunidade.
          <br />
          <br />
          Tudo começou com um homem chamado Pedro, um amante de bicicletas desde
          sua infância. Ele passava horas pedalando pelas estradas de Pedalândia
          e sempre sonhava em compartilhar sua paixão com os outros. Após
          economizar dinheiro ao longo dos anos, Pedro decidiu abrir sua própria
          loja de bicicletas.
          <br />
          <br />
          Nos primeiros anos, Pedro enfrentou muitos desafios. Ele trabalhou
          incansavelmente para construir sua loja, cuidando de todas as
          bicicletas pessoalmente. Ele se tornou conhecido em Pedalândia como o
          "Homem das Bicicletas". Aos poucos, a RotaBike ganhou reconhecimento e
          uma clientela fiel.
        </p>
      </div>
      <div className="metas">
        <h2>Nossas metas e valores</h2>
        <p>
          A RotaBike busca um crescimento sustentável e a longo prazo, sem
          comprometer os valores que a definem. A loja está comprometida em
          crescer, expandir sua influência positiva na comunidade e fortalecer
          ainda mais sua conexão com os ciclistas locais.
          <br />
          <br />A RotaBike é muito mais do que um estabelecimento de bicicletas;
          ela é um farol de valores e metas que refletem uma paixão profunda
          pelo ciclismo e um compromisso inabalável com a comunidade e o
          bem-estar de todos os que compartilham a alegria de pedalar.
        </p>
      </div>
    </div>
  );
};

export default Sobre;
