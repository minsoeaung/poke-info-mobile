import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image } from 'expo-image';
import { PokeAPI } from 'pokeapi-types';
import { memo } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import MyText from './MyText';
import useFetchData from '../hooks/useFetchData';
import { useFetchPokemonDetail } from '../hooks/useFetchPokemonDetail';
import { StackParamList } from '../types';
import getFormattedName from '../utils/getFormattedName';

type Props = {
    // evolutions array is structured like this -> [species, reason, species, reason, species]
    evolutions: string[];
};

// type SpeciesToPokemon = { [key: string]: { name: string; sprite: string | null } };

const Evolutions = ({ evolutions }: Props) => {
    // const db = useSQLiteContext();

    // const speciesToPokemon = useMemo(async () => {
    //     const speciesUrls = evolutions
    //         .filter((_, index) => index % 2 === 0)
    //         .map(speciesName => `https://pokeapi.co/api/v2/pokemon-species/${speciesName}/`);
    //     const speciesRequest = speciesUrls.map(url => fetchData<PokeAPI.PokemonSpecies>(url, db));
    //     const species = await Promise.all(speciesRequest);
    //     if (species.find(s => s === null)) {
    //         return null;
    //     }
    //     const pokemonNames = species.map(s => s!.varieties.find(v => v.is_default)!.pokemon.name);
    //     const pokemonRequests = pokemonNames.map(name => fetchPokemonDetail(name, db));
    //     const pokemons = await Promise.all(pokemonRequests);
    //     if (pokemons.find(p => p === null)) {
    //         return null;
    //     }
    //
    //     const result: SpeciesToPokemon = {};
    //     species.map((s, index) => {
    //         if (s !== null) {
    //             const p = pokemons[index]!;
    //             result[s.name] = {
    //                 name: p.name,
    //                 sprite: p.profile.sprite,
    //             };
    //         }
    //     });
    //     return result;
    // }, []);

    // if (speciesToPokemon === null) {
    //     return null;
    // }

    return (
        <View style={styles.container}>
            {evolutions.map((evo, index) => {
                if (index % 2 !== 0) return; // Skipping reason
                if (index >= evolutions.length - 2) return; // Skipping the last two index

                return (
                    <Evolution
                        key={evo}
                        fromSpecies={evo}
                        reason={evolutions[index + 1]}
                        toSpecies={evolutions[index + 2]}
                    />
                );
            })}
        </View>
    );
};

const Evolution = memo(
    ({ fromSpecies, reason, toSpecies }: { fromSpecies: string; reason: string; toSpecies: string }) => {
        const navigation = useNavigation<NativeStackNavigationProp<StackParamList, 'PokemonDetail'>>();

        const { data: from } = useFetchData<PokeAPI.PokemonSpecies>(
            `https://pokeapi.co/api/v2/pokemon-species/${fromSpecies}/`,
        );

        const { data: to } = useFetchData<PokeAPI.PokemonSpecies>(
            `https://pokeapi.co/api/v2/pokemon-species/${toSpecies}/`,
        );

        const {
            data: fromPokemon,
            isLoading: fromPokemonIsLoading,
            error: fromPokemonError,
        } = useFetchPokemonDetail(from?.varieties.find(v => v.is_default)?.pokemon.name || null);

        const {
            data: toPokemon,
            isLoading: toPokemonLoading,
            error: toPokemonError,
        } = useFetchPokemonDetail(to?.varieties.find(v => v.is_default)?.pokemon.name || null);

        const goToPokemonDetailScreen = (name: string) => {
            if (name) {
                navigation.push('PokemonDetail', { name });
            }
        };

        return (
            <View>
                <View style={styles.row}>
                    {fromPokemon ? (
                        <Pressable onPress={() => goToPokemonDetailScreen(fromPokemon.name)} style={styles.from}>
                            <Image
                                style={styles.sprite}
                                source={{
                                    uri: fromPokemon.profile.sprite || '',
                                }}
                                contentFit="contain"
                                accessibilityLabel={`Front default of ${fromPokemon.name}`}
                                recyclingKey={`front_default_${fromPokemon.name}`}
                                transition={200}
                            />
                        </Pressable>
                    ) : (
                        <MyText
                            style={{
                                flex: 2,
                                aspectRatio: 1,
                                textAlign: 'center',
                                textAlignVertical: 'center',
                                fontSize: 10,
                                color: 'grey',
                            }}
                        >
                            {fromPokemonIsLoading ? 'Loading...' : fromPokemonError}
                        </MyText>
                    )}
                    <View style={styles.arrow}>
                        <AntDesign name="arrowright" size={25} />
                    </View>
                    {toPokemon ? (
                        <Pressable onPress={() => goToPokemonDetailScreen(toPokemon.name)} style={styles.to}>
                            <Image
                                style={styles.sprite}
                                source={{
                                    uri: toPokemon.profile.sprite || '',
                                }}
                                contentFit="contain"
                                accessibilityLabel={`Front default of ${toPokemon.name}`}
                                recyclingKey={`front_default_${toPokemon.name}`}
                                transition={200}
                            />
                        </Pressable>
                    ) : (
                        <MyText
                            style={{
                                flex: 2,
                                aspectRatio: 1,
                                textAlign: 'center',
                                textAlignVertical: 'center',
                                fontSize: 10,
                                color: 'grey',
                            }}
                        >
                            {toPokemonLoading ? 'Loading...' : toPokemonError}
                        </MyText>
                    )}
                </View>
                <View style={styles.row}>
                    {fromPokemon && toPokemon ? (
                        <MyText style={styles.trigger}>
                            <MyText style={{ color: 'tomato' }}>{getFormattedName(fromPokemon.name)}</MyText>
                            {' evolves into '}
                            <MyText style={{ color: 'tomato' }}>{getFormattedName(toPokemon.name)}</MyText>
                            {reason ? ` ${reason}.` : '.'}
                        </MyText>
                    ) : (
                        <MyText>{'\n'}</MyText>
                    )}
                </View>
            </View>
        );
    },
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        minHeight: 42,
    },
    from: {
        flex: 2,
    },
    sprite: {
        aspectRatio: 1,
        width: '100%',
        height: '100%',
        flex: 1,
    },
    arrow: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    to: {
        flex: 2,
    },
    trigger: {
        // textTransform: 'capitalize',
    },
});

export default memo(Evolutions);
