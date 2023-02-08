import React from "react"
import ReactDOM from "react-dom/client"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

// import "./index.css"

import ErrorPage from "./error-page"
import { About, Contacts, Details, Root, Indeks, Works } from "./routes"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Indeks />,
            },
            {
                path: "contacts",
                element: <Contacts />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "contacts/:id",
                element: <Details />,
            },
            {
                path: "works",
                element: <Works />,
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
