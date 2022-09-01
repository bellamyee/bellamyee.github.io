import Link from "next/link";
import styles from "./styles.module.css"

const NavMenu = ({menuName, link}) =>
    <Link href = {link}>
        <a className={styles.navMenu}>
            <h2>
                {menuName}
            </h2>
        </a>
    </Link>
export default NavMenu
