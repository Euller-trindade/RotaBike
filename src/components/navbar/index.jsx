import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineDirectionsBike, MdOutlineShoppingCart } from "react-icons/md";
import "./style.css";
import { BikeContext } from "../../context/BikeContext";
import { motion } from "framer-motion";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const { itemCart } = useContext(BikeContext);
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        RotaBike <MdOutlineDirectionsBike />
      </motion.h2>
      <ul className={active}>
        <motion.li
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="nav__item"
        >
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "activePage" : "nav__link"
            }
            onClick={navToggle}
          >
            Home
          </NavLink>
        </motion.li>
        <motion.li
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="nav__item"
        >
          <NavLink
            to={"/bicicletas"}
            className={({ isActive }) =>
              isActive ? "activePage" : "nav__link"
            }
            onClick={navToggle}
          >
            Bicicletas
          </NavLink>
        </motion.li>
        <motion.li
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.4 }}
          className="nav__item"
        >
          <NavLink
            to={"/sobre"}
            className={({ isActive }) =>
              isActive ? "activePage" : "nav__link"
            }
            onClick={navToggle}
          >
            sobre
          </NavLink>
        </motion.li>
        <motion.li
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.6 }}
          className="nav__item"
        >
          <NavLink
            to={"/contato"}
            className={({ isActive }) =>
              isActive ? "activePage" : "nav__link"
            }
            onClick={navToggle}
          >
            Contato
          </NavLink>
        </motion.li>
      </ul>
      <div className="container__cart_menu">
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="cart"
        >
          <Link to="/cart">
            <MdOutlineShoppingCart />
          </Link>
          <span>{itemCart.length}</span>
        </motion.p>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          onClick={navToggle}
          className={icon}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </motion.div>
      </div>
    </nav>
  );
}

export default NavBar;
