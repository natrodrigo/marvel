import styled from "styled-components"

interface Props {
    msg: string,
    visible: boolean
}
export const Message = (props: Props) => {

    return (
        <>
            {props.visible &&
                <StyledDiv>
                    {props.msg}
                </StyledDiv>}
        </>


    )

}

const StyledDiv = styled.div`
    margin: 1rem 0;
    padding: .5rem;
    border: 1px soldi #000;
    text-align: center;
    margin-bottom: 2em;
    border-radius: 5px;
    width: 30%;
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.primary};;

`