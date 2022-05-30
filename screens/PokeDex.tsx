import { useScrollToTop } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PokeAPI } from 'pokeapi-types';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
    ActivityIndicator,
    Dimensions,
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

import { MyNameList } from '../components/MyNameList';
import MyText from '../components/MyText';
import PokemonCard from '../components/PokemonCard';
import { appColor } from '../constants/colors';
import { fonts } from '../constants/fonts';
import { pokemons } from '../constants/pokemons';
import { NativeStackParamList } from '../types';

const { height } = Dimensions.get('window');

type Props = NativeStackScreenProps<NativeStackParamList, 'PokeDex'>;

const initialTop = -65;

export default function PokeDex({ navigation }: Props) {
    const [next, setNext] = useState<string | null>(
        'https://pokeapi.co/api/v2/pokemon?offset=0&limit=27',
    );
    const [page, setPage] = useState(1);
    const [fetching, setFetching] = useState(false);
    const [data, setData] = useState<PokeAPI.NamedAPIResource[]>([]);
    const [error, setError] = useState('');
    const [allPokemonNameList, setAllPokemonNameList] = useState(pokemons);

    const ref = useRef(null);
    useScrollToTop(ref);

    const top = useSharedValue(initialTop);
    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: top.value }],
        };
    });

    const filterTheSuggestionList = (query: string) => {
        if (!query.trim()) {
            setAllPokemonNameList(pokemons);
        } else {
            setAllPokemonNameList(
                pokemons.filter(pokemon =>
                    pokemon.includes(query.toLowerCase().replace(' ', '-')),
                ),
            );
        }
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Pressable
                    onPress={() => {
                        if (top.value === initialTop) {
                            // show
                            top.value = withTiming(10);
                        } else {
                            // hide
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
                        onChangeText={(value: string) =>
                            filterTheSuggestionList(value)
                        }
                        placeholder="Search..."
                    />
                </View>
            </Animated.View>

            <View
                style={[StyleSheet.absoluteFill, styles.overlaySuggestionList]}>
                <MyNameList
                    goTo="PokemonDetail"
                    size="small"
                    data={allPokemonNameList}
                    keyExtractor={item => item}
                />
            </View>

            <View>
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
    overlaySearchInput: {
        zIndex: 1,
        height: 40,
        top: 0,
        left: 20,
        right: 20,
        elevation: 10,
    },
    searchInputWrap: {
        backgroundColor: appColor.headerBg,
        borderWidth: 1,
        elevation: 10,
        borderRadius: 10,
    },
    searchInput: {
        height: 40,
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontFamily: fonts.fontDotGothic,
    },
    searchBtn: {
        paddingLeft: 20,
        paddingVertical: 10,
    },
    overlaySuggestionList: {
        zIndex: 1,
        top: 60,
        left: 20,
        right: 20,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        height: height / 3,
        backgroundColor: appColor.headerBg,
        elevation: 10,
    },
});
