import React from "react"
import ReactDOM from "react-dom"
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
    Font,
    Svg,
    Line,
} from "@react-pdf/renderer"

import { fontSans, fontSansBold, registerFonts } from "./variables"
registerFonts(Font)
import Header from "./header"
import Meta from "./meta"

// Create styles
const styles = StyleSheet.create({
    page: {
        backgroundColor: "#ffffff",
        color: "black",
        padding: "1cm",
        paddingTop: "1cm",
        flexDirection: "column",
    },
    viewer: {
        width: window.innerWidth, //the pdf viewer will take up all of the width and height
        height: window.innerHeight,
    },

    section: {
        display: "flex",
        flexDirection: "row",
        marginRight: 10,
        marginLeft: 10,
        height: "2cm",
        // padding: 10,
    },
    text: {
        fontSize: 10,
        fontFamily: "Pt Serif",
        fontWeight: "bold",
    },
    test1: {
        border: "0.5px solid black",
        width: "100%",
        padding: "5px",
        textAlign: "center",
        backgroundColor: "#efefef",
        fontFamily: fontSans,
        fontSize: "10px",
    },
    test2: {
        border: "0.5px solid black",
        width: "100%",
        padding: "5px",
        textAlign: "center",
        backgroundColor: "#efefef",
        fontFamily: fontSansBold,
    },

    viewTest: {
        width: "100%",
        height: "2cm",
        border: "1px solid red",
        // flex: 1,
    },
    gap: {
        height: "0.5cm",
    },
})

// Create Document Component
function Works() {
    return (
        <PDFViewer style={styles.viewer}>
            <Document>
                <Page size="A4" style={styles.page}>
                    <Header />
                    {/* <View style={styles.gap}></View> */}
                    <Meta />
                </Page>
            </Document>
        </PDFViewer>
    )
}
export default Works
