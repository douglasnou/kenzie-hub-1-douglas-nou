import { useContext } from "react";
import { UserContext } from "../components/Providers/UserContext";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = ()=>{
    const {user} = useContext(UserContext);

    return user ? <Outlet /> : <Navigate to="/" />
}