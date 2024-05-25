import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { UserContext } from "../Providers/UserContext";
import { Toaster } from "react-hot-toast";
import styled from "./style.module.scss";
import logo from "./../../assets/Logo.png"

export const TechLoginForm = () => {
    const { register, handleSubmit } = useForm();
    const { userLogin, notifySuccessLogin } = useContext(UserContext);

    const submit = (formData) => {
        userLogin(formData);
        notifySuccessLogin();
    }
    return (
        <div className={styled.LoginContainer}>
            <div className={styled.LoginSubContainer}>
                <img src={logo} alt="logo-do-kenzie-hub" />
                <form onSubmit={handleSubmit(submit)}>
                    <h2 className="title1">Login</h2>
                    <div className={styled.InputContainer}>
                        <label className="headline">Email</label>
                        <input className="paragraph" placeholder="exemplo@email.com" type="email" {...register("email", { required: true })} />
                    </div>
                    <div className={styled.InputContainer}>
                        <label className="headline">Senha</label>
                        <input className="paragraph" placeholder="Senha" type="password" {...register("password", { required: true })} />
                    </div>
                    <button className="paragraph" type="submit">Entrar</button>
                    <Toaster
                        position="top-right"
                    />
                    <div className={styled.Subscribe}>
                        <p className="headline bold">Ainda não possui uma conta?</p>
                        <Link className={`paragraph ${styled.Link}`} to="/register">Cadastre-se</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}