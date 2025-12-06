import { useScrollToTop } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlashList } from '@shopify/flash-list';
import { PokeAPI } from 'pokeapi-types';
import React, { useCallback, useLayoutEffect, useMemo, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { FadeOut } from 'react-native-reanimated';

import Card from '../components/Card';
import ErrorDisplay from '../components/ErrorDisplay';
import LabelAndValue from '../components/LabelAndValue';
import MyText from '../components/MyText';
import PikachuRunning from '../components/PikachuRunning';
import PokemonCellItem from '../components/PokemonCellItem';
import PokemonTypes from '../components/PokemonTypes';
import TitleOnlyCard from '../components/TitleOnlyCard';
import { colors, cardColor } from '../constants/colors';
import useFetchData from '../hooks/useFetchData';
import { StackParamList } from '../types';
import getFormattedName from '../utils/getFormattedName';
import { GradientBackground } from '../components/GradientBackground';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { EmptyView } from '../components/EmptyView';

type Props = NativeStackScreenProps<StackParamList, 'TypeDetail'>;

export default function TypeDetail({ route, navigation }: Props) {
    const { name } = route.params;
    const color = cardColor[name];
    const { isLoading, error, data } = useFetchData<PokeAPI.Type>(`https://pokeapi.co/api/v2/type/${name}`);
    const bottom = useBottomTabBarHeight();

    const pokemonsWithThisType = useMemo(() => {
        if (data) {
            return data.pokemon.map(d => ({
                name: d.pokemon.name,
                typeSlot: d.slot,
            }));
        } else {
            return [];
        }
    }, [data]);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: getFormattedName(name),
        });
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
            <GradientBackground />
            <FlashList
                data={pokemonsWithThisType}
                keyExtractor={(item, index) => `${index}-${item.name}`}
                contentContainerStyle={styles.contentContainer}
                ListHeaderComponentStyle={styles.listHeaderContainer}
                ListHeaderComponent={
                    <>
                        <Card title="Attack" titleBgColor={color} childrenGap={20}>
                            {data!.damage_relations.double_damage_to.length > 0 && (
                                <LabelAndValue
                                    label="2x damage"
                                    value={
                                        <PokemonTypes
                                            types={data!.damage_relations.double_damage_to.map(extractTypeName)}
                                        />
                                    }
                                />
                            )}
                            {data!.damage_relations.half_damage_to.length > 0 && (
                                <LabelAndValue
                                    label="0.5x damage"
                                    value={
                                        <PokemonTypes
                                            types={data!.damage_relations.half_damage_to.map(extractTypeName)}
                                        />
                                    }
                                />
                            )}
                            {data!.damage_relations.no_damage_to.length > 0 && (
                                <LabelAndValue
                                    label="no damage"
                                    value={
                                        <PokemonTypes
                                            types={data!.damage_relations.no_damage_to.map(extractTypeName)}
                                        />
                                    }
                                />
                            )}
                        </Card>
                        <Card title="Defense" titleBgColor={color} childrenGap={20}>
                            {data!.damage_relations.double_damage_from.length > 0 && (
                                <LabelAndValue
                                    label="2x damage"
                                    value={
                                        <PokemonTypes
                                            types={data!.damage_relations.double_damage_from.map(extractTypeName)}
                                        />
                                    }
                                />
                            )}
                            {data!.damage_relations.half_damage_from.length > 0 && (
                                <LabelAndValue
                                    label="0.5x damage"
                                    value={
                                        <PokemonTypes
                                            types={data!.damage_relations.half_damage_from.map(extractTypeName)}
                                        />
                                    }
                                />
                            )}
                            {data!.damage_relations.no_damage_from.length > 0 && (
                                <LabelAndValue
                                    label="no damage"
                                    value={
                                        <PokemonTypes
                                            types={data!.damage_relations.no_damage_from.map(extractTypeName)}
                                        />
                                    }
                                />
                            )}
                        </Card>
                        <TitleOnlyCard borderColor={color} title={`${name} Pokémon`} titleBgColor={color} />
                    </>
                }
                renderItem={({ item, index }) => {
                    const isLast = index === pokemonsWithThisType.length - 1;

                    return (
                        <View
                            style={{
                                backgroundColor: colors.card,
                                borderBottomLeftRadius: isLast ? 10 : 0,
                                borderBottomRightRadius: isLast ? 10 : 0,
                            }}
                        >
                            <PokemonCellItem item={item} color={color} isLast={isLast} />
                        </View>
                    );
                }}
                ListEmptyComponent={
                    <View
                        style={{
                            backgroundColor: colors.card,
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                        }}
                    >
                        <EmptyView />
                    </View>
                }
                ListFooterComponent={() => <View style={{ height: bottom }} />}
            />
        </View>
    );
}

type TypesProps = {
    types: {
        name: string;
        url: string;
    }[];
};

const extractTypeName = (type: TypesProps['types'][number]) => type.name as keyof typeof cardColor;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        padding: 10,
    },
    listHeaderContainer: {
        gap: 15,
    },
    emptyText: {
        paddingVertical: 50,
        textAlign: 'center',
        color: colors.text,
        backgroundColor: colors.card,
    },
});
