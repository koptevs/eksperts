import React from "react"

import { Text, View, StyleSheet, Image } from "@react-pdf/renderer"

import { fontSans, fontSansBold } from "./variables"

const styles = StyleSheet.create({
    meta: {
        // backgroundColor: "tomato",
        height: "8cm",
        display: "flex",
        flexDirection: "column",
        border: "1px solid tomato",
        padding: "1mm",
    },
    meta_1: {
        height: "100%",
        border: "1px solid green",
        flexDirection: "row",
        padding: "1mm",
    },
    meta_11: {
        flex: 1,
        border: "1px solid yellow",
        flexDirection: "column",
        padding: "1mm",
    },
    meta_111: {
        border: "1px solid tomato",
        flex: 1,
        fontFamily: fontSansBold,
        fontSize: "16px",
        justifyContent: "center",
        flexDirection: "row",
    },
    meta_112: {
        border: "1px solid tomato",
        flex: 2,
        flexDirection: "row",
        padding: "1mm",
    },
    meta_1121: {
        border: "1px solid blue",
        width: "10cm",
        fontFamily: fontSans,
        fontSize: "14px",
    },
    meta_11211: {},
    meta_11212: {},

    meta_1122: {
        border: "1px solid blue",
        fontFamily: fontSans,
        fontSize: "14px",
        flex: 1,
    },

    meta_11221: {},
    meta_112211: {},
    meta_112212: {},

    meta_11222: {},
    meta_112221: {},
    meta_112222: {},

    meta_12: {
        width: "25mm",
        border: "1px solid yellow",
    },

    meta_2: {
        height: "100%",
        border: "1px solid green",
    },
    meta_21: {},
    meta_211: {},
    meta_212: {},

    meta_22: {},
    meta_221: {},
    meta_222: {},

    meta_3: {},
    meta_31: { flexDirection: "row" },
    meta_312: { border: "1px solid tomato", height: "7mm", width: "10mm" },
    meta_313: { border: "1px solid tomato", height: "7mm", width: "7mm" },
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
                                <View style={styles.meta_112222}></View>
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
                    <View style={styles.meta_211}></View>
                    <View style={styles.meta_212}></View>
                </View>
                <View style={styles.meta_22}>
                    <View style={styles.meta_221}></View>
                    <View style={styles.meta_222}></View>
                </View>
            </View>
            <View style={styles.meta_3}>
                <View style={styles.meta_31}>
                    <View style={styles.meta_312}></View>
                    <View style={styles.meta_313}></View>
                    <View style={styles.meta_313}></View>
                    <View style={styles.meta_313}></View>
                    <View style={styles.meta_313}></View>
                    <View style={styles.meta_313}></View>
                    <View style={styles.meta_313}></View>
                    <View style={styles.meta_313}></View>
                    <View style={styles.meta_313}></View>
                    <View style={styles.meta_313}></View>
                    <View style={styles.meta_313}></View>
                    <View style={styles.meta_313}></View>
                </View>
            </View>
        </View>
    )
}

export default Meta
