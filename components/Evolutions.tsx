import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image } from 'expo-image';
import { PokeAPI } from 'pokeapi-types';
import { memo, useMemo } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import MyText from './MyText';
import { app } from '../constants/colors';
import { LocalPokemonType } from '../constants/pokemons';
import useFetchData from '../hooks/useFetchData';
import { Chain, NativeStackParamList } from '../types';
import getEvolutionDescription from '../utils/getEvolutionDescription';
import getFormattedName from '../utils/getFormattedName';
import getLocalPokemonByName from '../utils/getLocalPokemonByName';

const Evolutions = ({ url }: { url: string }) => {
    const navigation = useNavigation<NativeStackNavigationProp<NativeStackParamList>>();

    const { isLoading, error, data } = useFetchData<PokeAPI.EvolutionChain>(url);

    const evoChain: Chain[] = useMemo(() => {
        if (data) {
            const chain = [];
            let evoData = data.chain;
            do {
                const evoDetails = evoData.evolution_details[0];
                chain.push({
                    species_name: evoData.species.name,
                    min_level: !evoDetails ? 1 : evoDetails.min_level,
                    trigger_name: !evoDetails ? null : evoDetails.trigger.name,
                    item: !evoDetails ? null : evoDetails.item,
                });
                evoData = evoData['evolves_to'][0];
            } while (!!evoData && evoData.hasOwnProperty('evolves_to'));

            return chain;
        } else {
            return [];
        }
    }, [data]);

    const goToPokemonDetailScreen = (pokemon: LocalPokemonType | null) => {
        if (pokemon) {
            navigation.push('PokemonDetail', pokemon);
        }
    };

    return (
        <View style={styles.evolutions}>
            {isLoading ? (
                <MyText style={styles.loadingOrError}>...</MyText>
            ) : error ? (
                <MyText style={styles.loadingOrError}>{error}</MyText>
            ) : (
                <View style={styles.chains}>
                    {evoChain.map((chain, index) => {
                        const from = chain;
                        const fromPokemon = getLocalPokemonByName(from.species_name);
                        const to = evoChain[index + 1];

                        if (!to && evoChain.length > 1) {
                            return null;
                        }

                        const toPokemon = getLocalPokemonByName(to?.species_name || '');

                        return (
                            <View style={[styles.chain]} key={from.species_name}>
                                <View style={styles.chainImages}>
                                    {fromPokemon && toPokemon && (
                                        <Pressable
                                            style={styles.pressableImage}
                                            onPress={() => goToPokemonDetailScreen(fromPokemon)}
                                        >
                                            {fromPokemon?.sprite ? (
                                                <Image
                                                    style={styles.sprite}
                                                    source={{
                                                        uri: fromPokemon.sprite,
                                                    }}
                                                    accessibilityLabel={`Sprite of ${fromPokemon.sprite}`}
                                                    recyclingKey={fromPokemon.sprite}
                                                    transition={200}
                                                />
                                            ) : (
                                                <View style={styles.spriteFallback}>
                                                    <MyText>N/A</MyText>
                                                </View>
                                            )}
                                        </Pressable>
                                    )}
                                    {to && (
                                        <>
                                            <MyText style={styles.arrow}>➡</MyText>
                                            {toPokemon?.sprite ? (
                                                <Pressable
                                                    style={styles.pressableImage}
                                                    onPress={() => goToPokemonDetailScreen(toPokemon)}
                                                >
                                                    <Image
                                                        style={styles.sprite}
                                                        source={{
                                                            uri: toPokemon.sprite,
                                                        }}
                                                        accessibilityLabel={`Sprite of ${toPokemon.sprite}`}
                                                        recyclingKey={toPokemon.sprite}
                                                        transition={200}
                                                    />
                                                </Pressable>
                                            ) : (
                                                <Pressable
                                                    style={styles.spriteFallback}
                                                    onPress={() => goToPokemonDetailScreen(toPokemon)}
                                                >
                                                    <MyText>N/A</MyText>
                                                </Pressable>
                                            )}
                                        </>
                                    )}
                                </View>
                                <MyText style={styles.chainDescription}>
                                    {to
                                        ? getEvolutionDescription(from, to)
                                        : `${getFormattedName(from.species_name)} does not evolve.`}
                                </MyText>
                            </View>
                        );
                    })}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    evolutions: {
        flex: 1,
    },
    loadingOrError: {
        textAlign: 'center',
        paddingVertical: 20,
    },
    chains: {},
    chain: {},
    chainImages: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    pressableImage: {
        flex: 1,
        aspectRatio: 1,
    },
    arrow: {
        color: app.darkColor,
        fontSize: 20,
        flex: 1,
        textAlign: 'center',
    },
    sprite: {
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        resizeMode: 'contain',
    },
    chainDescription: {
        color: app.darkColor,
        textAlign: 'center',
    },
    spriteFallback: {
        flex: 1,
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default memo(Evolutions);
