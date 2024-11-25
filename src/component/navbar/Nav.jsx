import styles from './Nav.module.css';
import { TiThMenu } from "react-icons/ti";

const Nav = () => {
  return (
    <nav className={styles.nav}>
        <a href=""><img src="images/brand_logo.png" alt="Brand Logo" /></a>

        <div className={styles.menu}>
            <TiThMenu fontSize="24px" />
        </div>

        <ul className={styles.navList}>
            <li className={styles.navItem}><a href="">MENU</a></li>
            <li className={styles.navItem}><a href="">LOCATION</a></li>
            <li className={styles.navItem}><a href="">ABOUT</a></li>
            <li className={styles.navItem}><a href="">CONTACT</a></li>
        </ul>

        <button className={styles.login}>Login</button>
    </nav>
  )
}

export default Nav;
