import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "./style.css";

const Slider = () => {
  const data = [
    {
      id: "1",
      image:
        "https://treknology3.com/images/stories/virtuemart/product/Marlin6_22_35066_A_Portrait.png",
      description: "BICICLETAS PERSONALIZADAS ULTRA-PREMIUM",
    },
    {
      id: "2",
      image:
        "https://cdn.shopify.com/s/files/1/1478/8526/products/FX2Disc_22_35003_D_Portrait_2000x.jpg",
      description: "50% OFF",
    },
    {
      id: "3",
      image:
        "https://trek.scene7.com/is/image/TrekBicycleProducts/Marlin6_21_28787_A_Portrait?$responsive-pjpg$&cache=on",
      description: "DUAL SPORT 2 1200R$",
    },
    {
      id: "4",
      image:
        "https://scontent.faju6-1.fna.fbcdn.net/v/t1.6435-9/118559487_4239665926104989_7783345331267302645_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=eBzpzDogxeMAX-6i8Og&_nc_ht=scontent.faju6-1.fna&oh=00_AfCfxLTZpTs3YDzi-p-sseDJs2_B-YkoHCe4ibYixjN2cg&oe=654BE457",
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
