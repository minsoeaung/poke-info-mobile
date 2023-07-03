import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlashList } from '@shopify/flash-list';
import { PokeAPI } from 'pokeapi-types';
import React, { useLayoutEffect, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { FadeOut } from 'react-native-reanimated';

import Card from '../components/Card';
import ErrorDisplay from '../components/ErrorDisplay';
import MyText from '../components/MyText';
import PikachuRunning from '../components/PikachuRunning';
import PokemonCellItem from '../components/PokemonCellItem';
import TitleOnlyCard from '../components/TitleOnlyCard';
import { app } from '../constants/colors';
import useFetchData from '../hooks/useFetchData';
import { StackParamList } from '../types';
import getFormattedName from '../utils/getFormattedName';

type Props = NativeStackScreenProps<StackParamList, 'AbilityDetail'>;

type PokemonsWithThisAbilityType = {
    name: string;
    isHidden: boolean;
    typeSlot: number;
};

type Results = {
    pokemonsWithThisAbility: PokemonsWithThisAbilityType[];
    flavorText: string;
    effectEntry: string;
};

export default function AbilityDetail({ navigation, route }: Props) {
    const { name } = route.params;

    const { isLoading, error, data } = useFetchData<PokeAPI.Ability>(`https://pokeapi.co/api/v2/ability/${name}`);

    const { pokemonsWithThisAbility, flavorText, effectEntry } = useMemo(() => {
        const results: Results = { pokemonsWithThisAbility: [], flavorText: '', effectEntry: '' };

        if (data) {
            const enFlavorText = data.flavor_text_entries.find(e => e.language.name === 'en');
            if (enFlavorText) {
                results.flavorText = enFlavorText.flavor_text.replace('\n', ' ');
            }
            const enEffect = data.effect_entries.find(e => e.language.name === 'en');
            if (enEffect) {
                results.effectEntry = enEffect.effect.replace('\n', ' ');
            }
            results.pokemonsWithThisAbility = data.pokemon.map(d => ({
                name: d.pokemon.name,
                isHidden: d.is_hidden,
                typeSlot: d.slot,
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
                data={pokemonsWithThisAbility}
                keyExtractor={item => item.name}
                estimatedItemSize={60}
                contentContainerStyle={styles.contentContainer}
                ListHeaderComponentStyle={styles.listHeaderContainer}
                ListHeaderComponent={
                    <>
                        <Card>
                            {!!flavorText && <MyText style={styles.description}>{flavorText}</MyText>}
                            {!!effectEntry && <MyText style={styles.description}>{effectEntry}</MyText>}
                            <MyText style={styles.description}>
                                {'Originated Generation  -  ' + getFormattedName(data!.generation.name)}
                            </MyText>
                        </Card>
                        <TitleOnlyCard
                            borderColor={app.lightColor}
                            title="Pokémon with this ability"
                            titleBgColor={app.lightColor}
                        />
                    </>
                }
                renderItem={({ item, index }) => {
                    return (
                        <PokemonCellItem
                            item={item}
                            color={app.lightColor}
                            isLast={index === pokemonsWithThisAbility.length - 1}
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
        backgroundColor: app.darkColor,
    },
    contentContainer: {
        padding: 10,
    },
    listHeaderContainer: {
        gap: 25,
    },
    description: {
        paddingVertical: 10,
        color: app.lightColor,
    },
    emptyText: {
        paddingVertical: 50,
        textAlign: 'center',
        color: app.lightColor,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: app.lightColor,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
});
