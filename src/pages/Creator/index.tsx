import { useParams } from "react-router-dom";
import { useEffect, useContext, useState } from "react"
import { useApi } from "../../hooks/useApi";
import { AuthContext } from "../../context/Auth/AuthContext";

interface CharData {
    id: number,
    firstName: string,
    fullName:string,
    imageLink: string,
    series: string[],
    details: string
}


export const Creator = () => {
    const api = useApi();
    const auth = useContext(AuthContext)
    const { id } = useParams();
    const [char, setChar] = useState<CharData>({
        id: 0,
        firstName: "",
        fullName:"",
        imageLink: "",
        series: [],
        details: ""
    });

    useEffect(() => {

        getCreator();
    }, [])

    const getCreator = async () => {
        console.log(id)
        const response = await api.get(`creators/${id}`, auth.keys.public, auth.keys.private)
        console.log(response)

        if (response.data.results[0]) {
            const char = response.data.results[0];
            setChar({
                id: char.id,
                firstName: char.firstName,
                fullName:char.fullName,
                imageLink: char.thumbnail.path + "." + char.thumbnail.extension,
                series: char.series.items.map((item: {name:string}) => item.name),
                details: char.urls.filter((item: {type:string}) => item.type === "wiki")[0]?.url
            })
        }
    }

    return (
        <div>
            <h2>Criador: {char.firstName}</h2>
            <p>Nome completo: {char.fullName}</p>
            <img src={char.imageLink} alt={char.firstName} />
            {char.series.map((serie, index) => { return <p key={"serie-" + index}>{serie}</p> })}
            <p>Para mais detalhes na wiki oficial da Marvel, <a href={char.details} target="blank">clique aqui.</a></p>
        </div>
    )
}