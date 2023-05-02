import { AuthContext } from "./AuthContext"


interface Keys {
    public:string,
    private:string
}


export const AuthProvider = ({ children }: { children: JSX.Element }) => {

    const keys:Keys =  {
        public:"",
        private:""
    };
    
    

    return (
        <AuthContext.Provider value={{ keys }}>
            {children}
        </AuthContext.Provider>
    )
}