import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image } from 'expo-image';
import { PokeAPI } from 'pokeapi-types';
import React, { useLayoutEffect, useMemo } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Card from '../components/Card';
import Description from '../components/Description';
import ErrorDisplay from '../components/ErrorDisplay';
import MyText from '../components/MyText';
import PikachuRunning from '../components/PikachuRunning';
import PressableItemList from '../components/PressableItemList';
import { app } from '../constants/colors';
import pokemons from '../constants/pokemons';
import useFetchData from '../hooks/useFetchData';
import { StackParamList } from '../types';
import getFormattedName from '../utils/getFormattedName';

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
                    <PressableItemList
                        data={heldByPokemons}
                        onPressItem={item => {
                            navigation.push('PokemonDetail', pokemons[item.name]);
                        }}
                        spriteExtractor={item => pokemons[item.name]?.sprite}
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
    footer: {
        marginBottom: 10,
    },
    itemImage: {
        width: 30,
        height: 30,
    },
});
