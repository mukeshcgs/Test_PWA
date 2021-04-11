import React from 'react';
import { Dimensions, View, Text, Title, Caption, Paragraph, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem, } from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';

const { width, height } = Dimensions.get("window");

export function DrawerContent({ progress, ...props }) {
    const translateX = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [-100, 0],
    });
    return (
        <DrawerContentScrollView {...props} >
            <Animated.View style={{ transform: [{ translateX }] }}>
                <View style={{
                    height: height,
                    backgroundColor: '#13ea8c',
                    justifyContent: 'center',
                    alignItems: "stretch",
                    alignContent: "stretch",
                    flexDirection: "column"
                }}>
                    <View style={{ flex: 0.2, backgroundColor: '#13ea8c', padding: 20 }}>
                        <Text>Profile Content</Text>
                    </View>
                    <View style={{
                        flex: 0.8,
                        backgroundColor: 'white',
                        borderTopLeftRadius: 25,
                        borderTopRightRadius: 25,
                        padding: 20
                    }}>
                        <DrawerItemList {...props} />
                        <DrawerItem
                            label="Help"
                            onPress={() => alert('Link to help')} />
                        <DrawerItem
                            label="Details"
                            onPress={() => {
                                navigation.navigate('Details');
                            }}
                        />
                        <View>
                            <Text>Other Content</Text>
                        </View>
                    </View>
                </View>
            </Animated.View>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});