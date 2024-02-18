import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import {LogInPage} from "./pages/LogInPage";
import {useContext} from "react";
import AuthContext from "./context/AuthProvider";
import {RegisterPage} from "./pages/RegisterPage";
import {PlantsPage} from "./pages/PlantsPage";


function App() {
    const {logout} = useContext(AuthContext);

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
        }
    ]);

    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
}

export default App;
