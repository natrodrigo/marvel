import axios from "axios";
import md5 from "md5";

const api = axios.create({
    baseURL: import.meta.env.VITE_APP_API,
    timeout: 10000,
})




export const useApi = () => ({

    get: async (endpoint: string, publicKey: string, privateKey: string, customParams: object = {}) => {
        try {
            const ts = Number(new Date());
            const hash = md5(ts + privateKey + publicKey)

            const params = Object.assign({
                ts: ts,
                apikey: publicKey,
                hash: hash,
            }, customParams)

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
    }
})