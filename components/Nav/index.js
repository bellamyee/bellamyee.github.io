import NavMenu from "../NavMenu"
import styles from "./styles.module.css"

const Nav = () =>
    <div className={styles.header}>
        <NavMenu menuName="home" link="/" />
        <NavMenu menuName="careers" link="careers" />
    </div>
export default Nav
