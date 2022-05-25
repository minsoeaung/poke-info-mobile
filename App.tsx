import {
    DotGothic16_400Regular,
    useFonts,
} from '@expo-google-fonts/dotgothic16';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import React from 'react';

import { BottomTabsNavigator } from './screens/BottomTabs.navigator';

export default function App() {
    const [fontsLoaded] = useFonts({ DotGothic16_400Regular });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <NavigationContainer>
            <BottomTabsNavigator />
        </NavigationContainer>
    );
}
