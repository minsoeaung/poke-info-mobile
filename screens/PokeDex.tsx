import { useScrollToTop } from '@react-navigation/native';
import { PokeAPI } from 'pokeapi-types';
import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';

import MyText from '../components/MyText';
import PokemonCard from '../components/PokemonCard';
import { appColor } from '../constants/colors';

export default function PokeDex() {
    const [next, setNext] = useState(
        'https://pokeapi.co/api/v2/pokemon?offset=0&limit=27',
    );
    const [page, setPage] = useState(1);
    const [fetching, setFetching] = useState(false);
    const [data, setData] = useState<PokeAPI.NamedAPIResource[]>([]);
    const [error, setError] = useState('');

    const ref = useRef(null);

    useScrollToTop(ref);

    useEffect(() => {
        (async () => {
            setFetching(true);
            try {
                const res = await fetch(next);
                const data = await res.json();
                if (data) {
                    setNext(data.next);
                    setData(prevState => [...prevState, ...data.results]);
                }
            } catch {
                setError('No internet connection.');
            } finally {
                setFetching(false);
            }
        })();
    }, [page]);

    const renderItem = ({ item }: { item: PokeAPI.NamedAPIResource }) => {
        return <PokemonCard url={item.url} />;
    };

    return (
        <View style={styles.container}>
            <FlatList
                ref={ref}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => item.name + index}
                numColumns={3}
                onEndReached={() => !error && setPage(page + 1)}
                ListFooterComponent={
                    error ? (
                        <MyText>{error}</MyText>
                    ) : fetching ? (
                        <ActivityIndicator color={appColor.border} />
                    ) : null
                }
                ListFooterComponentStyle={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 5,
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColor.appBg,
    },
});
