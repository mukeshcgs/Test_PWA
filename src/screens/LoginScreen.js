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
let img = require('../../assets/undraw_develop_app.png');
// const webImg = require('./assets/undraw_develop_app.png');
console.log(img);
const loginValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email("Please enter valid email")
        .required('Email Address is Required'),
    password: yup
        .string()
        .min(8, ({ min }) => `Password must be at least ${min} characters`)
        .required('Password is required'),
})
const LoginScreen = ({ navigation }) => {
    return (<View style={styles.container}>
        <View style={styles.upper}>
            {/* {(Platform.OS === 'web') ? 
                <Image source={'../assets/undraw_develop_app.png'} />
                :
                <Image style={styles.containerImg} source={{ uri: require('../assets/undraw_develop_app.png') }} />
            } */}
            {/* <Image style={styles.containerImg} source={{ uri: require('../assets/undraw_develop_app.png') }} /> */}
            {/* {(Platform.OS === 'web') ? <img style={styles.containerImg} src="./assets/undraw_develop_app.png" /> : <Image style={styles.containerImg} source={{ uri: img }} />} */}
            {/* <ImageBackground source={require('../../assets/undraw_develop_app.png')} style={styles.image} >
                <Text style={styles.welcomeText}>Company Name</Text>
            </ImageBackground> */}
            <Image
                resizeMode="contain"
                style={{
                    width: width,
                    height: width * picture.height / picture.width
                }}
                source={require('../../assets/undraw_develop_app.png')} />
            {/* <Image style={{ width: 50, height: 50 }} source={(Platform.OS === 'web') ? img : { uri: img }} /> */}

            <Text style={styles.companyName}>Logo</Text>

        </View>

        {/* <View style={styles.slider}>
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
        </View> */}
        <View style={styles.footer}>
            <View style={{
                ...StyleSheet.absoluteFillObject,
                backgroundColor: "white",
                padding: 10,
                justifyContent: "center",
                padding: 25,
            }}>

                <Formik
                    validationSchema={loginValidationSchema}
                    initialValues={{ email: '', password: '' }}
                    onSubmit={values => {
                        console.log(values.email)
                        if (values.email == "devm@mail.io" && values.password == "12345678") {
                            navigation.navigate('Profile')
                        }
                    }}
                >
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        errors,
                        isValid,
                    }) => (
                        <View>
                            <Text style={styles.lable}>Email</Text>
                            <TextInput
                                style={styles.input}
                                name="email"
                                placeholder="Email Address"
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType="email-address"
                            />
                            {errors.email &&
                                <Text style={styles.err}>{errors.email}</Text>
                            }
                            <Text style={styles.lable}>Password</Text>
                            <TextInput
                                style={styles.input}
                                name="password"
                                placeholder="Password"
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry
                            />
                            {errors.password &&
                                <Text style={styles.err}>{errors.password}</Text>
                            }

                            <View style={styles.cta}>
                                <TouchableOpacity
                                    style={styles.buttonDefault}
                                    onPress={() => navigation.navigate('Sign Up')} >
                                    <Text style={styles.btnText}> Sign Up</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={handleSubmit}  >
                                    <Text style={styles.btnText}>Login</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    )}
                </Formik>
                {/* <Text style={styles.lable}>Email</Text> */}
                {/* <TextInput placeholder="Your Email Id" icon="mail" style={styles.input} placeholderTextColor="gray" /> */}
                {/* <Text style={styles.lable}>Password</Text> */}
                {/* <TextInput placeholder="Password" secureTextEntry={true} icon="mail" style={styles.input} placeholderTextColor="gray" /> */}

                {/* <View style={styles.cta}>
                    <TouchableOpacity
                        style={styles.buttonDefault}
                        onPress={() => navigation.navigate('Login')} >
                        <Text style={styles.btnText}> Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Profile')} >
                        <Text style={styles.btnText}>Login</Text>
                    </TouchableOpacity>
                </View> */}
            </View>
        </View>
    </View >
    );
}
export default LoginScreen

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
