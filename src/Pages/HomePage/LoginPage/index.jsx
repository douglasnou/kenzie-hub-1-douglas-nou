import { useContext } from "react"
import { TechList } from "../../../components/TechList"
import { UserContext } from "../../../components/Providers/UserContext"
import { ToastContainer } from "react-toastify";
import logo from "./../../../assets/Logo.png";
import styled from "./style.module.scss";

export const LoginPage = () => {
    const { user, userLogout } = useContext(UserContext);
    return (
        <div className={styled.LoginPage}>
            <navbar>
                <div>
                    <img src={logo} alt="logo-do-kenzie-hub" />
                    <button className="headline" onClick={() => userLogout()}>Sair</button>
                </div>
                <ToastContainer />
            </navbar>
            <header>
                <div>
                    <h1 className="title1">Olá, {user.name}</h1>
                    <p className="headline">{user.course_module}</p>
                </div>
            </header>
            <TechList />
        </div>
    )
}