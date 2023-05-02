import { useParams } from "react-router-dom";
import { useEffect, useContext, useState } from "react"
import { useApi } from "../../hooks/useApi";
import { AuthContext } from "../../context/Auth/AuthContext";

interface Char {
    id: number,
    name: string,
    imageLink: string,
    description: string,
    series: string[],
    details: string
}


export const Char = () => {
    const api = useApi();
    const auth = useContext(AuthContext)
    const { id } = useParams();
    const [char, setChar] = useState<Char>({
        id: 0,
        name: "",
        imageLink: "",
        description: "",
        series: [],
        details: ""
    });

    useEffect(() => {

        getCharacter();
    }, [])

    const getCharacter = async () => {
        const response = await api.get(`characters/${id}`, auth.keys.public, auth.keys.private)
        console.log(response)

        if (response.data.results[0]) {
            const char = response.data.results[0];
            setChar({
                id: char.id,
                name: char.name,
                imageLink: char.thumbnail.path + "." + char.thumbnail.extension,
                description: char.description,
                series: char.series.items.map((item: any) => item.name),
                details: char.urls.filter((item: any) => item.type === "wiki")[0]?.url
            })
        }
    }

    return (
        <div>
            <h2>Personagem: {char.name}</h2>
            <p>Descrição: {char.name}</p>
            <img src={char.imageLink} alt={char.name} />
            {char.series.map((serie, index) => { return <p key={"serie-" + index}>{serie}</p> })}
            <p>Para mais detalhes na wiki oficial da Marvel, <a href={char.details} target="blank">clique aqui.</a></p>
        </div>
    )
}