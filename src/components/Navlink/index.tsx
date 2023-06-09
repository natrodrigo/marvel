import { Link } from "react-router-dom"
import styled from "styled-components"



export const Navlink = () => {
    return (
        <StyledDiv>
            <StyledLink to={"/char-list"}>Characters</StyledLink>
            <StyledLink to={"/creator-list"}>Creators</StyledLink>
            <StyledLink to={"/comic-list"}>Comics</StyledLink>
        </StyledDiv>
    )

}

const StyledDiv = styled.div`
display:flex;
gap: 10px;
`


const StyledLink = styled(Link)`
    background-color: ${props => props.theme.colors.secundary};
    color:${props => props.theme.colors.text};
    padding:10px;
    border-radius:5px;
`

