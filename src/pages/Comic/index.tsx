import { useParams } from "react-router-dom";
import { useEffect, useContext, useState } from "react"
import { useApi } from "../../hooks/useApi";
import { AuthContext } from "../../context/Auth/AuthContext";

interface CharData {
    id: number,
    title: string,
    imageLink: string,
    description: string,
    series?: string[],
    details: string
}


export const Comic = () => {
    const api = useApi();
    const auth = useContext(AuthContext)
    const { id } = useParams();
    const [char, setChar] = useState<CharData>({
        id: 0,
        title: "",
        imageLink: "",
        description: "",
        series: [],
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
                series: char.series.items ? char.series.items.map((item: {name:string}) => item.name):[],
                details: char.urls.filter((item: {type:string}) => item.type === "wiki")[0]?.url
            })
        }
    }

    return (
        <div>
            <h2>Comic: {char.title}</h2>
            <p>Description: {char.title}</p>
            <img src={char.imageLink} alt={char.title} />
            {char.series && char.series.map((serie, index) => { return <p key={"serie-" + index}>{serie}</p> })}
            <p>Para mais detalhes na wiki oficial da Marvel, <a href={char.details} target="blank">clique aqui.</a></p>
        </div>
    )
}