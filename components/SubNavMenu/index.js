import Link from "next/link";
import styles from "./styles.module.css"
import {useRecoilState} from "recoil";
import {isMenuOpenedState} from "../States/states";

const SubNavMenu = ({menuName, link}) =>
{
    const [isMenuOpened, setMenuOpen] = useRecoilState(isMenuOpenedState)
    const toggle = () => setMenuOpen(prev=>!prev);

    return <div className={styles.SubNavMenu}>
        <Link href = {link} className={styles.SubNavMenu}>
            <a onClick={toggle}>{menuName}</a>
        </Link>
    </div>
}
export default SubNavMenu
