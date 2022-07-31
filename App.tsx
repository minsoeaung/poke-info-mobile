import { DotGothic16_400Regular, useFonts } from '@expo-google-fonts/dotgothic16';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { appColor } from './constants/colors';
import { BottomTabsNavigator } from './screens/BottomTabs.navigator';

export default function App() {
    const [fontsLoaded] = useFonts({ DotGothic16_400Regular });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <NavigationContainer>
            <BottomTabsNavigator />
            <StatusBar style="dark" backgroundColor={appColor.appBg} />
        </NavigationContainer>
    );
}
