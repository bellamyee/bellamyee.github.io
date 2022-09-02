import Link from "next/link";
import styles from "./styles.module.css"

const NavMenu = ({menuName, link}) =>
        <div className={styles.navMenu}>
            <Link href = {link} className={styles.navMenu}>
             <a>{menuName}</a>
            </Link>
        </div>
export default NavMenu
