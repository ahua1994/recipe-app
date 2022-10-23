import { Link } from "react-router-dom";
import "./Navigation.scss";

function Navigation() {
    return (
        <div className="Navigation">
            <Link to="/">
                <div className="logo">Andy Hua Recipes</div>
            </Link>

            <div className="right">
                <Link to="/">
                    <div className="home">Home</div>
                </Link>
                <Link to="/about">
                    <div className="about">About</div>
                </Link>
                <Link to="/login">
                    <div className="logout">Logout</div>
                </Link>
            </div>
        </div>
    );
}

export default Navigation;
