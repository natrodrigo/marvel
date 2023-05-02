import styled from "styled-components"

interface Props {
    label: string
    onClick: React.MouseEventHandler
}


export const Button = (props: Props) => {
    return (
        <StyledButton onClick={props.onClick}>{props.label}</StyledButton>
    )
}

const StyledButton = styled.button`
    margin: .5em;
    background-color:${props => props.theme.colors.secundary};
    color:${props => props.theme.colors.text};
    border:none;
    border-radius:5px;
    padding: .8em 1em;
    cursor:pointer;

`