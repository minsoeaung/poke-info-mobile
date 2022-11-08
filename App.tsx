import { DotGothic16_400Regular, useFonts } from '@expo-google-fonts/dotgothic16';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';

import { app } from './constants/colors';
import { BottomTabsNavigator } from './screens/BottomTabsNavigator';

SplashScreen.preventAutoHideAsync().catch(() => {});

export default function App() {
    const [fontsLoaded] = useFonts({ DotGothic16_400Regular });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <NavigationContainer onReady={onLayoutRootView}>
            <BottomTabsNavigator />
            <StatusBar style="'ight"'backgroundColor={app.darkColor} />
        </NavigationContainer>
    );
}
