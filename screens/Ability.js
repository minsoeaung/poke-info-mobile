import {ScrollView, StyleSheet, View} from 'react-native';
import {useEffect, useState} from "react";
import getFormattedName from "../utils/getFormattedName";
import useFetchData from "../hooks/useFetchData";
import LoadingText from "../components/LoadingText";
import {appColor} from "../constants/colors";
import MyText from "../components/MyText";
import {Pokemon} from "./Type";

export default function Ability({navigation, route}) {
    const [flavorText, setFlavorText] = useState('');
    const [effectEntry, setEffectEntry] = useState('');
    const {name, url} = route.params;

    const {isLoading, data} = useFetchData(url);

    useEffect(() => {
        if (data) {
            setFlavorText(data.flavor_text_entries[0]['flavor_text'].replace('\n', ' '));
            const en = data.effect_entries.find(e => e.language.name === 'en');
            setEffectEntry(en.effect);
        }
    }, [data])

    useEffect(() => {
        navigation.setOptions({title: getFormattedName(name)})
    }, []);

    const goToPokemon = (name, url) => () => {
        navigation.push('Pokemon', {name, url});
    }

    if (isLoading) {
        return <LoadingText/>
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.card}>
                <MyText style={styles.description}>{flavorText}</MyText>
                <MyText style={styles.description}>{effectEntry}</MyText>
            </View>
            <View style={styles.card}>
                <MyText style={styles.cardTitle}>Pokémon with this ability</MyText>
                {data.pokemon.map(({pokemon}, index) => (
                    <Pokemon
                        key={pokemon.name}
                        name={pokemon.name}
                        url={pokemon.url}
                        noBorder={index === data.pokemon.length - 1}
                        goToPokemon={goToPokemon}
                    />
                ))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: appColor.appBg
    },
    card: {
        marginBottom: 20,
        backgroundColor: appColor.headerBg,
        borderRadius: 10,
        borderWidth: 0.5,
    },
    cardTitle: {
        fontSize: 20,
        margin: 10,
        color: '#000'
    },
    description: {
        margin: 10,
    }
})
