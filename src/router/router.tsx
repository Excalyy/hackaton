import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import News from "../pages/News";
import Auth from "../pages/Auth";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <ErrorPage/>, 
        children:[
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'profile',
                element: <Profile/>,
            },
            {
                path: 'news',
                element: <News/>,
            },
            {
                path: 'auth',
                element: <Auth/>,
            },
        ]
    },
])