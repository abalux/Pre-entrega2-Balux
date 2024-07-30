import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";


function NavBar({ cartCount, title }) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid" >
            <a className="navbar-brand" href="#">
                {title}
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"

                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                    <li className="nav-item ms-3">
                        <Link to="/"> Home </Link>
                    </li>
                    <li className="nav-item ms-3">
                        <Link to="/category/skirts"> Skirts </Link>
                    </li>
                    <li className="nav-item ms-3">
                        <Link to="/category/dresses"> Dresses </Link>
                    </li>
                    <li className="nav-item ms-3">
                        <Link to="/category/coats"> Coats </Link>
                    </li>
                    <li className="nav-item ms-3">
                        <Link to="/category/shirts"> Shirts </Link>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <CartWidget cartCount={cartCount} />
                </form>
            </div>
        </div>
    </nav>
    );
}

export default NavBar