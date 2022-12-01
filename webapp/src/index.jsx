import React from 'react';
import Login from "./pages/Login";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Main from "./pages/Main";

const router = createBrowserRouter([
    {
        path: "/", element: <Login />,
    },
    {
        path: "main", element: <Main />,
    },
]);

createRoot(document.querySelector('#root')).render(
    <RouterProvider router={router} />
);