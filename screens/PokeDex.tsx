import { useScrollToTop } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PokeAPI } from 'pokeapi-types';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
    ActivityIndicator,
    FlatList,
    Pressable,
    SafeAreaView,
    StyleSheet,
    TextInput,
    View,
} from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';

import MyText from '../components/MyText';
import PokemonCard from '../components/PokemonCard';
import { appColor } from '../constants/colors';
import { fonts } from '../constants/fonts';
import { NativeStackParamList } from '../types';

type Props = NativeStackScreenProps<NativeStackParamList, 'PokeDex'>;

const initialTop = -65;

export default function PokeDex({ navigation }: Props) {
    const [next, setNext] = useState<string | null>(
        'https://pokeapi.co/api/v2/pokemon?offset=0&limit=27',
    );
    const [page, setPage] = useState(1); // leave this here
    const [fetching, setFetching] = useState(false);
    const [data, setData] = useState<PokeAPI.NamedAPIResource[]>([]);
    const [error, setError] = useState('');

    const ref = useRef(null);
    useScrollToTop(ref);

    const [searchValue, onChangeSearchValue] = useState('');

    const top = useSharedValue(initialTop);
    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: top.value }],
        };
    });

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Pressable
                    onPress={() => {
                        if (top.value === initialTop) {
                            top.value = withTiming(0);
                        } else {
                            top.value = withTiming(initialTop);
                        }
                    }}>
                    {({ pressed }) => (
                        <MyText
                            style={StyleSheet.flatten([
                                styles.searchBtn,
                                {
                                    color: pressed ? 'tomato' : 'black',
                                },
                            ])}>
                            Search
                        </MyText>
                    )}
                </Pressable>
            ),
        });
    }, [navigation]);

    useEffect(() => {
        (async () => {
            setFetching(true);
            try {
                if (next) {
                    const res = await fetch(next);
                    const data = await res.json();
                    if (data) {
                        setNext(data.next);
                        setData(prevState => [...prevState, ...data.results]);
                    }
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
        <SafeAreaView style={styles.container}>
            <Animated.View
                style={[
                    StyleSheet.absoluteFill,
                    styles.overlaySearchInput,
                    animatedStyles,
                ]}>
                <View style={styles.searchInputWrap}>
                    <TextInput
                        style={styles.searchInput}
                        onChangeText={onChangeSearchValue}
                        placeholder="Search..."
                    />
                </View>
            </Animated.View>
            <View style={styles.flatListContainer}>
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
                    ListFooterComponentStyle={styles.listFooter}
                    contentInsetAdjustmentBehavior="automatic"
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColor.appBg,
        paddingHorizontal: 5,
    },
    listFooter: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
    },
    searchInputWrap: {
        backgroundColor: appColor.headerBg,
        borderWidth: 1,
    },
    searchInput: {
        height: 40,
        padding: 10,
        fontFamily: fonts.fontDotGothic,
    },
    searchBtn: {
        paddingLeft: 20,
        paddingVertical: 10,
    },
    flatListContainer: {
        flex: 1,
    },
    overlaySearchInput: {
        zIndex: 1,
        height: 40,
        top: 0,
        left: 0,
        right: 0,
        elevation: 10,
    },
});
