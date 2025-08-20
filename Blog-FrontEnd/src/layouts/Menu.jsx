import { Link } from "react-router-dom"
function Menu() {
    return (
        <nav>
            <ul className="nav ">
                <li className="p-2">
                    <Link to={'/home'}> Página Inicial</Link>
                </li>
                <li className="p-2">
                    <Link to={'/blog'}> Blog</Link>
                </li>
                <li className="p-2">
                    <Link to={'/'}> Sair</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;