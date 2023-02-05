import React from "react"

import {
    Outlet,
    useLoaderData,
    Form,
    NavLink,
    useNavigation,
    useSubmit,
} from "react-router-dom"
import { CssBaseline, ThemeProvider } from "@mui/material"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

import { ColorModeContext, useMode } from "../../theme"

import { Topbar, Sidebar } from "../../layouts"
import "../../index.css"

const Root = () => {
    const [theme, colorMode] = useMode()
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <main className="content">
                        <Container maxWidth={theme.settings.containerWidth}>
                            <Topbar />
                            <h1>Root</h1>
                            <Outlet />
                            <Sidebar />
                        </Container>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default Root
