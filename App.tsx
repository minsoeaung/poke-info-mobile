import { NotoSans_400Regular, NotoSans_600SemiBold, NotoSans_700Bold, useFonts } from '@expo-google-fonts/noto-sans';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { type SQLiteDatabase, SQLiteProvider } from 'expo-sqlite';
import { StatusBar } from 'expo-status-bar';
import React, { Suspense, useCallback } from 'react';

import MyText from './components/MyText';
import { BottomTabsNavigator } from './screens/BottomTabsNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
    duration: 500,
    fade: true,
});

export default function App() {
    const [fontsLoaded] = useFonts({
        NotoSans_400Regular,
        NotoSans_600SemiBold,
        NotoSans_700Bold,
    });

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
                    <SafeAreaProvider>
                        <BottomTabsNavigator />
                    </SafeAreaProvider>
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
