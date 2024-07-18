
import classNames from "classnames";
import styles from "./NavBar.module.css";
import IconCart from "../icons/IconCart";

export default function NavBar() {
  return (

    <nav className={classNames(styles.navbar)}>
      <div className={styles.logo}>Luxif</div>
      <ul className={styles.navLinks}>
        <li><a href="#collections">Collections</a></li>
        <li><a href="#men">Men</a></li>
        <li><a href="#women">Women</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className={styles.cartIcon}>
        <IconCart fill="#000" />
      </div>
    </nav>
  );
}
