import NavMenu from "../NavMenu"
import Logo from "../Logo"
import styles from "./styles.module.css"

const Nav = () =>
    <div className={styles.header}>
        <div className={styles.navContent}>
            <Logo />
            <NavMenu menuName="posts" link="careers" />
            <NavMenu menuName="portfolio" link="careers" />
            <NavMenu menuName="books" link="careers" />
            <NavMenu menuName="about" link="careers" />
        </div>
    </div>
export default Nav
