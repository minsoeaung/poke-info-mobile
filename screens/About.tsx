import { Octicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { useSQLiteContext } from 'expo-sqlite/next';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import Card from '../components/Card';
import LabelAndValue from '../components/LabelAndValue';
import MyText from '../components/MyText';
import OpenURLTextButton from '../components/OpenURLTextButton';
import { colors } from '../constants/colors';

const PokeAPIURL = 'https://pokeapi.co/';
const SourceCodeURL = 'https://github.com/minsoeaung/poke-info-mobile';

const About = () => {
    const db = useSQLiteContext();
    const [refresh, setRefresh] = useState(false);
    const [notWork, setNotWork] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        (async () => {
            try {
                const result = await db.getFirstAsync('SELECT COUNT(*) FROM pokeApis');
                // @ts-ignore
                const count = result['COUNT(*)'];
                if (typeof count === 'number') setCount(count);
                setNotWork(false);
            } catch {
                setNotWork(true);
            }
        })();
    }, [refresh]);

    const fix = async () => {
        await db.execAsync(`
                PRAGMA journal_mode = 'wal';
                CREATE TABLE IF NOT EXISTS pokeApis (key VARCHAR(300) PRIMARY KEY NOT NULL, value TEXT NOT NULL);
            `);
        await db.execAsync(`PRAGMA user_version = 1`);
        setRefresh(prevState => !prevState);
    };

    const clearCache = async () => {
        await db.runAsync('DELETE FROM pokeApis');
        setRefresh(prevState => !prevState);
    };

    return (
        <View style={styles.container}>
            <Card title="Caching">
                <LabelAndValue
                    label="Status"
                    value={
                        <MyText>
                            <Octicons name="dot-fill" color={notWork ? 'red' : 'green'} />{' '}
                            {notWork ? 'Unavailable' : 'Working'}
                        </MyText>
                    }
                />
                <LabelAndValue label="Cache count" value={<MyText>{count}</MyText>} />
                <View style={styles.buttons}>
                    {notWork ? (
                        <Pressable onPress={fix}>
                            {({ pressed }) => (
                                <View
                                    style={StyleSheet.flatten([
                                        styles.button,
                                        { borderColor: pressed ? 'tomato' : 'transparent' },
                                    ])}
                                >
                                    <MyText style={styles.text}>Fix</MyText>
                                </View>
                            )}
                        </Pressable>
                    ) : (
                        <Pressable onPress={clearCache}>
                            {({ pressed }) => (
                                <View
                                    style={StyleSheet.flatten([
                                        styles.button,
                                        { borderColor: pressed ? 'tomato' : 'transparent' },
                                    ])}
                                >
                                    <MyText style={styles.text}>Clear cache</MyText>
                                </View>
                            )}
                        </Pressable>
                    )}
                </View>
            </Card>
            <Card title="App">
                <LabelAndValue
                    label="Version"
                    value={<MyText style={styles.version}>v{Constants.expoConfig?.version || '1.5.1'}</MyText>}
                />
                <LabelAndValue
                    label="Source Code"
                    value={<OpenURLTextButton url={SourceCodeURL}>GitHub</OpenURLTextButton>}
                />
            </Card>
            <Card>
                <MyText style={styles.description}>
                    PokeInfo is a free, simple, and unofficial app that consumes REST API from{' '}
                    <OpenURLTextButton url={PokeAPIURL}>{PokeAPIURL}</OpenURLTextButton>. The app provides some useful
                    information for all pokemon, abilities, and items.
                </MyText>
                <MyText style={styles.description}>
                    Pokémon and Pokémon character names are trademarks of Nintendo. All image contents within are
                    Copyright The Pokémon Company.
                </MyText>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: colors.background,
        gap: 15,
    },
    description: {
        paddingVertical: 10,
        letterSpacing: 0.5,
    },
    footer: {
        marginBottom: 10,
    },
    version: {},
    buttons: {
        flexDirection: 'row',
        gap: 15,
    },
    button: {
        paddingVertical: 3,
        paddingHorizontal: 20,
        borderRadius: 5,
        backgroundColor: colors.background,
        borderWidth: 2,
    },
    text: {
        color: colors.text,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 1,
    },
});

export default About;
