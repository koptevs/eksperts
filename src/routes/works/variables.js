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
export const registerFonts = (Font) => {
    Font.register({
        family: "Pt Serif",
        src: "https://fonts.gstatic.com/s/ptserif/v17/EJRVQgYoZZY2vCFuvDFR.ttf",
    })
    Font.register({
        family: "Source Sans Pro",
        src: "https://fonts.gstatic.com/s/sourcesanspro/v21/6xK3dSBYKcSV-LCoeQqfX1RYOo3aPw.ttf",
    })
    Font.register({
        family: "Source Sans Pro Bold",
        src: "https://fonts.gstatic.com/s/sourcesanspro/v21/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vAkA.ttf",
    })
}

// $ curl -X GET https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@700
// https://fonts.gstatic.com/s/sourcesanspro/v21/6xK3dSBYKcSV-LCoeQqfX1RYOo3aPw.ttf - Source Sans Pro 400
// https://fonts.gstatic.com/s/sourcesanspro/v21/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vAkA.ttf  - Source Sans Pro 700
// https://fonts.gstatic.com/s/sourcesanspro/v21/6xKwdSBYKcSV-LCoeQqfX1RYOo3qPZZclRdr.ttf - - Source Sans Pro Italic 700
// Lato Arimo
export const fontSans = "Source Sans Pro"
export const fontSansBold = "Source Sans Pro Bold"
