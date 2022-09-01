import Link from "next/link";
const NavMenu = ({menuName, link}) =>
    <Link href = {link}>
        <div>
            <h2 className={"menuName"}>
                {menuName}
            </h2>
        </div>
    </Link>
export default NavMenu
