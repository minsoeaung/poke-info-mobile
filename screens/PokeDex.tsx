import { useScrollToTop } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PokeAPI } from 'pokeapi-types';
import React, { useLayoutEffect, useRef, useState } from 'react';
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
import usePagination from '../hooks/usePagination';
import { NativeStackParamList } from '../types';

const { height } = Dimensions.get('window');

type Props = NativeStackScreenProps<NativeStackParamList, 'PokeDex'>;

const SEARCH_BOX_TOP_POSITION = -65;

export default function PokeDex({ navigation }: Props) {
    const [page, setPage] = useState(1);
    const [suggestionList, setSuggestionList] = useState(pokemons);
    const [searchVisible, setSearchVisible] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const listRef = useRef(null);
    useScrollToTop(listRef);

    const { data, error, isLoading } = usePagination(
        page,
        'https://pokeapi.co/api/v2/pokemon?offset=0&limit=27',
    );

    const top = useSharedValue(SEARCH_BOX_TOP_POSITION);
    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: top.value }],
        };
    });

    const filterTheSuggestionList = (query: string) => {
        if (!query.trim()) {
            setSuggestionList(pokemons);
        } else {
            const filteredPokemons = pokemons.filter(pokemon =>
                pokemon.includes(query.trim().toLowerCase().replace(' ', '-')),
            );
            setSuggestionList(filteredPokemons);
        }
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Pressable
                    onPress={() => {
                        if (top.value === SEARCH_BOX_TOP_POSITION) {
                            // show
                            setSearchVisible(true);
                            top.value = withTiming(10);
                        } else {
                            // hide
                            setSearchVisible(false);
                            top.value = withTiming(SEARCH_BOX_TOP_POSITION);
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
                        value={searchValue}
                        onChangeText={(value: string) => {
                            filterTheSuggestionList(value);
                            setSearchValue(value);
                        }}
                        placeholder="Search..."
                    />
                </View>
            </Animated.View>

            {searchVisible && !!searchValue.trim() && (
                <View
                    style={[
                        StyleSheet.absoluteFill,
                        styles.overlaySuggestionList,
                    ]}>
                    <MyNameList
                        goTo="PokemonDetail"
                        size="small"
                        data={suggestionList}
                        keyExtractor={item => item}
                    />
                </View>
            )}

            <View>
                <FlatList
                    ref={listRef}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => item.name + index}
                    numColumns={3}
                    onEndReached={() => !error && setPage(page + 1)}
                    ListFooterComponent={
                        error ? (
                            <MyText>{error}</MyText>
                        ) : isLoading ? (
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
        position: 'relative',
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
