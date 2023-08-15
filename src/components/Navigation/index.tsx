"use client";
import Logo from "@/assets/images/logo.png";
import Image from "next/image";
import styles from "./index.module.scss";
import Button from "../Button";
import Hamburger from "@/assets/images/hamburger.svg";
import Link from "next/link";

import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenuHandler = () => setIsMenuOpen(true);

  const closeMenuHandler = () => setIsMenuOpen(false);
  return (
    <header className={styles.container}>
      <Image
        src={Logo.src}
        objectFit="contain"
        style={{
          objectFit: "contain",
        }}
        height={40}
        width={100}
        alt="ORganization"
      />
      <nav className={styles.nav}>
        <Links />
      </nav>

      <Button>{`Let’s Talk`}</Button>
      <button
        className={styles.hamburgerButton}
        title="Open Menu"
        onClick={openMenuHandler}
      >
        <Hamburger />
      </button>

      <aside className={styles.sideMenu} data-isOpen={isMenuOpen}>
        <Links showLogo />
        <button
          className={styles.closeButton}
          title="Close Menu"
          onClick={closeMenuHandler}
        >
          <AiOutlineClose fontSize="2.5rem" />
        </button>
      </aside>
    </header>
  );
};
export default Navigation;

type Props = {
  showLogo?: boolean;
};
const Links = ({ showLogo = false }: Props) => {
  return (
    <ul className={styles.ul}>
      {showLogo && (
        <li className={styles.li}>
          <Link href="#">
            <Image
              src={Logo.src}
              objectFit="contain"
              style={{
                objectFit: "contain",
              }}
              height={40}
              width={100}
              alt="ORganization"
            />
          </Link>
        </li>
      )}
      <li className={styles.li}>
        <Link href="#">Programs</Link>
      </li>
      <li className={styles.li}>
        <Link href="#">Services</Link>
      </li>
      <li className={styles.li}>
        <Link href="#">News</Link>
      </li>
      <li className={styles.li}>
        <Link href="#">About Us</Link>
      </li>
    </ul>
  );
};
