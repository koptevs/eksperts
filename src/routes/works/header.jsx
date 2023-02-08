import React from "react"

import {
    Text,
    View,
    StyleSheet,
    Font,
    Svg,
    Line,
    Image,
} from "@react-pdf/renderer"

import { fontSans, fontSansBold } from "./variables"

const styles = StyleSheet.create({
    header: {
        // backgroundColor: "tomato",
        height: "2cm",
        display: "flex",
        flexDirection: "row",
        border: "1px solid black",
        borderBottom: "1px solid black",
    },
    header__col1: {
        // backgroundColor: "green",
        height: "100%",
        flex: 1,
        display: "flex",
        flexDirection: "column",
    },
    header__col1__top: {
        flex: 1,
        // backgroundColor: "yellow",
        textAlign: "center",
        padding: "1mm",
        borderBottom: "1px solid blue",
    },
    header__col1__top_top: {
        fontFamily: fontSansBold,
        fontSize: "13px",
        letterSpacing: "0.3px",
    },

    header__col1__top_bottom: { fontFamily: fontSans, fontSize: "10px" },
    header__col1__bottom: {
        flex: 1,
        // backgroundColor: "lime",
    },

    header_col2: {
        // backgroundColor: "rgba(250,50,50,0.6)",
        height: "100%",
        flexBasis: "5cm",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: "3mm",
    },
})

const Header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.header__col1}>
                <View style={styles.header__col1__top}>
                    <Text style={styles.header__col1__top_top}>
                        LATVIJAS RŪPNIEKU TEHNISKĀS DROŠĪBAS EKSPERTU APVIENĪBA
                    </Text>
                    <Text style={styles.header__col1__top_bottom}>
                        TUV Rheiland grupa, SIA
                    </Text>
                </View>
                <View style={styles.header__col1__bottom}>
                    <Text></Text>
                </View>
            </View>
            <View style={styles.header_col2}>
                <Image src="../../assets/logo.jpg" />
            </View>
        </View>
    )
}

export default Header
