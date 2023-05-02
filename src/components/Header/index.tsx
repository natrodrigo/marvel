import styled from "styled-components";
import { useCookie } from "../../hooks/useCookie";
import { AuthContext } from "../../context/Auth/AuthContext";
import { useContext, SetStateAction } from "react"
import {
    marvelDark,
    hulkLigth,
    hulkDark,
    ironLigth,
    ironDark,
    rogersLigth,
    rogersDark,
    thorLigth,
    thorDark

} from "../../styles/themes/themes";

import { DefaultTheme } from "styled-components";
import { Button } from "../Button";

interface Props {
    selected: string

    setTheme: React.Dispatch<SetStateAction<DefaultTheme>>

}

export const Header = (props: Props) => {
    const auth = useContext(AuthContext);

    const cookieHook = useCookie();


    const clearCookie = async () => {
        cookieHook.clearCookie("keys");
        auth.keys = {
            public: "",
            private: ""
        }

        location.reload();
    };

    const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {

        let theme: DefaultTheme = marvelDark

        switch (e.target.value) {

            case "marvelDark":
                theme = marvelDark;
                break;

            case "hulkLigth":
                theme = hulkLigth;
                break;
            case "hulkDark":
                theme = hulkDark;
                break;

            case "ironLigth":
                theme = ironLigth;
                break;
            case "ironDark":
                theme = ironDark;
                break;

            case "rogersLigth":
                theme = rogersLigth;
                break;
            case "rogersDark":
                theme = rogersDark;
                break;

            case "thorLigth":
                theme = thorLigth;
                break;
            case "thorDark":
                theme = thorDark;
        }


        return props.setTheme(theme);

    }


    return (
        <StyledDiv>
            <StyledA href="http://marvel.com">Data provided by Marvel. © 2023 MARVEL</StyledA>
            <div>
                <StyledSelect name="Theme" id="" onChange={(e) => handleOnChange(e)}>
                    <option value="marvelDark">Marvel Dark</option>
                    <option value="hulkLigth">Hulk Ligth</option>
                    <option value="hulkDark">Hulk Dark</option>
                    <option value="ironLigth">Iron Man Ligth</option>
                    <option value="ironDark">Iron Man Dark</option>
                    <option value="rogersLigth">Rogers Ligth</option>
                    <option value="rogersDark">Rogers Dark</option>
                    <option value="thorLigth">Thor Ligth</option>
                    <option value="thorDark">Thor Dark</option>
                </StyledSelect>
                {props.selected &&
                    <Button label="Change API Keys" onClick={() => { clearCookie() }}></Button>
                }
            </div>

        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;
    padding:0 0.5em;
    height:3em;
    background-color:${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`

const StyledA = styled.a`
color:${props => props.theme.colors.text};
font-weight:600;
`
const StyledSelect = styled.select`
    padding:.8em;
    border-radius:5px;
    border:none;
    color:${props => props.theme.colors.text};
    background-color:${props => props.theme.colors.secundary};
`
