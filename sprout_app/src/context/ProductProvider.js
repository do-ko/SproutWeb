import {createContext} from "react";
import axios from "../api/axios";


const ProductContext = createContext({})

export const ProductProvider = ({children}) => {

    const getPlants = async () => {
        const response = await axios.get("/api/plants")
        console.log(response.data)
        return response.data
    }

    const getGrounds = async () => {
        const response = await axios.get("/api/grounds")
        console.log(response.data)
        return response.data
    }

    return (
        <ProductContext.Provider value={{getPlants, getGrounds}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext;