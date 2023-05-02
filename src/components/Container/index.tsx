import styled from "styled-components";

interface Props {
    children: JSX.Element;
}


export const Container = (props:Props) => {
    return (
        <StyledDiv>
            {props.children}
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:1em;
`
