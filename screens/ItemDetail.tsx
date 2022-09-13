import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PokeAPI } from 'pokeapi-types';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';

import Card from '../components/Card';
import Description from '../components/Description';
import ErrorDisplay from '../components/ErrorDisplay';
import LoadingText from '../components/LoadingText';
import MyText from '../components/MyText';
import { PressableNameList } from '../components/PressableNameList';
import { app } from '../constants/colors';
import useFetchData from '../hooks/useFetchData';
import { NativeStackParamList, PressableListItemType } from '../types';
import getFormattedName from '../utils/getFormattedName';

export default function ItemDetail() {
    const route = useRoute<RouteProp<NativeStackParamList, 'ItemDetail'>>();
    const { name } = route.params;
    const navigation = useNavigation<NativeStackNavigationProp<NativeStackParamList, 'ItemDetail'>>();

    const [heldByPokemons, setHeldByPokemons] = useState<PressableListItemType[]>([]);
    const [flavorText, setFlavorText] = useState('');
    const [effectEntry, setEffectEntry] = useState('');

    const { isLoading, error, data } = useFetchData<PokeAPI.Item>(`https://pokeapi.co/api/v2/item/${name}`);

    useEffect(() => {
        if (data) {
            const enFlavorText = data.flavor_text_entries.find(e => e.language.name === 'en');
            if (enFlavorText) {
                setFlavorText(enFlavorText.text.replace('\n', ' '));
            }
            const enEffect = data.effect_entries.find(e => e.language.name === 'en');
            if (enEffect) {
                setEffectEntry(enEffect.effect.replace('\n', ' '));
            }
            if (data.sprites.default) {
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
            const list: PressableListItemType[] = data.held_by_pokemon.map(d => ({
                name: d.pokemon.name,
            }));
            setHeldByPokemons(list);
        }
    }, [data]);

    useEffect(() => {
        navigation.setOptions({ title: getFormattedName(name) });
    }, []);

    if (isLoading) {
        return <LoadingText />;
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
                        {flavorText.length > 0 && <MyText>{flavorText}</MyText>}
                        {effectEntry.length > 0 && <MyText>{effectEntry}</MyText>}
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
