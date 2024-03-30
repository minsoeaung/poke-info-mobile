import { Audiowide_400Regular } from '@expo-google-fonts/audiowide';
import { useFonts } from '@expo-google-fonts/dotgothic16';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { type SQLiteDatabase, SQLiteProvider } from 'expo-sqlite/next';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';

import { app } from './constants/colors';
import { BottomTabsNavigator } from './screens/BottomTabsNavigator';

SplashScreen.preventAutoHideAsync().catch(() => {});

export default function App() {
    const [fontsLoaded] = useFonts({ Audiowide_400Regular });

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
            <SQLiteProvider databaseName="PokeInfo.db" onInit={migrateDbIfNeeded}>
                <BottomTabsNavigator />
            </SQLiteProvider>
            <StatusBar style="light" backgroundColor={app.darkColor} />
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
            CREATE TABLE IF NOT EXISTS pokeApis (key VARCHAR(300) PRIMARY KEY NOT NULL, value TEXT NOT NULL);
        `);
        currentDbVersion = 1;
    }
    await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
}
