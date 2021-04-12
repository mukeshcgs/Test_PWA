import * as React from 'react';
import { Platform, View, Text, Button, TextInput, StyleSheet, TouchableOpacity, Dimensions, Image, ImageBackground } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { Formik } from 'formik';
import * as yup from 'yup'

import Slide from "./Slide";
const { width, height } = Dimensions.get("window");
const picture = {
    src: require('../../assets/undraw_develop_app.png'),
    width: 968,
    height: 840
}

const SliderScreen = ({ navigation }) => {
    return (<View style={styles.container}>
        <View style={styles.upper}>
        </View>

        <View style={styles.slider}>
            <ScrollView
                horizontal
                snapToInterval={width}
                decelerationRate="fast"
                showsHorizontalScrollIndicator={true}
                bounces={true}
            >
                <Slide label="Signup" />
                <Slide label="Login" />
                <Slide label="Enjoy" />
            </ScrollView>
        </View>

    </View >
    );
}
export default SliderScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        paddingHorizontal: (Platform.OS === 'web') ? '20vw' : 10,
    },
    upper: {
        flex: 1,
        width: "100%",
        alignItems: "center",
    },
    image: {
        width: 300,
        height: 400,
        justifyContent: 'center',
        alignItems: 'center',
    },
    companyName: {
        fontSize: 25,
        paddingVertical: 10,
        position: 'absolute',
        backgroundColor: "#13ea8c",
        paddingHorizontal: 15,
        color: "white",
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
    },
    welcomeText: {
        fontSize: 16,
        color: "gray",
        paddingVertical: 10,
    },

    containerImg: {
        flex: 1,
        width: (Platform.OS === 'web') ? '10%' : "100%",
        alignItems: "flex-start",
        alignContent: "flex-start"
    },
    slider: {
        // backgroundColor: "cyan",
        flex: 1,
    },

    footer: {
        backgroundColor: 'blue',
        shadowColor: '#000',
        borderRadius: 6,
        flex: 1,
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        alignItems: 'center',
        borderColor: "#cccccc",
        backgroundColor: "white",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 6,
        elevation: 15,
        overflow: 'hidden'

    },
    buttonDefault: {
        borderColor: "gray",
        backgroundColor: "#cccccc",
        borderWidth: 0,
        paddingHorizontal: 50,
        paddingVertical: 12,
        borderRadius: 25,
    },
    button: {
        borderColor: "gray",
        backgroundColor: "#13ea8c",
        borderWidth: 0,
        paddingHorizontal: 50,
        paddingVertical: 12,
        borderRadius: 25,
    },
    cta: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10
    },
    btnText: {
        color: "white",
        textAlign: "center",
        fontSize: 18,
        letterSpacing: 1
    },
    lable: {
        color: "gray",
        textAlign: "left",
        fontSize: 14,
        marginBottom: 4,
        marginTop: 15,
        marginLeft: 15,
    },
    input: {
        borderColor: "#cccccc",
        backgroundColor: "#f9f9f9",
        borderWidth: 1,
        color: "black",
        borderRadius: 25,
        width: "100%",
        fontSize: 16,
        letterSpacing: 0.5,
        padding: 12,
        paddingHorizontal: 25,
        marginBottom: 5,
    },
    err: {
        fontSize: 16,
        color: 'red',
        paddingHorizontal: 25,
        marginBottom: 15,
    },
});
