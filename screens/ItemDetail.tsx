import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image } from 'expo-image';
import { PokeAPI } from 'pokeapi-types';
import React, { useLayoutEffect, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import Card from '../components/Card';
import ErrorDisplay from '../components/ErrorDisplay';
import LabelAndValue from '../components/LabelAndValue';
import MyText from '../components/MyText';
import PikachuRunning from '../components/PikachuRunning';
import { app } from '../constants/colors';
import useFetchData from '../hooks/useFetchData';
import { StackParamList } from '../types';
import getFormattedName from '../utils/getFormattedName';
import Animated, { FadeOut } from 'react-native-reanimated';
import { FlashList } from '@shopify/flash-list';
import PokemonCellItem from '../components/PokemonCellItem';
import TitleOnlyCard from '../components/TitleOnlyCard';

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
        if (data && data.sprites.default) {
            navigation.setOptions({
                headerRight: () => (
                    <Image
                        style={styles.itemImage}
                        source={{
                            uri: data!.sprites.default,
                        }}
                        accessibilityLabel={`Image of ${name}`}
                        recyclingKey={name}
                        transition={200}
                    />
                ),
            });
        }
    }, [data]);

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
                renderItem={({ item, index }) => {
                    return (
                        <PokemonCellItem
                            item={item}
                            color={app.lightColor}
                            isLast={index === heldByPokemons.length - 1}
                        />
                    );
                }}
                contentContainerStyle={styles.contentContainer}
                ListHeaderComponentStyle={styles.listHeaderContainer}
                ListHeaderComponent={
                    <>
                        <Card>
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
                            borderColor={app.lightColor}
                            title="Pokémon that might be found holding this item"
                            titleBgColor={app.lightColor}
                        />
                    </>
                }
                ListEmptyComponent={<MyText style={styles.emptyText}>None!</MyText>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: app.darkColor,
    },
    contentContainer: {
        padding: 10,
    },
    listHeaderContainer: {
        gap: 25,
    },
    itemImage: {
        width: 50,
        height: 50,
    },
    description: {
        paddingVertical: 10,
        color: app.lightColor,
    },
    description2: {
        color: app.lightColor,
    },
    emptyText: {
        paddingVertical: 50,
        textAlign: 'center',
        color: app.lightColor,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: app.lightColor,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
});
