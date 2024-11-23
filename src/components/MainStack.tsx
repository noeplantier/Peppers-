import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { HomeScreen } from "../screens/HomeScreen";
import { PepperDetailScreen } from "../screens/PepperDetailScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#65adf1",
                },
                headerTintColor: "white",
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: "World of Peppers" }}
            />
            <StackNavigator.Screen
                name="PepperDetail"
                component={PepperDetailScreen}
                options={{ title: "Pepper Details" }}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);
        