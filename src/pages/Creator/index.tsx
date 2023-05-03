/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useContext, useState } from "react"
import { useApi } from "../../hooks/useApi";
import { AuthContext } from "../../context/Auth/AuthContext";
import styled from "styled-components";
import { Button } from "../../components/Button";

interface creatorData {
    id: number,
    firstName: string,
    fullName: string,
    imageLink: string,
    series: string[],
    comics: string[],
    events: string[],
    details: string
}


export const Creator = () => {
    const api = useApi();
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const { id } = useParams();
    const [creator, setCreator] = useState<creatorData>({
        id: 0,
        firstName: "",
        fullName: "",
        imageLink: "",
        series: [],
        comics: [],
        events: [],
        details: ""
    });

    useEffect(() => {

        getCreator();
    }, [])

    const getCreator = async () => {
        const response = await api.get(`creators/${id}`, auth.keys.public, auth.keys.private)

        if (response.data.results[0]) {
            const creator = response.data.results[0];
            setCreator({
                id: creator.id,
                firstName: creator.firstName,
                fullName: creator.fullName,
                imageLink: creator.thumbnail.path + "." + creator.thumbnail.extension,
                series: creator.series && creator.series.items ? creator.series.items.map((item: { name: string }) => item.name) : [],
                comics: creator.comics && creator.comics.items ? creator.comics.items.map((item: { name: string }) => item.name) : [],
                events: creator.events && creator.events.items ? creator.events.items.map((item: { name: string }) => item.name) : [],
                details: creator.urls.filter((item: { type: string }) => item.type === "wiki")[0]?.url
            })
        }
    }

    return (
        <MainDiv>
            <h2>Creator Name: {creator.firstName}</h2>
            <p>Full Name: {creator.fullName}</p>
            <Img src={creator.imageLink} alt={creator.firstName} />

            {creator.series[0] &&
                <ItemList>
                    <Subtitle>Series Preview:</Subtitle>
                    {creator.series.map((serie, index) => { return <p key={"serie-" + index}> - {serie}</p> })}
                </ItemList>}

            {creator.comics[0] &&
                <ItemList>
                    <Subtitle>Comics Preview:</Subtitle>
                    {creator.comics.map((comic, index) => { return <p key={"comic-" + index}> - {comic}</p> })}
                </ItemList>}

            {creator.events[0] &&
                <ItemList>
                    <Subtitle>Events Preview:</Subtitle>
                    {creator.events.map((event, index) => { return <p key={"event-" + index}> - {event}</p> })}
                </ItemList>}


            <p>This displayed data is just a preview. For more details, acess <StyledA href={creator.details || "https://www.marvel.com/"} target="blank">Marvel Wiki.</StyledA></p>
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
text-decoration:underline;
color:${props => props.theme.colors.text};
&:visited{
    color:${props => props.theme.colors.text};
}

&:hover{
    color:${props => props.theme.colors.secundary};
}
`