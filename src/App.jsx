import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import PrivateRouter from "./pages/PrivateRouter";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Details from "./pages/Details";
import { useState } from "react";
import "./App.scss";

function App() {
    const auth = localStorage.getItem("Auth");
    const [loggedIn, setLoggedIn] = useState(auth ? true : false);
    return (
        <div className="App">
            <BrowserRouter>
                <Navigation loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
                <Routes>
                    <Route
                        path="login"
                        element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
                    />
                    <Route path="about" element={<About />} />
                    <Route path="*" element={<Error />} />

                    <Route path="/" element={<PrivateRouter loggedIn={loggedIn} />}>
                        <Route path="/" element={<Home />} />
                    </Route>
                    <Route path="details" element={<Details />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
