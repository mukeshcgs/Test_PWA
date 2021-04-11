
import * as React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Button, TouchableOpacity } from 'react-native';

//KEYS 
const cocktailAPIHost = "the-cocktail-db.p.rapidapi.com";
const quotes15APIHost = "quotes15.p.rapidapi.com";
const rapidAPIKey = "82ddc2a600msh1494e8e6f9ac181p126ff1jsn281879195311";
const HomeScreen = ({ navigation }) => {

    let [quote, setQuote] = React.useState('')
    let [source, setSource] = React.useState('')

    const fetchApiCall = () => {
        fetch("https://quotes15.p.rapidapi.com/quotes/random/?language_code=en", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": quotes15APIHost,
                "x-rapidapi-key": rapidAPIKey
            }
        })
            .then(response => response.json())
            .then(response => {
                setQuote(response.content);
                setSource(response.originator.name)
            })
            .catch(err => {
                console.log("ERR", err);
            });
    }
    return (<>
        <View style={styles.box1}>

            <TouchableOpacity
                style={styles.button}
                onPress={fetchApiCall} >
                <Text style={styles.btnText}>Fetch New Quote</Text>
            </TouchableOpacity>

            <View style={styles.quoteContainer}>
                <Text style={styles.quote}>{quote}</Text>
                <Text style={styles.source}>- {source}</Text>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Details')} >
                <Text style={styles.btnText}>Details Page</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Profile')}
            >
                <Text style={styles.btnText}>Profile Page</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Login')} >
                <Text style={styles.btnText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Slider')} >
                <Text style={styles.btnText}>Slider</Text>
            </TouchableOpacity>

        </View>
    </>
    );
}
export default HomeScreen


const styles = StyleSheet.create({
    quoteContainer: {
        width: "80%",
        paddingVertical: 20,
    },
    quote: {
        fontSize: 22
    },
    source: {
        fontSize: 12,
        textAlign: 'right'
    },
    box1: {
        alignItems: 'center',
        flex: 1,
        justifyContent: "center",
        padding: 10,
    },
    inputContainer: {
        marginVertical: "30%",
        padding: 30,
        width: "100%",
        textAlign: "center"
    },

    button: {
        borderColor: "gray",
        backgroundColor: "#cccccc",
        borderWidth: 0,
        width: "100%",
        padding: 12,
        paddingHorizontal: 25,
        marginBottom: 20,
        borderRadius: 25,
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