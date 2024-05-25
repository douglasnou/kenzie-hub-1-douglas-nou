import { useContext, useState } from "react";
import { TechCard } from "./TechCard";
import { TechContext } from "../Providers/TechContext";
import { CreateTechModal } from "../CreateTechModal";
import { FaPlus } from "react-icons/fa";
import styled from "./style.module.scss";
import { EditTechModal } from "../EditTechModal";

export const TechList = () => {
    const { stateTech } = useContext(TechContext);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenTo, setIsOpenTo] = useState(false);
    return (
        <div className={styled.ListContainer}>
            <div className={styled.ListSubContainer}>
                <h1 className="title1">Tecnologias</h1>
                <button onClick={()=>setIsOpen(true)}>
                <FaPlus  size={15} />
                </button>
            </div>
            <ul>
                {
                    stateTech.map((tech) => (
                        <TechCard setIsOpenTo={setIsOpenTo} isOpenTo={isOpenTo} tech={tech} key={tech.id} />
                    ))
                }
            </ul>
            { isOpen ? <CreateTechModal setIsOpen={setIsOpen} /> : null }
            {isOpenTo ? <EditTechModal setIsOpenTo={setIsOpenTo} /> : null}
        </div>
    )
}