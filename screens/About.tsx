import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import MyText from '../components/MyText';
import OpenURLTextButton from '../components/OpenURLTextButton';
import { app } from '../constants/colors';
import LabelAndValue from '../components/LabelAndValue';

const PokeAPIURL = 'https://pokeapi.co/';
const SourceCodeURL = 'https://github.com/minsoeaung/poke-info-mobile';

const About = () => {
    return (
        <View style={styles.container}>
            <View>
                <MyText style={styles.description}>
                    PokeInfo is a free, simple, and unofficial app that consumes REST API from{' '}
                    <OpenURLTextButton url={PokeAPIURL}>{PokeAPIURL}</OpenURLTextButton>.  The app provides some useful
                    information for all pokemon, abilities , and items.
                </MyText>
                <MyText style={styles.description}>
                    Pokémon and Pokémon character names are trademarks of Nintendo. All image contents within are
                    Copyright The Pokémon Company.
                </MyText>
            </View>
            <View style={styles.labelsAndValues}>
                <LabelAndValue
                    label="Version"
                    value={<MyText style={styles.version}>{Constants.manifest?.version || '1.3.1'}</MyText>}
                />
                <LabelAndValue
                    label="Source Code"
                    value={<OpenURLTextButton url={SourceCodeURL}>GitHub</OpenURLTextButton>}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: app.darkColor,
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
    labelsAndValues: {
        paddingLeft: 15,
        marginTop: 30,
        gap: 10,
    },
});

export default About;
