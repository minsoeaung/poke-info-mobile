import { DotGothic16_400Regular, useFonts } from '@expo-google-fonts/dotgothic16';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { type SQLiteDatabase, SQLiteProvider } from 'expo-sqlite';
import { StatusBar } from 'expo-status-bar';
import React, { Suspense, useCallback } from 'react';

import MyText from './components/MyText';
import { colors } from './constants/colors';
import { BottomTabsNavigator } from './screens/BottomTabsNavigator';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
    duration: 500,
    fade: true,
});

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
            <Suspense fallback={<MyText>Loading...</MyText>}>
                <SQLiteProvider databaseName="PokeInfo.db" onInit={migrateDbIfNeeded} useSuspense>
                    <BottomTabsNavigator />
                </SQLiteProvider>
            </Suspense>
            <StatusBar style="light" />
        </NavigationContainer>
    );
}

async function migrateDbIfNeeded(db: SQLiteDatabase) {
    const DATABASE_VERSION = 1;
    // @ts-ignore
    let { user_version: currentDbVersion } = await db.getFirstAsync<{ user_version: number }>('PRAGMA user_version');

    if (currentDbVersion >= DATABASE_VERSION) {
        return;
    }
    if (currentDbVersion === 0) {
        await db.execAsync(`
            PRAGMA journal_mode = 'wal';
            CREATE TABLE pokeApis (key VARCHAR(300) PRIMARY KEY NOT NULL, value TEXT NOT NULL);
        `);
        currentDbVersion = 1;
    }
    await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
}
