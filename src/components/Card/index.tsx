import { Link } from "react-router-dom"
import styled from "styled-components"

interface Props {
    id: number,
    name: string,
    imageLink: string,
    endpoint:string,
}

export const Card = (props: Props) => {
    return (
        <Main>
            <Link to={`/${props.endpoint}/${props.id}`} key={props.id}>
                <Container>
                    <div>
                        <img src={props.imageLink} alt={props.name}></img>
                    </div>
                    <p>{props.name}</p>
                </Container>
            </Link>
        </Main>
    )
}

const Main = styled.div`
margin:1em 0;
padding: 0.5em;
width:50vw;
height:10rem;
border-radius:5px;
border:2px solid ${props => props.theme.colors.primary}77;
background-color:${props => props.theme.colors.tertiary};
color:${props => props.theme.colors.text};
box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.2);

a{
    color:${props => props.theme.colors.text};
    font-size:22px;
    font-weight:600;
}
`

const Container = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
div{
    height:80%;
    border:5px solid #DDD;
},
img{
    height:100%;
}
`

