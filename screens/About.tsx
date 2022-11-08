import { StyleSheet, View } from 'react-native';

import Card from '../components/Card';
import Description from '../components/Description';
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
            {/*<Card>*/}
            {/*    <MyText style={styles.description}>Features:</MyText>*/}
            {/*    <MyText style={styles.description}>*/}
            {/*        * A complete list of Pokémon with their visual image, types, abilities and stats*/}
            {/*    </MyText>*/}
            {/*    <MyText style={styles.description}>* Type attack/defense effectiveness</MyText>*/}
            {/*    <MyText style={styles.description}>* Abilities/Items basic description</MyText>*/}
            {/*    <MyText style={styles.description}>* Easily search the Pokémon, Abilities and Items</MyText>*/}
            {/*</Card>*/}
            <Card>
                <Description label="Version" value={<MyText>1.2.0</MyText>} noBorder />
                <Description
                    label="Source Code"
                    value={<OpenURLTextButton url={SourceCodeURL}>GitHub</OpenURLTextButton>}
                    noBorder
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
    },
    description: {
        paddingVertical: 10,
    },
    footer: {
        marginBottom: 10,
    },
});

export default About;
