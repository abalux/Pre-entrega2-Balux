import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
function NavBar() {
    return (
        <nav style={{display: "flex", justifyContent:"space-between", alignItems: 'center' }}>
            <h1>Ecomerce</h1>
            <section>
            <Link to="/category/skirts"> Skirts </Link>
            <Link to="/category/dresses"> Dresses </Link>
            <Link to="/category/coats"> Coats </Link>
            <Link to="/category/shirts"> Shirts </Link>
            </section>
            <CartWidget />
        </nav>
    );
}

export default NavBar