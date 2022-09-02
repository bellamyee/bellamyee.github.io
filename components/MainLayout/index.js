import Nav from "../Nav"
import styles from "./styles.module.css"
const MainLayout = ({children}) =>
    <div className={styles.mainLayout}>
        <Nav />
        <div className={styles.mainContainer}>{children}</div>
    </div>

export default MainLayout
