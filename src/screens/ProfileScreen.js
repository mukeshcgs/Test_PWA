
import React, { useEffect, useState } from 'react';
import { Platform, FlatList, StyleSheet, View, Text, Image, TouchableOpacity, Button, TouchableHighlight } from 'react-native';
//KEYS 
const cocktailAPIHost = "the-cocktail-db.p.rapidapi.com";
const rapidAPIKey = "82ddc2a600msh1494e8e6f9ac181p126ff1jsn281879195311";
const URL = "https://the-cocktail-db.p.rapidapi.com/filter.php?i=Gin";

const ProfileScreen = ({ navigation }) => {
    const [isLoading, setLoading] = useState(true);
    let [drinks, setDrinks] = useState([]);

    //ON LOAD
    useEffect(() => {
        fetch(URL, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": cocktailAPIHost,
                "x-rapidapi-key": rapidAPIKey
            }
        })
            .then(response => response.json())
            .then(response => {
                setDrinks(response.drinks.slice(0, 10));
            })
            .catch(err => { console.log("ERR", err); })
            .finally(() => setLoading(false));
    }, [])

    const Item = ({ title, img, id }) => (
        <View style={styles.card}>
            {/* {(Platform.OS === 'web') ? <Image style={styles.cardImg} source={img} /> : <Image style={styles.cardImg} source={{ uri: img }} />} */}
            <Image style={styles.cardImg} source={(Platform.OS === 'web') ? img : { uri: img }} />

            <View style={styles.cardTitle}>
                <Text style={styles.cardTitleName} >{title}</Text>
                <Text >{id}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.buttonDelete}
                    onPress={ShowHideItem.bind(this, id)}
                >
                    <Text style={styles.btnText}>Delete</Text>
                </TouchableOpacity >
                <TouchableOpacity
                    style={styles.buttonSave}>
                    <Text style={styles.btnText}>Save</Text>
                </TouchableOpacity >
                <TouchableOpacity
                    style={styles.buttonView}>
                    <Text style={styles.btnText}>View</Text>
                </TouchableOpacity >
            </View>
        </View >
    );
    const ShowHideItem = (id) => {
        idToRemove = id;
        drinks = drinks.filter(function (item) {
            return item.idDrink != idToRemove;
        });
        console.log('NEW DRINKS', drinks);
        setDrinks(drinks);
    }
    const renderItem = ({ item }) => (
        <Item title={item.strDrink} img={item.strDrinkThumb} id={item.idDrink} />
    );
    return (<>
        <View style={styles.box1}>
            {/* <TouchableHighlight onPress={fetchApiCall}>
                <View style={styles.button}>
                    <Text style={styles.btnText}>Fetch Data</Text>
                </View>
            </TouchableHighlight> */}

            {isLoading ? <Text>Loading...</Text> : (
                <FlatList
                    style={styles.cardContainer}
                    data={drinks}
                    renderItem={renderItem}
                    keyExtractor={item => item.idDrink}
                />
            )}
        </View>
    </>
    );
}
export default ProfileScreen

const styles = StyleSheet.create({
    test: {
        backgroundColor: "red",
    },
    box1: {
        flex: 1,
        padding: 20,
        paddingHorizontal: (Platform.OS === 'web') ? '25%' : 20,
    },
    cardContainer: {
        // display: "flex",
        // width: "100%",
    },
    card: {
        // display: "flex",
        // flexWrap: (Platform.OS === 'web') ? 'wrap' : "nowrap",
        // flexDirection: "row",
        // // maxWidth: (Platform.OS === 'web') ? 200 : "100%",
        // justifyContent: "space-between",
        // minHeight: (Platform.OS === 'web') ? 200 : 100,
        // height: (Platform.OS === 'web') ? "auto" : 200,
        // width: "100%",
        backgroundColor: "white",
        padding: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        marginBottom: 20,
        flexDirection: "row",
        flexWrap: "nowrap",
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: "center",
        alignItems: "stretch",
    },
    cardImg: {
        // width: (Platform.OS === 'web') ? '100%' : "50%",
        height: 100,
        width: 100,
        borderRadius: 10,
        flex: 2
    },
    cardTitle: {
        textAlign: "left",
        fontSize: 40,
        fontWeight: '600',
        overflow: "hidden",
        // backgroundColor: "red",
        height: "100%",
        width: "100%",
        flex: 3,
        padding: 10
    },
    cardTitleName: {
        textAlign: "left",
        fontSize: 20,
        fontWeight: '600',
        overflow: "hidden",
        height: "100%",
        width: "100%",
        flex: 3
    },
    buttonContainer: {
        flex: 1,
        alignContent: "stretch",
        alignItems: "stretch",
        height: 100,
        // backgroundColor: "blue",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "stretch",
    },

    buttonDelete: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        color: "red",
    },
    buttonView: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
    },
    button: {
        borderColor: "gray",
        backgroundColor: "#13ea8c",
        borderWidth: 0,
        padding: 12,
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    btnText: {
        color: "gray",
        fontWeight: "600",
        textAlign: "center",
    },
});
