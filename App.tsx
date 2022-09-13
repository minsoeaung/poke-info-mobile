import { DotGothic16_400Regular, useFonts } from '@expo-google-fonts/dotgothic16';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { app } from './constants/colors';
import { BottomTabsNavigator } from './screens/BottomTabsNavigator';

export default function App() {
    const [fontsLoaded] = useFonts({ DotGothic16_400Regular });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <BottomTabsNavigator />
                <StatusBar style="light" backgroundColor={app.darkColor} />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
