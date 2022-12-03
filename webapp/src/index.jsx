import React from 'react';
import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Header from "./components/Header/Header";
import Description from "./components/Description/Description";
import "./components/styles/media.css"

const router = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "main", element: <Main /> },
    { path: "*", element: <NotFound />}
]);

createRoot(document.querySelector('#root')).render(
    <div className="content-frame">
        <Header />
        <Description />
        <RouterProvider router={router}/>
    </div>
);