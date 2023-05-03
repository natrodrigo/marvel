import { useContext } from "react"
import styled, { ThemeContext } from "styled-components"



interface Props {
    name: string,
    onChange: React.ChangeEventHandler<HTMLSelectElement>,
    options: string[]
}

export const Select = (props:Props) => {
    const theme = useContext(ThemeContext)

    return (
        <StyledSelect value={theme.title} name={props.name} onChange={(e) => {props.onChange(e)}}>
            {props.options.map((name)=>{
                return <option key={name} value={name}>{name}</option>
            })}
        </StyledSelect>
    )
}

const StyledSelect = styled.select`
    padding:.8em;
    border-radius:5px;
    border:none;
    color:${props => props.theme.colors.text};
    background-color:${props => props.theme.colors.secundary};
    cursor:pointer;
`


