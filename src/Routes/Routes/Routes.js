import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AllLesson from "../../pages/AllLesson/AllLesson/AllLesson";
import Blog from "../../pages/Blog/Blog";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login/Login";
import SignUp from "../../pages/Login/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element:<Blog></Blog>
            },
            {
                path: '/signIn',
                element:<Login></Login>
            },
            {
                path: '/signUp',
                element:<SignUp></SignUp>
            },
            {
                path: '/lesson',
                element:<AllLesson></AllLesson>
            }
          
        ]
    }
])