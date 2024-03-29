import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import {LogInPage} from "./pages/LogInPage";
import {useContext, useEffect} from "react";
import AuthContext from "./context/AuthProvider";
import {RegisterPage} from "./pages/RegisterPage";
import {PlantsPage} from "./pages/PlantsPage";
import {useCookies} from "react-cookie";
import {CartPage} from "./pages/CartPage";
import {CheckoutPage} from "./pages/CheckoutPage";


function App() {
    const {getCart} = useContext(AuthContext);

    useEffect(() => {
        getCart();
    }, [])

    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage/>,
        },
        {
            path: "/login",
            element: <LogInPage/>
        },
        {
            path: "/register",
            element: <RegisterPage/>
        },
        {
            path: "/plants",
            element: <PlantsPage/>
        },
        {
            path: "/cart",
            element: <CartPage/>
        },
        {
            path: "/checkout",
            element: <CheckoutPage/>
        }
    ]);

    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
}

export default App;
