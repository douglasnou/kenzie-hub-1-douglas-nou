import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../service/api";
import toast from "react-hot-toast";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [techList, setTechList] = useState();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const notifySuccessSub = () => toast.success("Cadastro realizado com sucesso!", {
        style: {
            background: '#333',
            color: '#fff',
        },
    });
    const notifySuccessLogin = () => toast.success("Você está logado!", {
        style: {
            background: '#333',
            color: '#fff',
        },
    });
    const notifySuccessLogout = () => toast.success("Você saiu!", {
        style: {
            background: '#333',
            color: '#fff',
        },
    });
    const notifyError = () => toast.error("Ops! Algo está errado");

    useEffect(() => {
        const userId = localStorage.getItem("@USERID");
        const token = localStorage.getItem("@TOKEN");

        const autoLogin = async () => {
            setLoading(true);
            try {
                const { data } = await api.get("/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                })
                setUser(data);
                navigate("/");
            } catch (error) {
                console.log(error);
                localStorage.removeItem("@USERID");
                localStorage.removeItem("@TOKEN");
            } finally {
                setLoading(false);
            }
        };
        if (token && userId) {
            autoLogin();
        }
    }, [])

    const userRegister = async (formData) => {
        try {
            await api.post("/users", formData);
            navigate("/");
        } catch (error) {
            console.log(error);
            notifyError();
        }
    }

    const userLogin = async (formData) => {
        try {
            const { data } = await api.post("/sessions", formData);
            setUser(data.user);
            localStorage.setItem("@TOKEN", data.token);
            localStorage.setItem("@USERID", data.user.id);
            navigate("/");
        } catch (error) {
            console.log(error);
            notifyError();
        }
    }
    

    const userLogout = async () => {
        setUser(null);
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");
        navigate("/");
        notifySuccessLogout();
    }
    return (
        <UserContext.Provider value={{ user, userRegister, userLogin, userLogout, notifySuccessLogin, notifySuccessSub, techList, setTechList }}>
            {children}
        </UserContext.Provider>
    )
}