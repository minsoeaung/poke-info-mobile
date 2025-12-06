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
import { colors } from '../constants/colors';
import useFetchData from '../hooks/useFetchData';
import { StackParamList } from '../types';
import getFormattedName from '../utils/getFormattedName';
import { GradientBackground } from '../components/GradientBackground';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { EmptyView } from '../components/EmptyView';

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

    const bottom = useBottomTabBarHeight();

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
            <GradientBackground />
            <FlashList
                data={pokemonsWithThisAbility}
                keyExtractor={(item, index) => `${index}-${item.name}`}
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
                            borderColor={colors.text}
                            title="Pokémon with this ability"
                            titleBgColor="whitesmoke"
                        />
                    </>
                }
                renderItem={({ item, index }) => {
                    const isLast = index === pokemonsWithThisAbility.length - 1;

                    return (
                        <View
                            style={{
                                backgroundColor: colors.card,
                                borderBottomLeftRadius: isLast ? 10 : 0,
                                borderBottomRightRadius: isLast ? 10 : 0,
                            }}
                        >
                            <PokemonCellItem item={item} color={colors.text} isLast={isLast} />
                        </View>
                    );
                }}
                ListEmptyComponent={() => (
                    <View
                        style={{
                            backgroundColor: colors.card,
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                        }}
                    >
                        <EmptyView />
                    </View>
                )}
                ListFooterComponent={() => <View style={{ height: bottom }} />}
            />
        </View>
    );
}

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
});
