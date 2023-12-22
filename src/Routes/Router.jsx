import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";



import About from "../Pages/About/About";

import Login from "../Pages/Shared/Login/Login";
import Register from "../Pages/Shared/Register/Register";

import Home from "../Pages/Home/Home";
import Gallery from "../Pages/Gallery/Gallery";
import Footer from "../Pages/Footer/Footer";


const router = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('event.json')
            },
        
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/gallery',
                element:<Gallery></Gallery>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/footer',
                element:<Footer></Footer>
            }
        ]
    }
]);
export default router;