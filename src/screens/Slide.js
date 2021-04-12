import React from 'react';
import { Platform, StyleSheet, View, Text, Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");
const SLIDE_HEIGHT = 0.61 * height;
export default class Slide extends React.PureComponent {
    // const Slide = () => {
    render() {
        let { label, right, ...props } = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{label}</Text>
                    <Text style={styles.subtitle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  </Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        width,
        paddingHorizontal: (Platform.OS === 'web') ? '25%' : 20,
    },
    titleContainer: {
        height: "100%",
        justifyContent: "center",
    },
    title: {
        textAlign: "center",
        color: "gray",
        fontWeight: "600",
        fontSize: 50,
    },
    subtitle: {
        textAlign: "center",
        color: "gray",
        fontSize: 14,
        lineHeight: 18,
    },
    button: {
        borderColor: "gray",
        backgroundColor: "#cccccc",
        borderWidth: 0,
        width: "100%",
        padding: 12,
    },
    btnText: {
        color: "black",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"
    },
});
