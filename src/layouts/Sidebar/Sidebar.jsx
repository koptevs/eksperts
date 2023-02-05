import React from "react"
import { Link as RouterLink } from "react-router-dom"
import Link from "@mui/material/Link"

const Sidebar = () => {
    return (
        <div>
            <Link component={RouterLink} to="/">
                <p>Sidebar</p>
            </Link>
        </div>
    )
}

export default Sidebar
