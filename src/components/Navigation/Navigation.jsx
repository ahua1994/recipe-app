import { Link } from "react-router-dom";
import "./Navigation.scss";

function Navigation({ loggedIn, setLoggedIn }) {
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
                <Link
                    to="/login"
                    onClick={() => {
                        setLoggedIn(false);
                    }}
                >
                    <div className="logout">{loggedIn ? "Logout" : "Login"}</div>
                </Link>
            </div>
        </div>
    );
}

export default Navigation;
