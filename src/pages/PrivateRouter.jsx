import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = ({ loggedIn }) => {
    return loggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
