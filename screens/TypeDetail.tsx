import { useScrollToTop } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlashList } from '@shopify/flash-list';
import { PokeAPI } from 'pokeapi-types';
import React, { useLayoutEffect, useMemo, useRef } from 'react';
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
import { app, cardColor } from '../constants/colors';
import useFetchData from '../hooks/useFetchData';
import { StackParamList } from '../types';
import getFormattedName from '../utils/getFormattedName';

type Props = NativeStackScreenProps<StackParamList, 'TypeDetail'>;

export default function TypeDetail({ route, navigation }: Props) {
    const { name } = route.params;
    const color = cardColor[name];
    const { isLoading, error, data } = useFetchData<PokeAPI.Type>(`https://pokeapi.co/api/v2/type/${name}`);

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

    const listRef = useRef(null);
    useScrollToTop(listRef);

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
                data={pokemonsWithThisType}
                keyExtractor={item => item.name}
                estimatedItemSize={60}
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
                    return (
                        <PokemonCellItem item={item} color={color} isLast={index === pokemonsWithThisType.length - 1} />
                    );
                }}
                ListEmptyComponent={<MyText style={styles.emptyText}>None!</MyText>}
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

// Nice TS
const extractTypeName = (type: TypesProps['types'][number]) => type.name;

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
