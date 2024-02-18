import {createContext, useState} from "react";
import {useCookies} from "react-cookie";


const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [cookies, setCookie] = useCookies(['token']);

    const logout = () => {
        setAuth({})
        setCookie('token', "")
    }

    return (
        <AuthContext.Provider value={{ auth, setAuth, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;