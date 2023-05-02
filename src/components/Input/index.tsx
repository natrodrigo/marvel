import styled from "styled-components";

interface Props {
    label: string
    id:string
    onChange:React.ChangeEventHandler<HTMLInputElement>;
    value?:string
}

export const Input = (props: Props) => {
    return (
        <StyledDiv>
            <label htmlFor={props.id}>{props.label}</label>
            <input onChange={props.onChange} value={props.value} type="text" id={props.id}/>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    display:flex;
    flex-direction: column;
    width:50%;
    input{
        margin-top:0.2em;
        height: 3em;
        border-radius:4px;
        border: 1px solid #777;
        padding:0 1em;
        font-size:1em
    }
    
`
