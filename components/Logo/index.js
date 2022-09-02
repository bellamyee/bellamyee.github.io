import styles from "./styles.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Logo = () =>
    <div className={styles.logoBox}>
        <Link href={"/"}>
            <a><span className={styles.image}>
                    <Image src={"/images/logo.png"} width="40" height="40"/>
            </span></a>
        </Link>
    </div>

export default Logo
