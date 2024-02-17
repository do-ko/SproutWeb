import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import {LogInPage} from "./pages/LogInPage";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage/>,
        },
        {
            path: "/login",
            element: <LogInPage/>
        },
    ]);

    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
}

export default App;
