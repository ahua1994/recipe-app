import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" />
                <Route path="about" />
                <Route path="login" />
                <Route path="*" />
            </Routes>
        </div>
    );
}

export default App;
