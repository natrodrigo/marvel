/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useContext, useState } from "react"
import { useApi } from "../../hooks/useApi";
import { AuthContext } from "../../context/Auth/AuthContext";
import styled from "styled-components";
import { Button } from "../../components/Button";

interface CharData {
    id: number,
    name: string,
    imageLink: string,
    description: string,
    series: string[],
    comics: string[],
    events: string[],
    details: string
}


export const Char = () => {

    const api = useApi();
    const auth = useContext(AuthContext)
    const navigate = useNavigate();

    const { id } = useParams();
    const [char, setChar] = useState<CharData>({
        id: 0,
        name: "",
        imageLink: "",
        description: "",
        series: [],
        comics: [],
        events: [],
        details: ""
    });

    useEffect(() => {
        getCharacter();
    }, [])

    const getCharacter = async () => {
        const response = await api.get(`characters/${id}`, auth.keys.public, auth.keys.private)

        if (response.data.results[0]) {
            const char = response.data.results[0];
            setChar({
                id: char.id,
                name: char.name,
                imageLink: char.thumbnail.path + "." + char.thumbnail.extension,
                description: char.description,
                series: char.series && char.series.items ? char.series.items.map((item: { name: string }) => item.name) : [],
                comics: char.comics && char.comics.items ? char.comics.items.map((item: { name: string }) => item.name) : [],
                events: char.events && char.events.items ? char.events.items.map((item: { name: string }) => item.name) : [],
                details: char.urls.filter((item: { type: string }) => item.type === "wiki")[0]?.url
            })
        }
    }

    return (
        <MainDiv>
            <h2>Character: {char.name}</h2>
            <p>Description: {char.name}</p>
            <Img src={char.imageLink} alt={char.name} />

            {char.series[0] &&
                <ListDiv>
                    <Subtitle>Series Preview:</Subtitle>
                    {char.series.map((serie, index) => { return <p key={"serie-" + index}> - {serie}</p> })}
                </ListDiv>}

            {char.comics[0] &&
                <ListDiv>
                    <Subtitle>Comics Preview:</Subtitle>
                    {char.comics.map((serie, index) => { return <p key={"serie-" + index}> - {serie}</p> })}
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
    margin-bottom:.5em;
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
