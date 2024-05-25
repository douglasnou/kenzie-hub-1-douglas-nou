import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { UserContext } from "../Providers/UserContext";
import { Toaster } from "react-hot-toast";
import logo from "./../../assets/Logo.png"
import styled from "./style.module.scss";

export const TechCreateForm = () => {
    const { register, handleSubmit } = useForm();
    const { userRegister, notifySuccessSub } = useContext(UserContext);

    const submit = (formData) => {
        userRegister(formData);
        notifySuccessSub();
    }
    return (
        <div className={styled.RegisterContainer}>
            <div className={styled.RegisterSubContainer}>
                <div className={styled.RegisterTitle}>
                    <img src={logo} alt="logo-kenzie-hub" />
                    <Link to="/" className={styled.Link}>voltar</Link>
                </div>
                <form onSubmit={handleSubmit(submit)}>
                    <div className={styled.FormTitle}>
                        <h1 className="title1">Crie sua conta</h1>
                        <p className="headline">Rápido e grátis, vamos nessa</p>
                    </div>
                    <div className={styled.InputContainer} >
                        <label>Nome</label>
                        <input className="headline" placeholder="Digite aqui o seu nome" type="text" {...register("name", { required: true })} />
                    </div>
                    <div className={styled.InputContainer} >
                        <label>E-mail</label>
                        <input className="headline" placeholder="Digite aqui o seu email" type="email" {...register("email", { required: true })} />
                    </div>
                    <div className={styled.InputContainer} >
                        <label>Senha</label>
                        <input className="headline" placeholder="Digite aqui a sua senha" type="password" {...register("password", { required: true })} />
                    </div>
                    <div className={styled.InputContainer} >
                        <label>Confirmar senha</label>
                        <input className="headline" placeholder="Digite novamente sua senha" type="password" {...register("password", { required: true })} />
                    </div>
                    <div className={styled.InputContainer} >
                        <label>Bio</label>
                        <input className="headline" placeholder="Fale sobre você" type="text" {...register("bio", { required: true })} />
                    </div>
                    <div className={styled.InputContainer} >
                        <label>Contato</label>
                        <input className="headline" placeholder="Opção de contato" type="text" {...register("contact", { required: true })} />
                    </div>
                    <div className={styled.InputContainer} >
                        <label>Selecione o módulo</label>
                        <select {...register("course_module", { required: true })}>
                            <option value="" >Escolha um módulo</option>
                            <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                            <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                            <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                            <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
                        </select>
                    </div>
                    <button type="submit">Cadastrar</button>
                    <Toaster />
                </form>
            </div>
        </div>
    )
}