import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';

import Card from '../components/Card';
import LabelAndValue from '../components/LabelAndValue';
import MyText from '../components/MyText';
import OpenURLTextButton from '../components/OpenURLTextButton';
import { app } from '../constants/colors';

const PokeAPIURL = 'https://pokeapi.co/';
const SourceCodeURL = 'https://github.com/minsoeaung/poke-info-mobile';

const About = () => {
    return (
        <View style={styles.container}>
            <Card>
                <MyText style={styles.description}>
                    PokeInfo is a free, simple, and unofficial app that consumes REST API from{' '}
                    <OpenURLTextButton url={PokeAPIURL}>{PokeAPIURL}</OpenURLTextButton>. The app provides some useful
                    information for all pokemon, abilities , and items.
                </MyText>
                <MyText style={styles.description}>
                    Pokémon and Pokémon character names are trademarks of Nintendo. All image contents within are
                    Copyright The Pokémon Company.
                </MyText>
            </Card>
            <Card>
                <LabelAndValue
                    label="Version"
                    value={<MyText style={styles.version}>{Constants.expoConfig?.version || '1.5.1'}</MyText>}
                />
                <LabelAndValue
                    label="Source Code"
                    value={<OpenURLTextButton url={SourceCodeURL}>GitHub</OpenURLTextButton>}
                />
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: app.darkColor,
        gap: 25,
    },
    description: {
        paddingVertical: 10,
        color: app.lightColor,
        letterSpacing: 0.5,
    },
    footer: {
        marginBottom: 10,
    },
    version: {
        color: app.lightColor,
    },
});

export default About;
