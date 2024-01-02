import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "./style.css";
import slide1 from "../../assets/slide1.png";
import slide2 from "../../assets/slide2.webp";
import slide3 from "../../assets/slide3.jpg";
import slide4 from "../../assets/slide4.webp";

const Slider = () => {
  const data = [
    {
      id: "1",
      image: slide1,
      description: "BICICLETAS PERSONALIZADAS ULTRA-PREMIUM",
    },
    {
      id: "2",
      image: slide2,
      description: "50% OFF",
    },
    {
      id: "3",
      image: slide3,
      description: "DUAL SPORT 2 1200R$",
    },
    {
      id: "4",
      image: slide4,
      description: "FRETE GRÁTIS",
    },
  ];
  return (
    <div className="container__slider">
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        loop
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <motion.img
              initial={{ y: 1000 }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
              src={item.image}
              alt="bikes"
              className="img__slide"
            />
            <motion.h2
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              className="description"
              transition={{ duration: 1 }}
            >
              {item.description}
            </motion.h2>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
