
import * as React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

const DetailsScreen = ({ navigation }) => {
    return (<>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
            <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
            >
                <Text  >Details</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Profile')}
            >
                <Text >Profile</Text>
            </TouchableOpacity>
        </View>
    </>
    );
}
export default DetailsScreen
