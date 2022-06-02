import { useScrollToTop } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PokeAPI } from 'pokeapi-types';
import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
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

import ClearInputButton from '../components/ClearInputButton';
import MyText from '../components/MyText';
import PokemonCard from '../components/PokemonCard';
import { PressableNameList } from '../components/PressableNameList';
import { appColor } from '../constants/colors';
import { fonts } from '../constants/fonts';
import { pokemons } from '../constants/pokemons';
import usePagination from '../hooks/usePagination';
import { NativeStackParamList, ThreeInfo } from '../types';

const { height } = Dimensions.get('window');

type Props = NativeStackScreenProps<NativeStackParamList, 'PokeDex'>;

const SEARCH_BOX_TOP_POSITION = -65;
const DEBOUNCE_TIME = 300;

export default function PokeDex({ navigation }: Props) {
    const [page, setPage] = useState(1);
    const [suggestionList, setSuggestionList] = useState<ThreeInfo[]>(pokemons);
    const [searchVisible, setSearchVisible] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
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
            const q = query.trim().toLowerCase().replace(' ', '-');
            const filteredPokemons = pokemons.filter(pokemon =>
                pokemon.name.includes(q),
            );
            setSuggestionList(filteredPokemons);
        }
    };

    const showSearchBox = useCallback(() => {
        setSearchVisible(true);
        top.value = withTiming(10);
    }, []);

    const hideSearchBox = useCallback(() => {
        setSearchVisible(false);
        top.value = withTiming(SEARCH_BOX_TOP_POSITION);
    }, []);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Pressable
                    onPress={() => {
                        if (top.value === SEARCH_BOX_TOP_POSITION) {
                            showSearchBox();
                        } else {
                            hideSearchBox();
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
                            if (timerRef.current) {
                                clearTimeout(timerRef.current);
                            }
                            timerRef.current = setTimeout(() => {
                                filterTheSuggestionList(value);
                            }, DEBOUNCE_TIME);
                            setSearchValue(value);
                        }}
                        placeholder="Search..."
                    />
                    <ClearInputButton func={() => setSearchValue('')} />
                </View>
            </Animated.View>

            {searchVisible && !!searchValue.trim() && (
                <View
                    style={[
                        StyleSheet.absoluteFill,
                        styles.overlaySuggestionList,
                    ]}>
                    <PressableNameList
                        goTo="PokemonDetail"
                        size="small"
                        data={suggestionList}
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
                    onScrollBeginDrag={() => {
                        if (top.value !== SEARCH_BOX_TOP_POSITION) {
                            hideSearchBox();
                        }
                    }}
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
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    searchInput: {
        height: 40,
        paddingVertical: 10,
        paddingLeft: 20,
        fontFamily: fonts.fontDotGothic,
        width: '90%',
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
