import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PokeAPI } from 'pokeapi-types';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import ErrorDisplay from '../components/ErrorDisplay';
import LoadingText from '../components/LoadingText';
import MyText from '../components/MyText';
import { appColor } from '../constants/colors';
import useFetchData from '../hooks/useFetchData';
import { NativeStackParamList } from '../types';
import getFormattedName from '../utils/getFormattedName';
import { Pokemon } from './TypeDetail';

type Props = NativeStackScreenProps<NativeStackParamList, 'AbilityDetail'>;

export default function AbilityDetail({ navigation, route }: Props) {
    const { name } = route.params;

    const [flavorText, setFlavorText] = useState('');
    const [effectEntry, setEffectEntry] = useState('');

    const { isLoading, error, data } = useFetchData<PokeAPI.Ability>(
        `https://pokeapi.co/api/v2/ability/${name}`,
    );

    useEffect(() => {
        if (data) {
            const enFlavorText = data.flavor_text_entries.find(
                e => e.language.name === 'en',
            );
            if (enFlavorText) {
                setFlavorText(enFlavorText.flavor_text.replace('\n', ' '));
            }
            const enEffect = data.effect_entries.find(
                e => e.language.name === 'en',
            );
            if (enEffect) {
                setEffectEntry(enEffect.effect);
            }
        }
    }, [data]);

    useEffect(() => {
        navigation.setOptions({ title: getFormattedName(name) });
    }, []);

    const goToPokemon = (name: string) => () => {
        navigation.push('PokemonDetail', { name });
    };

    if (isLoading) {
        return <LoadingText />;
    }

    if (error) {
        return <ErrorDisplay error={error} />;
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.card}>
                {flavorText.length > 0 && (
                    <MyText style={styles.description}>{flavorText}</MyText>
                )}
                {effectEntry.length > 0 && (
                    <MyText style={styles.description}>{effectEntry}</MyText>
                )}
                <View
                    style={[
                        styles.description,
                        {
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        },
                    ]}>
                    <MyText>
                        {'Originated generation: ' + data!.generation.name}
                    </MyText>
                </View>
            </View>
            <View style={styles.card}>
                <MyText style={styles.cardTitle}>
                    Pokémon with this ability
                </MyText>
                {/* TODO: use flatlist */}
                {data!.pokemon.map(({ pokemon, is_hidden }, index) => (
                    <Pokemon
                        key={pokemon.name}
                        name={pokemon.name}
                        url={pokemon.url}
                        isHidden={is_hidden}
                        noBorder={index === data!.pokemon.length - 1}
                        goToPokemon={goToPokemon}
                    />
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: appColor.appBg,
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
        color: '#000',
    },
    description: {
        margin: 10,
    },
});
