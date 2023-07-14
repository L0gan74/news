"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import style from "./style.module.css";
import { signIn, signOut, useSession } from "next-auth/react";

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

const Navigation = ({ navLinks }: Props) => {
  const { data: session } = useSession();
  const pathname = usePathname();
  return (
    <nav className={style.nav}>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.label}
            href={link.href}
            className={isActive ? "active" : ""}
          >
            {link.label}
          </Link>
        );
      })}
      {session?.expires ? (
        <button
          type="button"
          onClick={() => {
            signOut();
          }}
        >
          Выйти
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            signIn();
          }}
        >
          Войти
        </button>
      )}
    </nav>
  );
};

export default Navigation;
