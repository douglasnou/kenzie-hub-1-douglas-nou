import { Route, Routes } from "react-router-dom"
import { HomePage } from "../Pages/HomePage"
import { TechCreateForm } from "../components/TechCreateForm"
import { ProtectedRoutes } from "../ProtectedRoutes"
import { LoginPage } from "../Pages/HomePage/LoginPage"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<TechCreateForm />} />
            <Route path="/dashboard" element={<ProtectedRoutes />}>
                <Route index element={<LoginPage/>} />
            </Route>
        </Routes>
    )
}