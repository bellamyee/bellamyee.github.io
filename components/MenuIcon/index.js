import styles from "./styles.module.css"
import Image from 'next/image'
import Link from 'next/link'

const MenuIcon = () =>
    <Link href={"careers"}><i className={`bi bi-list white ${styles.menuIcon}`}></i></Link>

export default MenuIcon
