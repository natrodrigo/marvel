/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useContext, useState } from "react"
import { useApi } from "../../hooks/useApi";
import { AuthContext } from "../../context/Auth/AuthContext";
import styled from "styled-components";
import { Button } from "../../components/Button";

interface CharData {
    id: number,
    title: string,
    imageLink: string,
    description: string,
    characters: string[],
    series: string[],
    creators: string[],
    events: string[],
    details: string
}


export const Comic = () => {
    const api = useApi();
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const { id } = useParams();
    const [char, setChar] = useState<CharData>({
        id: 0,
        title: "",
        imageLink: "",
        description: "",
        characters: [],
        series: [],
        creators: [],
        events: [],
        details: ""
    });

    useEffect(() => {

        getCharacter();
    }, [])

    const getCharacter = async () => {

        const response = await api.get(`comics/${id}`, auth.keys.public, auth.keys.private)

        if (response.data.results[0]) {
            const char = response.data.results[0];
            
            setChar({
                id: char.id,
                title: char.title,
                imageLink: char.thumbnail.path + "." + char.thumbnail.extension,
                description: char.description,
                characters: char.characters && char.characters.items ? char.characters.items.map((item: { name: string }) => item.name) : [],
                series: char.series && char.series.name ? [char.series.name] : [],
                creators: char.creators && char.creators.items ? char.creators.items.map((item: { name: string }) => item.name) : [],
                events: char.events && char.events.items ? char.events.items.map((item: { name: string }) => item.name) : [],
                details: char.urls.filter((item: { type: string }) => item.type === "wiki")[0]?.url
            })
        }
    }   

    return (
        <MainDiv>
            <h2>Comic: {char.title}</h2>
            <p>Description: {char.title}</p>
            <Img src={char.imageLink} alt={char.title} />

            
            {char.characters[0] &&
                <ListDiv>
                    <Subtitle>Characters Preview:</Subtitle>
                    {char.characters.map((serie, index) => { return <p key={"serie-" + index}> - {serie}</p> })}
                </ListDiv>}

            {char.series[0] &&
                <ListDiv>
                    <Subtitle>Series Preview:</Subtitle>
                    {char.series.map((serie, index) => { return <p key={"serie-" + index}> - {serie}</p> })}
                </ListDiv>}

            {char.creators[0] &&
                <ListDiv>
                    <Subtitle>Creators Preview:</Subtitle>
                    {char.creators.map((serie, index) => { return <p key={"serie-" + index}> - {serie}</p> })}
                </ListDiv>}

            {char.events[0] &&
                <ListDiv>
                    <Subtitle>Events Preview:</Subtitle>
                    {char.events.map((serie, index) => { return <p key={"serie-" + index}> - {serie}</p> })}
                </ListDiv>}

            <p>This displayed data is just a preview. For more details, acess <StyledA href={char.details || "https://www.marvel.com/"} target="blank">Marvel Wiki.</StyledA></p>
            <Button label="Return" onClick={() => navigate(-1)} />
        </MainDiv>
    )
}

const MainDiv = styled.div`
    display:flex;
    flex-direction:column;
    gap:1em;
    align-items:center;
`

const ListDiv = styled.div`
align-self:flex-start;
`

const Subtitle = styled.h3`
margin:1em 0 .5em;
`

const Img = styled.img`
    width:20vw;
    heigth:auto;
    margin-bottom:2em;
`

const StyledA = styled.a`
cursor:pointer;
color:${props => props.theme.colors.text};
text-decoration:underline;
&:visited{
    color:${props => props.theme.colors.text};
}

&:hover{
    color:${props => props.theme.colors.secundary};
}
`