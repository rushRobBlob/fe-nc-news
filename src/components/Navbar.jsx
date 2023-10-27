


import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <nav>
                <ul className="mainNav">
                    <li className="mainNavList">
                        <Link className="mainNavLink" to="/home">Home</Link>
                    </li>
                    <li className="mainNavList">
                        <Link className="mainNavLink" to="/articles">Articles</Link>
                    </li>
                    <li className="mainNavListHide">
                        <Link className="mainNavLink" to="/aboutus">About Us</Link>
                    </li>
                    <li className="mainNavListHide">
                        <Link className="mainNavLink" to="/contact">Contact</Link>
                    </li>

                </ul>
            </nav>
        </>
    )
}

export default Navbar;