import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AllLesson from "../../pages/AllLesson/AllLesson/AllLesson";
import LessonCart from "../../pages/AllLesson/LessonCart/LessonCart";
import LessonDetails from "../../pages/AllLesson/LessonDetails/LessonDetails/LessonDetails";
import Blog from "../../pages/Blog/Blog";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login/Login";
import SignUp from "../../pages/Login/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
            },
            {
                path: '/lesson/:id',
                element:<PrivateRoute> <LessonDetails></LessonDetails></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/lessons/${params.id}`)
                
            }
          
        ]
    }
])