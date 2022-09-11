import { StyleSheet, View } from 'react-native';

import Description from '../components/Description';
import MyText from '../components/MyText';
import { appColor } from '../constants/colors';

const About = () => {
    return (
        <View style={styles.container}>
            <View style={styles.boxWrap}>
                <MyText style={styles.description}>
                    PokeInfo is a free, simple, and unofficial app that consumes REST API from "https://pokeapi.co/".
                    The app provides some useful information for all pokemon, abilities , and items.
                </MyText>
                <MyText style={styles.description}>
                    Pokémon and Pokémon character names are trademarks of Nintendo. All image contents within are
                    Copyright The Pokémon Company.
                </MyText>
            </View>
            <View style={styles.boxWrap}>
                <MyText style={styles.description}>Features:</MyText>
                <MyText style={styles.description}>
                    * A complete list of Pokémon with their visual image, types, abilities and stats
                </MyText>
                <MyText style={styles.description}>* Type attack/defense effectiveness</MyText>
                <MyText style={styles.description}>* Abilities/Items basic description</MyText>
                <MyText style={styles.description}>* Easily search the Pokémon, Abilities and Items</MyText>
            </View>
            <View style={styles.boxWrap}>
                <Description label="Version" value={<MyText>1.0.0</MyText>} noBorder />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: appColor.primary,
    },
    boxWrap: {
        marginBottom: 10,
        backgroundColor: appColor.secondary,
        borderRadius: 10,
        borderWidth: 0.5,
        paddingHorizontal: 10,
    },
    boxTitle: {
        fontSize: 20,
        padding: 10,
        color: '#000',
    },
    description: {
        padding: 10,
    },
    footer: {
        marginBottom: 10,
    },
});

export default About;
