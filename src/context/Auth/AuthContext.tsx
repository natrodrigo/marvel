import { createContext } from 'react';

interface Keys {
    public: string,
    private: string
}

export type AuthContextType = {
    keys: Keys
}

const INITIAL_STATE = {
    keys: {
        public: "",
        private: ""
    }

}

export const AuthContext = createContext<AuthContextType>(INITIAL_STATE);