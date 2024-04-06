import { FontAwesome } from '@expo/vector-icons';
import { useNavigation, useScrollToTop } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FlashList } from '@shopify/flash-list';
import React, { useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Dimensions, Pressable, StyleSheet, TextInput, View } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

import ClearInputButton from '../components/ClearInputButton';
import PikachuRunning from '../components/PikachuRunning';
import PokemonCard from '../components/PokemonCard';
import PokemonCellItem from '../components/PokemonCellItem';
import { colors } from '../constants/colors';
import { fonts } from '../constants/fonts';
import pokemonDetails from '../constants/pokemonDetails';
import useIsSearchVisible from '../hooks/useIsSearchVisible';
import useSearchableList from '../hooks/useSearchableList';
import { PokemonSmDetailType, StackParamList } from '../types';

const { height } = Dimensions.get('window');

export default function PokeDex() {
    const [ready, setReady] = useState(false);

    const pokemons: PokemonSmDetailType[] = useMemo(
        () =>
            Object.values(pokemonDetails).map(details => ({
                name: details.name,
                sprite: details.profile.sprite,
                types: details.profile.types,
                id: details.id,
            })),
        [],
    );

    const { list, value, handleChangeText, clearInput } = useSearchableList(pokemons);
    const { animatedStyles, isVisible, toggle } = useIsSearchVisible();
    const listRef = useRef(null);
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList, 'PokeDex'>>();
    useScrollToTop(listRef);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Pressable onPress={toggle}>
                    <FontAwesome
                        name="search"
                        style={StyleSheet.flatten([styles.searchBtn, { color: isVisible ? 'tomato' : colors.text }])}
                    />
                </Pressable>
            ),
        });
    }, [navigation, isVisible]);

    return (
        <View style={styles.container}>
            {!ready && (
                <Animated.View style={StyleSheet.absoluteFill} exiting={FadeOut}>
                    <PikachuRunning />
                </Animated.View>
            )}
            <Animated.View style={[StyleSheet.absoluteFill, styles.searchBoxContainer, animatedStyles]}>
                <View style={styles.searchBox}>
                    <TextInput
                        style={styles.searchInput}
                        value={value}
                        onChangeText={handleChangeText}
                        placeholder="Search..."
                        selectionColor="tomato"
                        placeholderTextColor="grey"
                    />
                    <ClearInputButton onPress={clearInput} />
                </View>
            </Animated.View>
            {!!value.trim() && isVisible && (
                <Animated.View
                    entering={FadeIn.duration(275)}
                    exiting={FadeOut.duration(275)}
                    style={[StyleSheet.absoluteFill, styles.suggestionListView]}
                >
                    <FlashList
                        data={list}
                        keyExtractor={item => item.name}
                        estimatedItemSize={60}
                        renderItem={({ item }) => {
                            return <PokemonCellItem item={item} color={colors.background} size="small" />;
                        }}
                    />
                </Animated.View>
            )}
            <View style={styles.pokedex}>
                <FlashList
                    ref={listRef}
                    data={pokemons}
                    renderItem={({ item }: { item: PokemonSmDetailType }) => <PokemonCard pokemon={item} />}
                    keyExtractor={item => item.name}
                    numColumns={2}
                    estimatedItemSize={82}
                    contentInsetAdjustmentBehavior="automatic"
                    keyboardShouldPersistTaps="handled"
                    onScrollBeginDrag={() => isVisible && toggle()}
                    onLoad={() => {
                        setReady(true);
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
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
        backgroundColor: colors.card,
        borderWidth: 1,
        borderRadius: 10,
        elevation: 5,
        borderColor: 'black',
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
        color: colors.cardText,
        letterSpacing: 1,
    },
    searchBtn: {
        paddingVertical: 10,
        paddingLeft: 25,
        fontSize: 22,
    },
    suggestionListView: {
        top: 60,
        left: 20,
        right: 20,
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
        height: height / 3,
        backgroundColor: colors.card,
        borderWidth: 1,
        borderColor: 'tomato',
        elevation: 10,
    },
    pokedex: {
        flex: 1,
        // height: Dimensions.get('screen').height,
        zIndex: -1,
    },
});
