import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../service/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export const TechProvider = ({children})=>{
    const {user, techList, setTechList} = useContext(UserContext)
    const [editingTech, setEditingTech] = useState(null);
    setTechList(user)
    const [stateTech, setStateTech] = useState(techList.techs)

    const createTech = async (formData) =>{

        try {
            const token = localStorage.getItem("@TOKEN");
            
            const { data } = await api.post("/users/techs", formData,{
                headers:{
                    Authorization: `Bearer ${token}`
                },
            });
            setStateTech([...stateTech, data]);
        } catch (error) {
            console.log(error);
        }
    }

    const updateTech = async (formData)=>{
        
        try {
            const token = localStorage.getItem("@TOKEN");
            const { data } = await api.put(`/users/techs/${editingTech.id}`,formData, {
                headers:{
                    Authorization: `Bearer ${token}`
                },
            });
            const newTech = stateTech.map((tech)=>{
                if(tech.id === editingTech.id) {
                    return data;
                } else {
                    return tech;
                }
            });
            setStateTech(newTech);
            setEditingTech(null);
        } catch (error) {
            console.log(error)
        }
    }

    const deleteTech = async (deletingId)=>{
        const token = localStorage.getItem("@TOKEN")
        try {
            await api.delete(`/users/techs/${deletingId}`,{
                headers:{
                    Authorization: `Bearer ${token}`
                },
            });
            const newTechs = stateTech.filter((tech) => tech.id !== deletingId);
            setStateTech(newTechs);            
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <TechContext.Provider value={{techList, stateTech, user, setTechList, createTech, deleteTech, updateTech, editingTech, setEditingTech}} >
            {children}
        </TechContext.Provider>
    )
}