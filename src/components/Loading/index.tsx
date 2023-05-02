import styled from "styled-components";


const StyledDiv = styled.div<{ size: number }>`

width:${props => props.size}px;
height:${props => props.size}px;
border: ${props => props.size/5}px solid ${props => props.theme.colors.primary};
border-top: ${props => props.size/5}px solid ${props => props.theme.colors.primary}AA;
border-radius: 50%;

animation: spin 2s linear infinite;


@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}`

type Props = {
    size?: number
}

export const Loading = (props: Props) => {
    return (
        <StyledDiv size={props.size || 20}>

        </StyledDiv>

    )
}