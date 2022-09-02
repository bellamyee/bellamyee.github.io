import NavMenu from "../NavMenu"
import Logo from "../Logo"
import styles from "./styles.module.css"

const Nav = () =>
    <div className={styles.header}>
        <div className={styles.navContent}>
            <Logo />
            <NavMenu menuName="careers" link="careers" />
            <NavMenu menuName="careers" link="careers" />
            <NavMenu menuName="careers" link="careers" />
            <NavMenu menuName="careers" link="careers" />

        </div>
    </div>
export default Nav
