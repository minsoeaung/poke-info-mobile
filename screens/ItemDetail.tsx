import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PokeAPI } from 'pokeapi-types';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';

import Description from '../components/Description';
import ErrorDisplay from '../components/ErrorDisplay';
import LoadingText from '../components/LoadingText';
import MyText from '../components/MyText';
import { PressableNameList } from '../components/PressableNameList';
import { appColor } from '../constants/colors';
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
                    <View style={styles.boxWrap}>
                        {flavorText.length > 0 && <MyText style={styles.description}>{flavorText}</MyText>}
                        {effectEntry.length > 0 && <MyText style={styles.description}>{effectEntry}</MyText>}
                    </View>
                    <View style={styles.boxWrap}>
                        <Description
                            label="Cost"
                            value={<MyText>{data!.cost > 0 ? data!.cost : 'Not for sale'}</MyText>}
                            noBorder
                        />
                        {data!.fling_power > 0 && (
                            <Description label="Fling Power" value={<MyText>{data!.fling_power}</MyText>} noBorder />
                        )}
                    </View>
                </>
            }
            ListEmptyComponent={
                <View style={styles.boxWrap}>
                    <MyText style={styles.boxTitle}>Pokémon that might be found holding this item</MyText>
                    <PressableNameList goTo="PokemonDetail" data={heldByPokemons} />
                </View>
            }
            ListFooterComponent={<View style={styles.footer} />}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: appColor.primary,
    },
    boxWrap: {
        marginBottom: 10,
        backgroundColor: appColor.secondary,
        borderRadius: 10,
        borderWidth: 0.5,
        paddingHorizontal: 10,
    },
    boxTitle: {
        fontSize: 20,
        padding: 10,
        color: '#000',
    },
    description: {
        padding: 10,
    },
    footer: {
        marginBottom: 10,
    },
    itemImage: {
        width: 30,
        height: 30,
    },
});
