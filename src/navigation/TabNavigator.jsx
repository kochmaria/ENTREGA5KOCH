import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import ShopStack from '../navigation/ShopStack';
import CartStack from "../navigation/CartStack";
import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator 
                screenOptions={{
                    headerShown: false, 
                    tabBarShowLabel: false,  
                    tabBarStyle: styles.tabBar
                }}
            >
                <Tab.Screen 
                    name="ShopStack" 
                    component={ShopStack} 
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={{ alignItems: 'center' }}>
                                <Entypo 
                                    name="shop" 
                                    size={25} 
                                    color={focused ? "black" : "grey"} 
                                /> 
                                <Text style={{ color: focused ? "black" : "grey" }}> Shop </Text>
                            </View>
                        )
                    }} 
                />
                <Tab.Screen 
                    name="CartStack" 
                    component={CartStack} 
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={{ alignItems: 'center' }}>
                                <FontAwesome 
                                    name="shopping-bag"
                                    size={25} 
                                    color={focused ? "black" : "grey"} 
                                /> 
                                <Text style={{ color: focused ? "black" : "grey" }}> Cart </Text>
                            </View>
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#D1BECF',
        borderTopWidth: 0,
        elevation: 10,
        shadowOpacity: 30,
        height: 60,
    },
});

export default TabNavigator;