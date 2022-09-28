import styles from "./styles.module.css"
import SubNavMenu from "../SubNavMenu";
import {useRecoilState} from "recoil";
import {isMenuOpenedState} from "../States/states";
import {useEffect} from "react";

const SubNav = () => {
    const [isMenuOpened, setMenuOpen] = useRecoilState(isMenuOpenedState)
    const menuOpened = <div className={styles.subNavContainer}>
    <SubNavMenu menuName={"posts"} link={"posts"}></SubNavMenu>
    <SubNavMenu menuName={"portfolio"} link={"portfolio"}></SubNavMenu>
    <SubNavMenu menuName={"books"} link={"books"}></SubNavMenu>
    <SubNavMenu menuName={"about"} link={"about"}></SubNavMenu>
</div>

    const menuClosed = <div className={styles.subNavContainer} style={{height:'0px'}}>
        <SubNavMenu menuName={"posts"} link={"posts"}></SubNavMenu>
        <SubNavMenu menuName={"portfolio"} link={"portfolio"}></SubNavMenu>
        <SubNavMenu menuName={"books"} link={"books"}></SubNavMenu>
        <SubNavMenu menuName={"about"} link={"about"}></SubNavMenu>
    </div>

    return isMenuOpened ? menuOpened : menuClosed;
}
export default SubNav;
