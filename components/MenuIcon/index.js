import styles from "./styles.module.css"
import { Squash as Hamburger } from 'hamburger-react'
import {useRecoilState} from "recoil";
import {isMenuOpenedState} from "../States/states";

const MenuIcon = () => {
    const [isMenuOpened, setMenuOpen] = useRecoilState(isMenuOpenedState)
    return <span className={styles.menuIcon}><Hamburger size={"25"} color="white" toggled={isMenuOpened} toggle={setMenuOpen} /></span>
}

export default MenuIcon
