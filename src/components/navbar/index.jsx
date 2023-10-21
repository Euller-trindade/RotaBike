import React, { useEffect } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineDirectionsBike, MdOutlineShoppingCart } from "react-icons/md";
import "./style.css";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
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
      <h2>
        RotaBike <MdOutlineDirectionsBike />
      </h2>
      <ul className={active}>
        <li className="nav__item">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "activePage" : "nav__link"
            }
            onClick={navToggle}
          >
            Home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to={"/bicicletas"}
            className={({ isActive }) =>
              isActive ? "activePage" : "nav__link"
            }
            onClick={navToggle}
          >
            Bicicletas
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to={"/sobre"}
            className={({ isActive }) =>
              isActive ? "activePage" : "nav__link"
            }
            onClick={navToggle}
          >
            sobre
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to={"/contato"}
            className={({ isActive }) =>
              isActive ? "activePage" : "nav__link"
            }
            onClick={navToggle}
          >
            Contato
          </NavLink>
        </li>
      </ul>
      <div className="container__cart_menu">
        <p className="cart">
          <Link to="/cart">
            <MdOutlineShoppingCart />
          </Link>
          <span>10</span>
        </p>

        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
