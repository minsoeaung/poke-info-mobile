import { useNavigation, useScrollToTop } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PokeAPI } from 'pokeapi-types';
import React, { useLayoutEffect, useRef } from 'react';
import { Dimensions, FlatList, Pressable, StyleSheet, TextInput, View } from 'react-native';
import Animated from 'react-native-reanimated';

import ClearInputButton from '../components/ClearInputButton';
import LoadingText from '../components/LoadingText';
import MyText from '../components/MyText';
import PokemonCard from '../components/PokemonCard';
import { PressableNameList } from '../components/PressableNameList';
import { POKEMONS } from '../constants/POKEMONS';
import { appColor } from '../constants/colors';
import { fonts } from '../constants/fonts';
import useFetchInfiniteData from '../hooks/useFetchInfiniteData';
import useIsVisible from '../hooks/useIsVisible';
import useSearchableList from '../hooks/useSearchableList';
import { NativeStackParamList } from '../types';

const { height } = Dimensions.get('window');
const URL = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=27';

export default function PokeDex() {
    const { list, value, handleChangeText, clearInput } = useSearchableList(POKEMONS);
    const { animatedStyles, isVisible, toggle } = useIsVisible();
    const { data, isLoading, isLoadingMore, error, fetchMore } = useFetchInfiniteData(URL);
    const listRef = useRef<FlatList>(null);
    const navigation = useNavigation<NativeStackNavigationProp<NativeStackParamList, 'PokeDex'>>();
    useScrollToTop(listRef);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Pressable onPress={toggle}>
                    {({ pressed }) => (
                        <MyText
                            style={StyleSheet.flatten([
                                styles.searchBtn,
                                {
                                    color: pressed ? 'tomato' : appColor.secondary,
                                },
                            ])}>
                            Search
                        </MyText>
                    )}
                </Pressable>
            ),
        });
    }, [navigation]);

    return (
        <View style={styles.headerContainer}>
            <Animated.View style={[StyleSheet.absoluteFill, styles.overlaySearchInput, animatedStyles]}>
                <View style={styles.searchInputWrap}>
                    <TextInput
                        style={styles.searchInput}
                        value={value}
                        onChangeText={handleChangeText}
                        placeholder="Search..."
                    />
                    <ClearInputButton onPress={clearInput} />
                </View>
            </Animated.View>
            {!!value.trim() && isVisible && (
                <View style={[StyleSheet.absoluteFill, styles.overlaySuggestionList]}>
                    <PressableNameList goTo="PokemonDetail" size="small" data={list} />
                </View>
            )}
            {isLoading ? (
                <LoadingText />
            ) : (
                <View>
                    <FlatList
                        ref={listRef}
                        data={data}
                        renderItem={({ item }: { item: PokeAPI.NamedAPIResource }) => <PokemonCard name={item.name} />}
                        keyExtractor={item => item.name}
                        numColumns={3}
                        onEndReachedThreshold={10}
                        onEndReached={() => !error && !isLoading && !isLoadingMore && fetchMore()}
                        ListFooterComponent={
                            error ? <MyText>{error}</MyText> : isLoadingMore ? <MyText>loading...</MyText> : null
                        }
                        ListFooterComponentStyle={styles.listFooter}
                        contentInsetAdjustmentBehavior="automatic"
                        onScrollBeginDrag={() => isVisible && toggle()}
                    />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        backgroundColor: appColor.primary,
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
        backgroundColor: appColor.secondary,
        borderWidth: 0.5,
        borderRadius: 10,
        elevation: 5,
        borderColor: appColor.primary,
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
        color: appColor.primary,
    },
    searchBtn: {
        paddingVertical: 10,
        paddingLeft: 25,
    },
    overlaySuggestionList: {
        zIndex: 1,
        top: 60,
        left: 20,
        right: 20,
        borderWidth: 0.5,
        borderRadius: 10,
        padding: 10,
        height: height / 3,
        backgroundColor: appColor.secondary,
        elevation: 10,
    },
});
