import NavMenu from "../NavMenu"
import MenuIcon from "../MenuIcon";
import Logo from "../Logo"
import styles from "./styles.module.css"

const Nav = () =>
    <div className={styles.header}>
        <div className={styles.navContent}>
            <MenuIcon />
            <Logo />
            <NavMenu menuName="posts" link="posts" />
            <NavMenu menuName="portfolio" link="portfolio" />
            <NavMenu menuName="books" link="books" />
            <NavMenu menuName="about" link="about" />
        </div>
    </div>
export default Nav
