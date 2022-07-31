import { useScrollToTop } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PokeAPI } from 'pokeapi-types';
import React, { useLayoutEffect, useRef, useState } from 'react';
import { Dimensions, FlatList, Pressable, StyleSheet, TextInput, View } from 'react-native';
import Animated from 'react-native-reanimated';

import ClearInputButton from '../components/ClearInputButton';
import MyText from '../components/MyText';
import PokemonCard from '../components/PokemonCard';
import { PressableNameList } from '../components/PressableNameList';
import { POKEMONS } from '../constants/POKEMONS';
import { appColor } from '../constants/colors';
import { fonts } from '../constants/fonts';
import useIsVisible from '../hooks/useIsVisible';
import usePagination from '../hooks/usePagination';
import useSearchableList from '../hooks/useSearchableList';
import { NativeStackParamList } from '../types';

const { height } = Dimensions.get('window');

type Props = NativeStackScreenProps<NativeStackParamList, 'PokeDex'>;

export default function PokeDex({ navigation }: Props) {
    const [page, setPage] = useState(1);
    const { list, value, handleChangeText, clearInput } = useSearchableList(POKEMONS);
    const { animatedStyles, isVisible, toggle } = useIsVisible();
    const { data, error, isLoading } = usePagination(page, 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=27');
    const listRef = useRef<FlatList>(null);
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
        <View style={styles.container}>
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
            <View>
                <FlatList
                    ref={listRef}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => item.name + index}
                    numColumns={3}
                    onEndReached={() => !error && setPage(page + 1)}
                    ListFooterComponent={
                        error ? <MyText>{error}</MyText> : isLoading ? <MyText>loading...</MyText> : null
                    }
                    ListFooterComponentStyle={styles.listFooter}
                    contentInsetAdjustmentBehavior="automatic"
                    onScrollBeginDrag={() => {
                        if (isVisible) {
                            toggle();
                        }
                    }}
                />
            </View>
        </View>
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
