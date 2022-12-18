import { useNavigation, useScrollToTop } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FlashList } from '@shopify/flash-list';
import React, { useLayoutEffect, useRef } from 'react';
import { Dimensions, Pressable, StyleSheet, TextInput, View } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

import ClearInputButton from '../components/ClearInputButton';
import MyText from '../components/MyText';
import PokemonCard from '../components/PokemonCard';
import { PressableNameList } from '../components/PressableNameList';
import { app } from '../constants/colors';
import { fonts } from '../constants/fonts';
import pokemons, { LocalPokemonType } from '../constants/pokemons';
import useIsSearchVisible from '../hooks/useIsSearchVisible';
import useSearchableList from '../hooks/useSearchableList';
import { NativeStackParamList } from '../types';

const { height } = Dimensions.get('window');

export default function PokeDex() {
    const { list, value, handleChangeText, clearInput } = useSearchableList(pokemons);
    const { animatedStyles, isVisible, toggle } = useIsSearchVisible();
    const listRef = useRef(null);
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
                                    color: pressed ? 'rgb(210, 230, 255)' : app.lightColor,
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
        <View style={styles.container}>
            <Animated.View style={[StyleSheet.absoluteFill, styles.searchBoxContainer, animatedStyles]}>
                <View style={styles.searchBox}>
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
                <Animated.View
                    entering={FadeIn.duration(300)}
                    exiting={FadeOut.duration(300)}
                    style={[StyleSheet.absoluteFill, styles.suggestionList]}>
                    <PressableNameList goTo="PokemonDetail" size="small" data={list} />
                </Animated.View>
            )}
            <View style={styles.pokedex}>
                <FlashList
                    ref={listRef}
                    data={pokemons}
                    renderItem={({ item }: { item: LocalPokemonType }) => <PokemonCard pokemon={item} />}
                    keyExtractor={item => item.name}
                    numColumns={3}
                    estimatedItemSize={104}
                    contentInsetAdjustmentBehavior="automatic"
                    onScrollBeginDrag={() => isVisible && toggle()}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: app.darkColor,
        paddingHorizontal: 5,
    },
    searchBoxContainer: {
        height: 40,
        top: 0,
        left: 20,
        right: 20,
        elevation: 10,
    },
    searchBox: {
        backgroundColor: app.lightColor,
        borderWidth: 0.5,
        borderRadius: 10,
        elevation: 5,
        borderColor: app.darkColor,
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
        color: app.darkColor,
    },
    searchBtn: {
        paddingVertical: 10,
        paddingLeft: 25,
    },
    suggestionList: {
        top: 60,
        left: 20,
        right: 20,
        borderWidth: 0.5,
        borderRadius: 10,
        padding: 10,
        height: height / 3,
        backgroundColor: app.lightColor,
        elevation: 10,
    },
    pokedex: {
        flex: 1,
        zIndex: -1,
    },
});
