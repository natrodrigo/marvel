import styled from "styled-components";
import { useCookie } from "../../hooks/useCookie";
import { AuthContext } from "../../context/Auth/AuthContext";
import { useContext, SetStateAction } from "react"
import * as themes from "../../styles/themes/themes";

import { DefaultTheme } from "styled-components";
import { Button } from "../Button";
import { Navlink } from "../Navlink";
import { Select } from "../Select";


interface Props {
    selected: string
    setTheme: React.Dispatch<SetStateAction<DefaultTheme>>

}

export const Header = (props: Props) => {
    const auth = useContext(AuthContext);
    const cookieHook = useCookie();

    const options: string[] = [];

    let key: keyof typeof themes;
    for (key in themes) {
        options.push(themes[key].title);
    }
    const clearCookie = async () => {
        cookieHook.clearCookie("keys");
        auth.keys = {
            public: "",
            private: ""
        }
        location.reload();
    };

    const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {

        let key: keyof typeof themes;
        for (key in themes) {
            if (themes[key].title === e.target.value) {
                props.setTheme(themes[key])
                cookieHook.setItem('themeName', themes[key].title,10)
            }
        }

    }


    return (
        <StyledDiv>
            <StyledA href="http://marvel.com">Data provided by Marvel. © 2023 MARVEL</StyledA>
            {props.selected && <Navlink />}
            <div>
                <Select name="Theme" onChange={handleOnChange} options={options}></Select>
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
