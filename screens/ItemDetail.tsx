import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PokeAPI } from 'pokeapi-types';
import React, { useLayoutEffect, useMemo } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

import Card from '../components/Card';
import Description from '../components/Description';
import ErrorDisplay from '../components/ErrorDisplay';
import LoadingText from '../components/LoadingText';
import MyText from '../components/MyText';
import { PressableNameList } from '../components/PressableNameList';
import { app } from '../constants/colors';
import useFetchData from '../hooks/useFetchData';
import { NativeStackParamList } from '../types';
import getFormattedName from '../utils/getFormattedName';

type HeldByPokemonsType = { name: string };

type Results = {
    heldByPokemons: HeldByPokemonsType[];
    flavorText: string;
    effectEntry: string;
};

export default function ItemDetail() {
    const route = useRoute<RouteProp<NativeStackParamList, 'ItemDetail'>>();
    const { name } = route.params;
    const navigation = useNavigation<NativeStackNavigationProp<NativeStackParamList, 'ItemDetail'>>();

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
                    />
                ),
            });
        }
    }, [data]);

    if (isLoading) {
        return <LoadingText />;
    }

    if (error) {
        return <ErrorDisplay error={error} />;
    }

    return (
        <Animated.FlatList
            entering={FadeIn.duration(100)}
            data={[]}
            renderItem={null}
            style={styles.container}
            ListHeaderComponent={
                <>
                    <Card>
                        {!!flavorText && <MyText>{flavorText}</MyText>}
                        {!!effectEntry && <MyText>{effectEntry}</MyText>}
                    </Card>
                    <Card>
                        <Description
                            label="Cost: "
                            value={<MyText>{data!.cost > 0 ? data!.cost : 'Not for sale'}</MyText>}
                            noBorder
                        />
                        {data!.fling_power > 0 && (
                            <Description label="Fling Power:" value={<MyText>{data!.fling_power}</MyText>} noBorder />
                        )}
                    </Card>
                </>
            }
            ListEmptyComponent={
                <Card title="Pokémon that might be found holding this item">
                    <PressableNameList goTo="PokemonDetail" data={heldByPokemons} />
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
    footer: {
        marginBottom: 10,
    },
    itemImage: {
        width: 30,
        height: 30,
    },
});
