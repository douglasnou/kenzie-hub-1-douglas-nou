import { useContext } from "react";
import { useForm } from "react-hook-form"
import { TechContext } from "../Providers/TechContext";
import { IoCloseSharp } from "react-icons/io5";
import styled from "./style.module.scss";

export const CreateTechModal = ({ setIsOpen }) => {
    const { register, handleSubmit } = useForm();
    const { createTech } = useContext(TechContext);

    const submit = (formData) => {
        createTech(formData);
        setIsOpen(false);
    }
    return (
        <div className={styled.ModalContainer} >
            <div className={styled.ModalCard}>
                <div>
                    <h2 className="title2">Cadastrar tecnologia</h2>
                    <button onClick={() => setIsOpen(false)}>
                    <IoCloseSharp size={20}/>
                    </button>
                </div>
                <form onSubmit={handleSubmit(submit)}>
                    <div>
                        <label className="headline">Nome</label>
                        <input className="paragraph" type="text" placeholder="Tecnologia" {...register("title", { required: true })} />
                    </div>
                    <div>
                        <label className="headline">Selecionar status</label>
                        <select className="paragraph" {...register("status", { required: true })} >
                            <option value="" >Selecione o status</option>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                    </div>
                    <button className="paragraph" type="submit">Cadastrar Tecnologia</button>
                </form>
            </div>
        </div>
    )
}