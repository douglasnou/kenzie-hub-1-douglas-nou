import { useContext } from "react";
import { UserContext } from "../../components/Providers/UserContext";
import { TechProvider } from "../../components/Providers/TechContext";
import { LoginPage } from "./LoginPage";
import { LogoutPage } from "./LogoutPage";

export const HomePage = () => {
    const { user } = useContext(UserContext)
    return (
        <main>
            {user ? (
                <TechProvider>
                    <LoginPage />
                </TechProvider>
            )
                :
                (
                    <LogoutPage />
                )}
        </main>
    )
}