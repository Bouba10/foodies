

import Link from "next/link";


import styles from "./Header.module.css";
import logoImg from "../../../src/assets/logo.png";
import Image from "next/image";
import NavLink from './nav-link';

import { HeaderBackground } from "./HeaderBackground";

export const Header = () => {

  return (
    <>
      <HeaderBackground />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={logoImg} alt="A plate with Food" priority />
          Boobs Foodies
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
