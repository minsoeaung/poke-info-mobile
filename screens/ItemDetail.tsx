import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FlashList } from '@shopify/flash-list';
import { Image } from 'expo-image';
import { PokeAPI } from 'pokeapi-types';
import React, { useLayoutEffect, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { FadeOut } from 'react-native-reanimated';

import Card from '../components/Card';
import ErrorDisplay from '../components/ErrorDisplay';
import LabelAndValue from '../components/LabelAndValue';
import MyText from '../components/MyText';
import PikachuRunning from '../components/PikachuRunning';
import PokemonCellItem from '../components/PokemonCellItem';
import TitleOnlyCard from '../components/TitleOnlyCard';
import { colors } from '../constants/colors';
import useFetchData from '../hooks/useFetchData';
import { StackParamList } from '../types';
import getFormattedName from '../utils/getFormattedName';

import hairlineWidth = StyleSheet.hairlineWidth;

type HeldByPokemonsType = { name: string };

type Results = {
    heldByPokemons: HeldByPokemonsType[];
    flavorText: string;
    effectEntry: string;
};

export default function ItemDetail() {
    const route = useRoute<RouteProp<StackParamList, 'ItemDetail'>>();
    const { name } = route.params;
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList, 'ItemDetail'>>();

    const { isLoading, error, data } = useFetchData<PokeAPI.Item>(`https://pokeapi.co/api/v2/item/${name}`);

    const { heldByPokemons, flavorText, effectEntry } = useMemo(() => {
        const results: Results = { heldByPokemons: [], flavorText: '', effectEntry: '' };

        if (data) {
            const enFlavorText = data.flavor_text_entries.find(e => e.language.name === 'en');
            if (enFlavorText) {
                results.flavorText = enFlavorText.text.replace('\n', ' ');
            }
            const enEffect = data.effect_entries.find(e => e.language.name === 'en');
            if (enEffect) {
                results.effectEntry = enEffect.effect.replace('\n', ' ');
            }

            results.heldByPokemons = data.held_by_pokemon.map(d => ({
                name: d.pokemon.name,
            }));
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
                data={heldByPokemons}
                estimatedItemSize={60}
                keyExtractor={(item, index) => `${index}-${item.name}`}
                renderItem={({ item, index }) => {
                    return (
                        <PokemonCellItem item={item} color={colors.text} isLast={index === heldByPokemons.length - 1} />
                    );
                }}
                contentContainerStyle={styles.contentContainer}
                ListHeaderComponentStyle={styles.listHeaderContainer}
                ListHeaderComponent={
                    <>
                        <Card>
                            {!!data!.sprites.default && (
                                // <Box
                                //     setup={{
                                //         ...demoFrameWarning,
                                //         width: 100,
                                //         height: 100,
                                //         margin: 5,
                                //         scale: 0.5,
                                //         backgroundColor: 'white',
                                //     }}
                                // >
                                <Image
                                    style={styles.itemImage}
                                    source={{
                                        uri: data!.sprites.default,
                                    }}
                                    accessibilityLabel={`Image of ${name}`}
                                    recyclingKey={name}
                                    transition={200}
                                />
                                // </Box>
                            )}
                            {!!flavorText && <MyText style={styles.description}>{flavorText}</MyText>}
                            {!!effectEntry && <MyText style={styles.description}>{effectEntry}</MyText>}
                        </Card>
                        <Card>
                            <LabelAndValue
                                label="Cost"
                                value={
                                    <MyText style={styles.description2}>
                                        {data!.cost > 0 ? data!.cost : 'Not for sale'}
                                    </MyText>
                                }
                            />
                            {data!.fling_power > 0 && (
                                <LabelAndValue
                                    label="Fling Power"
                                    value={<MyText style={styles.description2}>{data!.fling_power}</MyText>}
                                />
                            )}
                        </Card>
                        <TitleOnlyCard
                            borderColor={colors.text}
                            title="Pokémon that might be found holding this item"
                            titleBgColor="whitesmoke"
                        />
                    </>
                }
                ListEmptyComponent={
                    <View style={styles.listEmpty}>
                        <MyText style={styles.emptyText}>None!</MyText>
                    </View>
                }
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
    itemImage: {
        width: 100,
        height: 100,
        aspectRatio: 1,
        borderRadius: 5,
        borderWidth: hairlineWidth,
        borderColor: 'black',
    },
    description: {
        paddingVertical: 10,
        color: colors.cardText,
    },
    description2: {
        color: colors.cardText,
    },
    listEmpty: {
        backgroundColor: colors.card,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    emptyText: {
        color: colors.cardText,
        height: 150,
        textAlignVertical: 'center',
        textAlign: 'center',
    },
});
