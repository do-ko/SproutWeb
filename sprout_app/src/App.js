import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage/>,
        },
        {
            path: "/test",
            element: <div>Test!</div>,
        },
    ]);

    return (
        <>
          <RouterProvider router={router} />
         </>
    );
}

export default App;
