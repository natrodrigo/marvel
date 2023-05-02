import axios from "axios";
import md5 from "md5";

const api = axios.create({
    baseURL: import.meta.env.VITE_APP_API,
    timeout: 10000,
})




export const useApi = () => ({

    get: async (endpoint: string, publicKey: string, privateKey: string, orderBy = "name", nameStarts = "", customParams: object = {}) => {
        try {
            const ts = Number(new Date());
            const hash = md5(ts + privateKey + publicKey)

            let params = Object.assign({
                ts: ts,
                apikey: publicKey,
                hash: hash,
                orderBy: orderBy
            }, customParams)

            if(nameStarts !== ""){
                params = Object.assign(params, {
                    nameStartsWith:nameStarts
                }) 
            }
            const response = await api.get(endpoint, {
                params: params
            })
            return {
                "data": response.data.data,
                "status": response.status
            }
        }
        catch (err) {
            return {
                "data": [],
                "status": 404
            }
        }
    },

    post: async (endpoint: string, body: object, uk: string) => {



        try {
            const response = await api.post(endpoint, body, { headers: { 'User-Key': uk } })
            return response;
        }
        catch (err) {
            //pass
        }
    },
})