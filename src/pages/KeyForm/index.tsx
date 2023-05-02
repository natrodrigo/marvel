import { useEffect, useState, useContext, SetStateAction } from "react"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { useCookie } from "../../hooks/useCookie"
import { Loading } from "../../components/Loading"
import { useApi } from "../../hooks/useApi"
import { AuthContext } from "../../context/Auth/AuthContext"
import { useNavigate } from "react-router-dom"
import { Header } from "../../components/Header"
import { Container } from "../../components/Container"
import styled from "styled-components"
import { DefaultTheme } from "styled-components"
import { Message } from "../../components/Message"



interface Props {
    setTheme: React.Dispatch<SetStateAction<DefaultTheme>>
}

interface MessageProps {
    msg: string,
    visible: boolean
}

export const KeyForm = (props: Props) => {
    const navigate = useNavigate();

    const auth = useContext(AuthContext);
    const cookieHook = useCookie();
    const api = useApi();

    const [publicKey, setPublicKey] = useState("");
    const [privateKey, setPrivateKey] = useState("");

    const [loading, setLoading] = useState(true);

    const [message, setMessage] = useState<MessageProps>({ msg: "", visible: false });

    useEffect(() => {
        verifyIfValidCookieExists();

    }, [])

    const createCookie = (value: string, numberOfDays: number) => {
        cookieHook.setItem("keys", value, numberOfDays);
    }

    const verifyIfValidCookieExists = async () => {
        const cookie = cookieHook.getItem("keys");
        if (cookie) {
            const publicCookieKey = cookie.split(",")[0].replace("public", "").replace(":", "").trim()
            const privateCookieKey = cookie.split(",")[1].replace("private", "").replace(":", "").trim()

            const valid = await verifyKeys(publicCookieKey, privateCookieKey)
            if (valid) {

                auth.keys = {
                    public: publicCookieKey,
                    private: privateCookieKey
                }
                setPublicKey("");
                setPrivateKey("");
                navigate("/char-list");
            }
        }
        else {
            setLoading(false);
        }
    }

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        if (publicKey && privateKey) {

            const valid = await verifyKeys(publicKey, privateKey)
            if (valid) {
                createCookie(`public:${publicKey}, private:${privateKey}`, 1);
                auth.keys = {
                    public: publicKey,
                    private: privateKey
                }
                navigate("/char-list")
            }
            else {
                setLoading(false);

                setMessage({ msg: 'Invalid keys.', visible: true })
                setTimeout(() => {
                    setMessage({ msg: "", visible: false })
                }, 2000)
            }

        }
        else {
            //TODO - Criar depois um aviso de formulário decente!
            setLoading(false);
            setMessage({ msg: 'You need to enter a public and private key', visible: true })
            setTimeout(() => {
                setMessage({ msg: "", visible: false })
            }, 2000)
        }
    }

    const verifyKeys = async (publicKey: string, privateKey: string) => {
        const response = await api.get("characters", publicKey, privateKey)
        if (response.status == 200) {
            return true;
        }
        else return false;

    }

    return (
        <>
            <Header selected="" setTheme={props.setTheme} />
            <Container>
                <>
                    {
                        !loading &&
                        <StyledForm onSubmit={(e) => { handleFormSubmit(e) }}>
                            <Input id="public_key" label="Public Key" value={publicKey} onChange={e => setPublicKey(e.target.value.trim())} />
                            <Input id="secret_key" label="Private Key" value={privateKey} onChange={e => setPrivateKey(e.target.value.trim())} />
                            <Button label="Validar Chaves" onClick={() => { handleFormSubmit }} />

                        </StyledForm>
                    }

                    {
                        loading && <Loading size={50} />
                    }
                    <Message visible={message.visible} msg={message.msg} />
                </>

            </Container>
        </>

    )


}

const StyledForm = styled.form`
    width:80%;
    display:flex;
    flex-direction:column;   
    align-items:center;
    margin-top:3em;
    gap:2em;
`