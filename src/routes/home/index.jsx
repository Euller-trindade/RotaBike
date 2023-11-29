import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Slider from "../../components/slider";
import home1 from "../../assets/home1.jpg";
import home2 from "../../assets/home2.jpg";
import home3 from "../../assets/home3.jpg";
const Home = () => {
  return (
    <div className="home">
      <Slider />
      <div className="container__home">
        <section className="section__home">
          <div className="div__text">
            <h2>Conforto e qualidade</h2>
            <p>
              Descubra o conforto inigualável e a qualidade excepcional em cada
              pedalada com as nossas bicicletas de alta performance.
            </p>
            <div className="div__button">
              <button>
                <Link to={"/bicicletas"}>Ver mais</Link>
              </button>
            </div>
          </div>
          <img src={home1} alt="" />
        </section>
        <section className="section__home reverse">
          <div className="div__text">
            <h2>Trilha</h2>
            <p>
              Descubra novos horizontes e aventure-se pelas trilhas mais
              emocionantes com nossas bicicletas de alto desempenho, a sua
              companhia perfeita para uma jornada repleta de adrenalina e
              natureza!
            </p>
            <div className="div__button">
              <button>
                <Link to={"/bicicletas"}>Ver mais</Link>
              </button>
            </div>
          </div>
          <img src={home2} alt="" />
        </section>
        <section className="section__home">
          <div className="div__text">
            <h2>Design e acabamento</h2>
            <p>
              O design meticuloso e o acabamento impecável de cada detalhe em
              nossas bicicletas são uma verdadeira obra de arte sobre duas
              rodas.
            </p>
            <div className="div__button">
              <button>
                <Link to={"/bicicletas"}>Ver mais</Link>
              </button>
            </div>
          </div>
          <img src={home3} alt="" />
        </section>
      </div>
    </div>
  );
};

export default Home;
