import Nav from "../Nav"
import styles from "./styles.module.css"
const MainLayout = ({children}) =>
    <div className={styles.mainLayout}>
        <Nav />
        {children}
    </div>

export default MainLayout
