import * as Application from 'expo-application';
import { Image, Linking, StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native';

import Card from '../components/Card';
import LabelAndValue from '../components/LabelAndValue';
import MyText from '../components/MyText';
import { colors } from '../constants/colors';

const PokeAPIURL = 'https://pokeapi.co/';
const EXPENNY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.minso.expenny';
const POKE_INFO_STORE_URL = 'https://play.google.com/store/apps/details?id=com.minsoeaung.pokeinfo';
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

            <View style={{ gap: 5, marginLeft: 10 }}>
                <LabelAndValue
                    label="Version"
                    value={<MyText style={styles.valueText}>{Application.nativeApplicationVersion}</MyText>}
                />
                <LabelAndValue
                    label="Build"
                    value={<MyText style={styles.valueText}>{Application.nativeBuildVersion}</MyText>}
                />
            </View>

            <MyText style={styles.sectionTitle}>Other apps</MyText>
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
        paddingBottom: 30,
    },
    description: {
        paddingVertical: 10,
        color: colors.cardText,
    },
    sectionTitle: {
        marginTop: 10,
        fontSize: 13,
        color: colors.text,
        textTransform: 'uppercase',
        textAlign: 'center',
        textDecorationLine: 'underline',
        letterSpacing: 0.8,
        opacity: 0.6,
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
        borderRadius: 12,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 2,
    },
    appIcon: {
        width: 80,
        height: 80,
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
    footer: {
        marginBottom: 10,
    },
    valueText: {
        color: colors.cardText,
        fontSize: 14,
    },
    text: {
        color: colors.text,
    },
});

export default About;
