import { useScrollToTop } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PokeAPI } from 'pokeapi-types';
import React, { useLayoutEffect, useMemo, useRef } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Card from '../components/Card';
import ErrorDisplay from '../components/ErrorDisplay';
import MyText from '../components/MyText';
import PikachuRunning from '../components/PikachuRunning';
import PressableItemList from '../components/PressableItemList';
import { app } from '../constants/colors';
import pokemons from '../constants/pokemons';
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

    const listRef = useRef(null);
    useScrollToTop(listRef);

    if (isLoading) {
        return <PikachuRunning />;
    }

    if (error) {
        return <ErrorDisplay error={error} />;
    }

    return (
        <FlatList
            data={[]}
            renderItem={null}
            style={styles.container}
            ListHeaderComponent={
                <Card>
                    {!!flavorText && <MyText style={styles.description}>{flavorText}</MyText>}
                    {!!effectEntry && <MyText style={styles.description}>{effectEntry}</MyText>}
                    <MyText style={styles.description}>
                        {'Originated generation: ' + getFormattedName(data!.generation.name)}
                    </MyText>
                </Card>
            }
            ListEmptyComponent={
                <Card title="Pokémon with this ability">
                    <PressableItemList
                        listRef={listRef}
                        data={pokemonsWithThisAbility}
                        onPressItem={item => {
                            const pokemon = pokemons[item.name];
                            if (pokemon) {
                                navigation.push('PokemonDetail', pokemon);
                            }
                        }}
                        spriteExtractor={item => pokemons[item.name]?.sprite}
                        extraExtractor={item => (item.isHidden ? 'hidden' : '')}
                    />
                </Card>
            }
            ListFooterComponent={<View style={styles.footer} />}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: app.darkColor,
    },
    description: {
        paddingVertical: 10,
    },
    footer: {
        marginBottom: 10,
    },
});
