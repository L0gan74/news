import React from "react";
import style from "./style.module.css";
import Navigation from "./navigation";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/L_0gan.svg";

const Header = () => {
  const navItems = [
    { label: "Главная", href: "/" },
    { label: "О нас", href: "/about" },
    { label: "Форма добавления", href: "/form" },
  ];

  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  };

  return (
    <header className={style.header}>
      <Link href="/">
        <Image className={style.logo} src={logo} alt="logo" />
      </Link>
      <Navigation navLinks={navItems} />
      <div className={`burger-menu ${isOpen ? "open" : ""}`}>
        <div className="burger-icon" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className="menu-items">
          <li>
            <Link href="">Home</Link>
          </li>
          <li>
            <Link href="">Home</Link>
          </li>
          <li>
            <Link href="">Home</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
