import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../Providers/TechContext";
import { IoCloseSharp } from "react-icons/io5";
import styled from "./style.module.scss";
export const EditTechModal = ({ setIsOpenTo }) => {
    const { updateTech, editingTech } = useContext(TechContext);
    const { register, handleSubmit } = useForm();

    const submit = (formData) => {
        updateTech(formData);
        setIsOpenTo(false);
    }
    return (
        <div className={styled.ModalContainer}>
            <div className={styled.ModalCard}>
                <div>
                    <h2 className="title2">Tecnologia Detalhes</h2>
                    <button onClick={() => setIsOpenTo(false)}>
                        <IoCloseSharp size={20} />
                    </button>
                </div>
                <form onSubmit={handleSubmit(submit)}>
                    <div>
                        <h3>{editingTech.title}</h3>
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
                    <button className="paragraph" type="submit">Atualizar tecnologia</button>
                </form>
            </div>
        </div>
    )
}