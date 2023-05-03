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
    const [comic, setComic] = useState<CharData>({
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
            const comic = response.data.results[0];

            setComic({
                id: comic.id,
                title: comic.title,
                imageLink: comic.thumbnail.path + "." + comic.thumbnail.extension,
                description: decodeURIComponent(comic.description),
                characters: comic.characters && comic.characters.items ? comic.characters.items.map((item: { name: string }) => item.name) : [],
                series: comic.series && comic.series.name ? [comic.series.name] : [],
                creators: comic.creators && comic.creators.items ? comic.creators.items.map((item: { name: string }) => item.name) : [],
                events: comic.events && comic.events.items ? comic.events.items.map((item: { name: string }) => item.name) : [],
                details: comic.urls.filter((item: { type: string }) => item.type === "wiki")[0]?.url
            })
        }
    }

    return (
        <MainDiv>
            <h2>Comic: {comic.title}</h2>
            <Description>Description: {(comic.description !== "null" && comic.description !== "" ? comic.description : comic.title )}</Description>
            <Img src={comic.imageLink} alt={comic.title} />


            {comic.characters[0] &&
                <ItemList>
                    <Subtitle>Characters Preview:</Subtitle>
                    {comic.characters.map((characters, index) => { return <p key={"characters-" + index}> - {characters}</p> })}
                </ItemList>}

            {comic.series[0] &&
                <ItemList>
                    <Subtitle>Series Preview:</Subtitle>
                    {comic.series.map((serie, index) => { return <p key={"serie-" + index}> - {serie}</p> })}
                </ItemList>}

            {comic.creators[0] &&
                <ItemList>
                    <Subtitle>Creators Preview:</Subtitle>
                    {comic.creators.map((creator, index) => { return <p key={"creator-" + index}> - {creator}</p> })}
                </ItemList>}

            {comic.events[0] &&
                <ItemList>
                    <Subtitle>Events Preview:</Subtitle>
                    {comic.events.map((event, index) => { return <p key={"event-" + index}> - {event}</p> })}
                </ItemList>}

            <p>This displayed data is just a preview. For more details, acess <StyledA href={comic.details || "https://www.marvel.com/"} target="blank">Marvel Wiki.</StyledA></p>
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

const ItemList = styled.div`
align-self:flex-start;
`

const Subtitle = styled.h3`
margin:1em 0 .5em;
`
const Description = styled.div`
width:40%;
`

const Img = styled.img`
width:30vw;
heigth:auto;
margin-bottom:.5em;
border-left: 3vw solid ${props => props.theme.colors.tertiary};;
border-right: 3vw solid ${props => props.theme.colors.tertiary};;
border-top: 1vw solid ${props => props.theme.colors.tertiary};;
border-bottom: 1vw solid ${props => props.theme.colors.tertiary};
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