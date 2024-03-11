import {createContext, useState} from "react";
import {useCookies} from "react-cookie";
import axios from "../api/axios";


const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({});
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const [cart, setCart] = useState({})
    const [total, setTotal] = useState(0)
    const [currentCart, setCurrentCart] = useState({})


    const logout = () => {
        setAuth({})
        setCart({})
        removeCookie('token')
    }

    const getCart = async () => {
        if (cookies.token) {
            const response = await axios.get("/api/cart",
                {
                    headers: {
                        "Authorization": ("Bearer " + cookies.token)
                    },
                });
            setCart(response.data);
            console.log("cart reset")
            console.log(response.data)
        }
    }

    return (
        <AuthContext.Provider value={{auth, setAuth, cart, setCart, getCart, logout, total, setTotal, setCurrentCart, currentCart}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;