import Nav from "../Nav"
import SubNav from "../SubNav"
import styles from "./styles.module.css"
const MainLayout = ({children}) =>
    <div className={styles.mainLayout}>
        <Nav />
        <SubNav />
        <div className={styles.mainContainer}>{children}</div>
    </div>

export default MainLayout
