import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IntroPage from '../../pages/IntroPage/IntroPage';
import SettingsPage from '../../pages/SettingsPage/SettingsPage';


const Stack = createNativeStackNavigator();

export default function Navigation() {

    return(
        <NavigationContainer >
            <Stack.Navigator screenOptions={{ headerShown: false, animation: "slide_from_right" }} >
                <Stack.Screen name="Intro" component={IntroPage}  />
                <Stack.Screen name="Settings" component={SettingsPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};