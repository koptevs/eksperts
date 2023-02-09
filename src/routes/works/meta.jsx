import React from "react"

import { Text, View, StyleSheet, Image, Font } from "@react-pdf/renderer"

import { fontSans, fontSansBold, registerFonts } from "./variables"
registerFonts(Font)
const text = "Test!"
const regNr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
const valditajsColWidth = "10cm"
const styles = StyleSheet.create({
    meta: {
        // backgroundColor: "tomato",
        height: "20cm",
        display: "flex",
        flexDirection: "column",
        // border: "1px solid tomato",
        // padding: "1mm",
    },
    meta_1: {
        height: "22mm",
        // border: "1px solid green",
        flexDirection: "row",
        // padding: "1mm",
    },
    meta_11: {
        flex: 1,
        height: "100%",
        // border: "1px solid yellow",
        flexDirection: "column",
        // padding: "1mm",
    },
    meta_12: {
        width: "20.7mm",
        height: "14.8mm",
        // border: "1px solid yellow",
    },
    meta_111: {
        height: "14mm",
        // border: "1px solid tomato",
        flex: 1,
        fontFamily: fontSansBold,
        fontSize: "16px",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    meta_112: {
        // border: "1px solid tomato",
        height: "10mm",
        // flex: 1,
        flexDirection: "row",
        fontFamily: fontSansBold,
        // padding: "1mm",
    },
    meta_1121: {
        border: "0.3mm solid black",
        borderBottom: "none",
        width: valditajsColWidth,
        height: "100%",
        paddingLeft: "2mm",
    },
    meta_11211: {
        // height: "0.8cm",
        // border: "1px solid red",
        fontSize: "10px",
    },
    meta_11212: {
        // height: "0.8cm",
        // border: "1px solid red",
        textAlign: "center",
        fontSize: "11px",
        marginBottom: "1mm",
    },

    meta_1122: {
        height: "100%",
        flex: 1,
        flexDirection: "row",
    },

    meta_11221: { width: "21mm", flexDirection: "column" },
    meta_112211: { flex: 1, paddingLeft: "5mm", fontSize: "10px" },
    meta_112212: { flex: 1 },

    meta_11222: {
        flex: 1,
        flexDirection: "column",
    },
    meta_112221: {
        fontSize: "10px",
        flex: 1,
        borderBottom: "0.3mm solid black",
        textAlign: "center",
    },
    meta_112222: { flex: 1, fontSize: "10px", textAlign: "center" },

    meta_2: {
        height: "9mm",
        // border: "1px solid green",
        flexDirection: "row",
        fontFamily: fontSansBold,
        fontSize: "10px",
    },
    meta_21: {
        width: valditajsColWidth,
        border: "0.3mm solid black",
        paddingBottom: "2mm",
    },
    meta_211: { paddingLeft: "2mm", fontSize: "10px" },
    meta_212: { textAlign: "center", fontSize: "11px" },

    meta_22: { flex: 1, border: "0.3mm solid black", borderLeft: "none" },
    meta_221: { paddingLeft: "2mm", fontSize: "9px" },
    meta_222: { textAlign: "center", paddingBottom: "2mm" },

    meta_3: {
        height: "7mm",
    },
    meta_31: {
        width: valditajsColWidth,
        flexDirection: "row",
        justifyContent: "flex-end",
        fontFamily: fontSansBold,
        fontSize: "10px",
    },
    meta_312: {
        justifyContent: "center",
        alignItems: "center",
        height: "5mm",
        width: "15mm",
    },
    meta_313: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderLeft: "0.3mm solid black",
        borderBottom: "0.3mm solid black",
        height: "5mm",
    },
    meta_314: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderLeft: "0.3mm solid black",
        borderBottom: "0.3mm solid black",
        borderRight: "0.3mm solid black",
        height: "5mm",
    },
})

const Meta = () => {
    return (
        <View style={styles.meta}>
            <View style={styles.meta_1}>
                <View style={styles.meta_11}>
                    <View style={styles.meta_111}>
                        <Text>LIFTA TEHNISKĀS PĀRBAUDES PROTOKOLS</Text>
                        <Text>Nr. 04.45s</Text>
                    </View>
                    <View style={styles.meta_112}>
                        <View style={styles.meta_1121}>
                            <View style={styles.meta_11211}>
                                <Text>Valditājs</Text>
                            </View>
                            <View style={styles.meta_11212}>
                                <Text>SIA “RNP tralala”</Text>
                            </View>
                        </View>
                        <View style={styles.meta_1122}>
                            <View style={styles.meta_11221}>
                                <View style={styles.meta_112211}>
                                    <Text>Līguma Nr</Text>
                                </View>
                                <View style={styles.meta_112212}></View>
                            </View>
                            <View style={styles.meta_11222}>
                                <View style={styles.meta_112221}>
                                    <Text>B6-2020/439</Text>
                                </View>
                                <View style={styles.meta_112222}>
                                    <Text>Liguma Datums </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.meta_12}>
                    <Image src="../../assets/latak_logo.jpg" />
                </View>
            </View>
            <View style={styles.meta_2}>
                <View style={styles.meta_21}>
                    <View style={styles.meta_211}>
                        <Text>Adrese</Text>
                    </View>
                    <View style={styles.meta_212}>
                        <Text>Hipokrāta iela 3, Rīga, LV-1079</Text>
                    </View>
                </View>
                <View style={styles.meta_22}>
                    <View style={styles.meta_221}>
                        <Text>Pārbaudes adrese:</Text>
                    </View>
                    <View style={styles.meta_222}>
                        <Text>Lielvardes iela 68, Rīga, LV-1006</Text>
                    </View>
                </View>
            </View>
            <View style={styles.meta_3}>
                <View style={styles.meta_31}>
                    <View style={styles.meta_312}>
                        <Text>Reģ. Nr.:</Text>
                    </View>
                    <View style={styles.meta_313}>
                        <Text>{regNr[0]}</Text>
                    </View>
                    <View style={styles.meta_313}>
                        <Text>{regNr[1]}</Text>
                    </View>
                    <View style={styles.meta_313}>
                        <Text>{regNr[2]}</Text>
                    </View>
                    <View style={styles.meta_313}>
                        <Text>{regNr[3]}</Text>
                    </View>
                    <View style={styles.meta_313}>
                        <Text>{regNr[4]}</Text>
                    </View>
                    <View style={styles.meta_313}>
                        <Text>{regNr[5]}</Text>
                    </View>
                    <View style={styles.meta_313}>
                        <Text>{regNr[6]}</Text>
                    </View>
                    <View style={styles.meta_313}>
                        <Text>{regNr[7]}</Text>
                    </View>
                    <View style={styles.meta_313}>
                        <Text>{regNr[8]}</Text>
                    </View>
                    <View style={styles.meta_313}>
                        <Text>{regNr[9]}</Text>
                    </View>
                    <View style={styles.meta_314}>
                        <Text>{regNr[10]}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Meta
