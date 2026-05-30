import * as Application from 'expo-application';
import { Image, Linking, StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native';

import Card from '../components/Card';
import MyText from '../components/MyText';
import { colors } from '../constants/colors';

const PokeAPIURL = 'https://pokeapi.co/';
const EXPENNY_STORE_URL = 'market://details?id=com.minso.expenny';
const POKE_INFO_STORE_URL_RATING = 'market://details?id=com.minsoeaung.pokeinfo&showAllReviews=true';
const EXPENNY_LANDING_URL = 'https://getexpenny.com';

const About = () => {
    return (
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
            <Card>
                <MyText style={styles.description}>
                    PokeInfo is a free, simple, and unofficial app that consumes REST API from {PokeAPIURL}. The app
                    provides some useful information for all pokemon, abilities, and items.
                </MyText>
                <MyText style={styles.description}>
                    Pokémon and Pokémon character names are trademarks of Nintendo. All image contents within are
                    Copyright The Pokémon Company.
                </MyText>
            </Card>
            <View />
            <View style={styles.appRow}>
                <View
                    style={{
                        width: 48,
                        height: 48,
                        elevation: 2,
                        borderRadius: 22222,
                        overflow: 'hidden',
                        marginTop: 4,
                    }}
                >
                    <Image source={require('../assets/icon.png')} style={{ width: '100%', height: '100%' }} />
                </View>
                <View style={styles.appInfo}>
                    <MyText style={styles.appName}>
                        Poke Info - v{Application.nativeApplicationVersion}({Application.nativeBuildVersion})
                    </MyText>
                    <MyText style={styles.appTagline}>Find any Pokémon's info - fast, simple, accurate!</MyText>
                    <View style={styles.buttons}>
                        <TouchableOpacity
                            style={styles.button}
                            activeOpacity={0.75}
                            onPress={() => Linking.openURL(POKE_INFO_STORE_URL_RATING)}
                        >
                            <MyText style={styles.buttonText}>Rate</MyText>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.appRow}>
                <View style={styles.appIconContainer}>
                    <Image source={require('../assets/expenny.png')} style={styles.appIcon} />
                </View>
                <View style={styles.appInfo}>
                    <MyText style={styles.appName}>Expenny</MyText>
                    <MyText style={styles.appTagline}>
                        Offline expense tracker & budget planner. Smarter with AI scan.
                    </MyText>
                    <View style={styles.buttons}>
                        <TouchableOpacity
                            style={styles.button}
                            activeOpacity={0.75}
                            onPress={() => Linking.openURL(EXPENNY_LANDING_URL)}
                        >
                            <MyText style={styles.buttonText}>Website</MyText>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, styles.buttonPrimary]}
                            activeOpacity={0.75}
                            onPress={() => Linking.openURL(EXPENNY_STORE_URL)}
                        >
                            <MyText style={StyleSheet.flatten([styles.buttonText, styles.buttonPrimaryText])}>
                                Get on Play Store
                            </MyText>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: colors.background,
    },
    container: {
        padding: 10,
        gap: 15,
        paddingBottom: 70,
    },
    description: {
        paddingVertical: 10,
        color: colors.cardText,
    },
    appRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 12,
        paddingHorizontal: 10,
    },
    appIconContainer: {
        width: 48,
        height: 48,
        borderRadius: 22222,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 4,
        backgroundColor: 'white',
        elevation: 2,
    },
    appIcon: {
        width: 70,
        height: 70,
    },
    appInfo: {
        flex: 1,
        gap: 6,
    },
    appName: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.cardText,
    },
    appTagline: {
        fontSize: 13,
        color: colors.cardText,
        opacity: 0.65,
    },
    buttons: {
        flexDirection: 'row',
        gap: 8,
        marginTop: 2,
    },
    button: {
        paddingVertical: 5,
        paddingHorizontal: 12,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: colors.cardText,
    },
    buttonPrimary: {
        backgroundColor: colors.cardText,
        borderColor: colors.cardText,
    },
    buttonText: {
        fontSize: 12,
        color: colors.cardText,
    },
    buttonPrimaryText: {
        color: colors.background,
    },
});

export default About;
