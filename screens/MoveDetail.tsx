import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlashList } from '@shopify/flash-list';
import { PokeAPI } from 'pokeapi-types';
import React, { useLayoutEffect, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { FadeOut } from 'react-native-reanimated';

import Card from '../components/Card';
import ErrorDisplay from '../components/ErrorDisplay';
import LabelAndValue from '../components/LabelAndValue';
import { MoveDamageClass } from '../components/MoveDamageClass';
import MyText from '../components/MyText';
import PikachuRunning from '../components/PikachuRunning';
import PokemonCellItem from '../components/PokemonCellItem';
import TitleOnlyCard from '../components/TitleOnlyCard';
import pokemonDetails from '../constants/POKEMON_DETAILS';
import { colors, typeColor } from '../constants/colors';
import useFetchData from '../hooks/useFetchData';
import { MoveLearnMethod, StackParamList } from '../types';
import getFormattedName from '../utils/getFormattedName';

type Props = NativeStackScreenProps<StackParamList, 'MoveDetail'>;

type PokemonsWithThisMoveType = {
    name: string;
    learnMethod: MoveLearnMethod | '';
    learnedAtLevel: number | null;
};

type Results = {
    pokemonsWithThisMove: PokemonsWithThisMoveType[];
    description: string | null;
    power: number | null;
    accuracy: number | null;
    pp: number | null;
    type: string;
    damageClass: string;
};

export default function MoveDetail({ navigation, route }: Props) {
    const { name } = route.params;

    const { isLoading, error, data } = useFetchData<PokeAPI.Move>(`https://pokeapi.co/api/v2/move/${name}`);

    const { pokemonsWithThisMove, pp, description, accuracy, power, type, damageClass } = useMemo(() => {
        const results: Results = {
            pokemonsWithThisMove: [],
            accuracy: null,
            pp: null,
            power: null,
            description: null,
            damageClass: '',
            type: '',
        };

        if (data) {
            // @ts-ignore
            if (Array.isArray(data['learned_by_pokemon'])) {
                // @ts-ignore
                results.pokemonsWithThisMove = data['learned_by_pokemon'].map((p: PokeAPI.NamedAPIResource) => {
                    let learnMethod = '';
                    let level = null;

                    const isLevelUp = pokemonDetails[p.name].moves.levelUp.find(x => x[0] === data.name);
                    if (isLevelUp) {
                        learnMethod = 'levelUp';
                        level = isLevelUp[1];
                    }

                    if (!learnMethod) {
                        const isMachine = pokemonDetails[p.name].moves.machine.find(x => x === data.name);
                        if (isMachine) learnMethod = 'machine';
                    }

                    if (!learnMethod) {
                        const isTutor = pokemonDetails[p.name].moves.tutor.find(x => x === data.name);
                        if (isTutor) learnMethod = 'tutor';
                    }

                    if (!learnMethod) {
                        const isEgg = pokemonDetails[p.name].moves.egg.find(x => x === data.name);
                        if (isEgg) learnMethod = 'egg';
                    }

                    return {
                        name: p.name,
                        learnMethod,
                        learnedAtLevel: level,
                    };
                });
            }

            results.description =
                data.flavor_text_entries.find(entry => entry.language.name === 'en')?.flavor_text || null;

            if (results.description) {
                results.description = results.description.replace('\n', ' ');
            }

            results.power = data.power;
            results.accuracy = data.accuracy;
            results.pp = data.pp;
            results.type = data.type.name;
            results.damageClass = data.damage_class.name;
        }

        return results;
    }, [data]);

    useLayoutEffect(() => {
        navigation.setOptions({ title: getFormattedName(name) });
    }, []);

    if (isLoading) {
        return (
            <Animated.View style={StyleSheet.absoluteFill} exiting={FadeOut}>
                <PikachuRunning />
            </Animated.View>
        );
    }

    if (error) {
        return <ErrorDisplay error={error} />;
    }

    return (
        <View style={styles.container}>
            <FlashList
                data={pokemonsWithThisMove}
                keyExtractor={(item, index) => `${index}-${item.name}`}
                estimatedItemSize={60}
                contentContainerStyle={styles.contentContainer}
                ListHeaderComponentStyle={styles.listHeaderContainer}
                ListHeaderComponent={
                    <>
                        {description && (
                            <Card>
                                <MyText style={styles.description}>{description}</MyText>
                            </Card>
                        )}
                        <Card>
                            <LabelAndValue
                                label="Type"
                                value={
                                    <MyText
                                        style={StyleSheet.flatten([
                                            styles.type,
                                            {
                                                backgroundColor: typeColor[type as keyof typeof typeColor],
                                            },
                                        ])}
                                    >
                                        {type}
                                    </MyText>
                                }
                            />
                            <LabelAndValue
                                label="Category"
                                value={
                                    <View style={{ flexDirection: 'row', gap: 5 }}>
                                        <MyText>{damageClass}</MyText>
                                        <MoveDamageClass damageClass={damageClass} />
                                    </View>
                                }
                            />
                            <LabelAndValue label="Power" value={<MyText>{power}</MyText>} />
                            <LabelAndValue
                                label="Accuracy"
                                value={<MyText>{accuracy ? `${accuracy} %` : null}</MyText>}
                            />
                            <LabelAndValue label="PP" value={<MyText>{pp}</MyText>} />
                        </Card>
                        <TitleOnlyCard
                            borderColor={colors.text}
                            title="Pokémon with this move"
                            titleBgColor="whitesmoke"
                        />
                    </>
                }
                renderItem={({ item, index }) => {
                    return (
                        <PokemonCellItem
                            item={item}
                            color={colors.text}
                            isLast={index === pokemonsWithThisMove.length - 1}
                        />
                    );
                }}
                ListEmptyComponent={() => <MyText style={styles.emptyText}>None!</MyText>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    contentContainer: {
        padding: 10,
    },
    listHeaderContainer: {
        gap: 15,
    },
    description: {
        paddingVertical: 10,
        color: colors.cardText,
    },
    emptyText: {
        paddingVertical: 50,
        textAlign: 'center',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.text,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        backgroundColor: colors.card,
    },
    type: {
        paddingHorizontal: 3,
        paddingVertical: 2,
        color: colors.typeText,
        fontSize: 9,
        lineHeight: 12,
        borderRadius: 2,

        textShadowColor: 'rgba(0, 0, 0, 0.9)',
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 3,
        textTransform: 'capitalize',
    },
});
