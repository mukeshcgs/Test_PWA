import React, { useState } from "react";
import { Platform, View, Text, Image, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const LoginScreen = ({ navigation }) => {
    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);
    return (
        <View style={styles.box}>
            <View style={styles.box1}>
                {/* <Image source={require('./assets/ms-icon-144x144.png')} /> */}
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.lable}>Email</Text>
                <TextInput placeholder="Your Email Id" icon="mail" style={styles.input} placeholderTextColor="gray" />
                <Text style={styles.lable}>Password</Text>
                <TextInput placeholder="Password" secureTextEntry={true} icon="mail" style={styles.input} placeholderTextColor="gray" />

                {/* <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('Details')}
                /> */}

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.openDrawer()}
                >
                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>

                <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
                <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />

            </View>
        </View>

    )
}
// const styles = StyleSheet.create({
//     height: (Platform.OS === 'web') ? 200 : 100,
// });
const styles = StyleSheet.create({
    box: {
        textAlign: "center",
        alignContent: "center",
        alignItems: (Platform.OS === 'web') ? 'center' : "flex-start",
        backgroundColor: (Platform.OS === 'web') ? "red" : "blue",
    },
    box1: {
        alignItems: (Platform.OS === 'web') ? 'center' : "flex-start",
        // flex: (Platform.OS === 'web') ? "none" : 1,
        flex: 0.61,
    },
    inputContainer: {
        marginVertical: (Platform.OS === 'web') ? "auto" : "30%",
        padding: 30,
        width: "100%",
        textAlign: "center"
    },
    input: {
        borderColor: "#cccccc",
        backgroundColor: "#f9f9f9",
        borderWidth: 1,
        color: "black",
        width: "100%",
        fontSize: 18,
        padding: 12,
        marginBottom: 20,
    },
    button: {
        borderColor: "gray",
        backgroundColor: "#cccccc",
        borderWidth: 0,
        width: "100%",
        padding: 12,
        marginBottom: 20,
    },
    btnText: {
        color: "black",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"
    },
    lable: {
        color: "black",
        textAlign: "left",
        fontSize: 14,
        marginBottom: 10
    }

});
export default LoginScreen