import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddService from "../../pages/AddService/AddService/AddService";
import AllLesson from "../../pages/AllLesson/AllLesson/AllLesson";
import LessonCart from "../../pages/AllLesson/LessonCart/LessonCart";
import LessonDetails from "../../pages/AllLesson/LessonDetails/LessonDetails/LessonDetails";
import Blog from "../../pages/Blog/Blog";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login/Login";
import SignUp from "../../pages/Login/SignUp/SignUp";
import MyReview from "../../pages/Reviews/MyReview/MyReview";
import ReviewCart from "../../pages/Reviews/Reviews/ReviewCart/ReviewCart";
import Reviews from "../../pages/Reviews/Reviews/Reviews";
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
                element: <LessonDetails></LessonDetails>,
                loader:({params})=>fetch(`http://localhost:5000/lessons/${params.id}`)
                
            },
            {
                path:'/reviews/:id',
                element: <Reviews></Reviews>,
                loader:({params})=>fetch(`http://localhost:5000/lessons/${params.id}`)
            },
            {
                path: '*',
                element:<ErrorPage></ErrorPage>
            },
            // {
            //     path: '/addReview/:id',
            //     element:<PrivateRoute><Reviews></Reviews></PrivateRoute>,
            //     loader:({params})=>fetch(`http://localhost:5000/addReview/${params.id}`)
                
            // },
            
            {
                path: '/addService',
                element:<AddService></AddService>
            },
            {
                path: '/myreviews',
                element:<MyReview></MyReview>
            }
          
        ]
    }
])