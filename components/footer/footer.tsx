import React from "react";
import style from "./style.module.css";
import top from "../../public/top.svg";
import Image from "next/image";
import telegramm from "../../public/telegram.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <span className={style.line}></span>
      <footer className={style.footer}>
        <Link href="https://t.me/L_0gan74" className={style.telegram}>
          Написать в телеграмм
          <Image src={telegramm} alt="Telegramm" />
        </Link>
        <span>
          <Link href="/">Главная</Link>
          <Link href="/about">О нас</Link>
        </span>
        <Image className={style.top} src={top} alt="top" />
      </footer>
    </>
  );
};

export default Footer;
