import { useContext } from "react"
import { TechContext } from "../../Providers/TechContext"
import { FaRegTrashCan } from "react-icons/fa6";
import { MdOutlineModeEdit } from "react-icons/md";
import styled from "./style.module.scss";

export const TechCard = ({ tech, setIsOpenTo, isOpenTo }) => {
    const { deleteTech, setEditingTech } = useContext(TechContext);
    const doIt = () => {
        setEditingTech(tech);
        setIsOpenTo(true);
    }
    return (
        <li className={styled.Card}>
            <div className={styled.TitleCard}>
                <h2 className="title2">{tech.title}</h2>
                <p className="headline">{tech.status}</p>
            </div>
            <div className={styled.ActionsCard}>
                <button onClick={() => doIt()}>
                    <MdOutlineModeEdit size={15} />
                </button>
                <button onClick={() => deleteTech(tech.id)}>
                    <FaRegTrashCan size={15} />
                </button>
            </div>
            
        </li>
    )
}