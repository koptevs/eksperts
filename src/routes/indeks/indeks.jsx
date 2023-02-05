import React from "react"

import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { Box } from "@mui/system"

import { useMode } from "../../theme"

const Indeks = () => {
    const [theme, colorMode] = useMode()
    return (
        <>
            <div>Indeks</div>
            <Typography variant="h1">
                Heading 1 - color comes from the theme settings for headings
            </Typography>
            <Box
                sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: theme.palette.secondary[300],
                }}
            >
                Box - inline styles with sx property - color imported from
                theme.js file
            </Box>

            <Button variant="contained" color="topbarBg">
                Contained
            </Button>
        </>
    )
}

export default Indeks
