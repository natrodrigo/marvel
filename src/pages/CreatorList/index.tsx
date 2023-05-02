import { useEffect, useContext, useState} from "react"
import { useApi } from "../../hooks/useApi"
import { AuthContext } from "../../context/Auth/AuthContext";
import { Input } from "../../components/Input";
import { ItemList } from "../../components/ItemList";
import { Loading } from "../../components/Loading";
import styled from "styled-components";
import { Pagination } from "../../components/Pagination";

interface CustomParams  {
    limit: number,
    offset: number,
    orderBy: string,
    nameStartsWith?:string
}

interface Char {
    id: number,
    name: string,
    imageLink: string,
}

interface ApiReturn {
    id: number,
    firstName: string,
    thumbnail: {
        path:string,
        extension:string
    }
}

export const CreatorList = () => {
    const api = useApi();
    const auth = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [creators, setCreators] = useState<Char[]>([]);
    const [orderBy, setOrderBy] = useState("firstName")
    const [name, setName] = useState("");
    const [timerId, setTimerId] = useState(0);
    const [offset, setOffset] = useState(0);
    const [totalItems, setTotalItems] = useState<null | number>(null);
    


    useEffect(() =>{
        setOffset(0);
    },[name]);

    useEffect(() => {
        setLoading(true);
        setCreators([]);
        setTotalItems(null)

        const getcreators = async () => {
            const params: CustomParams = {
                limit: 10,
                offset: offset,
                orderBy: orderBy,
            }

            if(name){
                params.nameStartsWith = name
            }
            const response = await api.get("creators", auth.keys.public, auth.keys.private, params)
            if (response.data.results[0]) {
                setTotalItems(response.data.total); 
                const toStateObject: Char[] = response.data.results.map((item: ApiReturn) => {
                    return {
                        id: item.id,
                        name: item.firstName,
                        imageLink: item.thumbnail.path + "." + item.thumbnail.extension
                    }
                })
                setLoading(false);
                setCreators(toStateObject)
            }
            else{
                setLoading(false);
                setCreators([]);
            }
        };
        getcreators();


    }, [name, offset])


    useEffect(() => {
        return () => {
            if (timerId) {
                clearTimeout(timerId);
            }
        };
    }, [timerId]);

    const handleOnChange = async (value: string) => {
        if (timerId) {
            clearTimeout(timerId);
        }

        const newTimerId = setTimeout(() => {
            setName(value);
            setTimerId(0);
        }, 1000);
        setTimerId(newTimerId);
    }

    return (
        <>
            <h2>Creators</h2>
            <Input label="Search By Name" onChange={e => { handleOnChange(e.target.value.trim()) }} id="name" />
            {loading &&
                <LoadingDiv>
                    <Loading size={80} />
                </LoadingDiv>
            }

            <ItemList items={creators} />
            { !creators[0] && !loading && <StyledP>No data found.</StyledP>}
            {
                totalItems && !loading &&
                <Pagination limit={10} total={totalItems} offset={offset} setOffset={setOffset} />
            }


        </>

    )
}

const LoadingDiv = styled.div`
    margin-top:2em;
`
const StyledP = styled.p`
margin-top:1em;`