import { useContext, useEffect, SetStateAction } from "react";
import { AuthContext } from "./AuthContext";

import { KeyForm } from "../../pages/KeyForm";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Container } from "../../components/Container";
import { DefaultTheme } from "styled-components"


interface Props {
    children: JSX.Element,
    setTheme: React.Dispatch<SetStateAction<DefaultTheme>>
}

export const RequireAuth = (props: Props) => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (auth.keys.public === "" || auth.keys.private === "") {
            navigate("/");
        }

    }, [navigate, auth])

    if (auth.keys.public === "" || auth.keys.private === "") {
        return <KeyForm  setTheme={props.setTheme} />
    }

    return (
        <>
            <Header selected="true"  setTheme={props.setTheme}/>
            <Container>
                {props.children}
            </Container>

        </>)
}