import { FontAwesome } from '@expo/vector-icons';
import { useNavigation, useScrollToTop } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FlashList } from '@shopify/flash-list';
import React, { useLayoutEffect, useMemo, useRef } from 'react';
import { Dimensions, Pressable, StyleSheet, TextInput, View } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

import ClearInputButton from '../components/ClearInputButton';
import PokemonCard from '../components/PokemonCard';
import PokemonCellItem from '../components/PokemonCellItem';
import { colors } from '../constants/colors';
import { fonts } from '../constants/fonts';
import pokemonDetails from '../constants/POKEMON_DETAILS';
import useIsSearchVisible from '../hooks/useIsSearchVisible';
import useSearchableList from '../hooks/useSearchableList';
import { PokemonSmDetailType, StackParamList } from '../types';
import { LinearGradient } from 'expo-linear-gradient';
import { GradientBackground } from '../components/GradientBackground';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';

const { height } = Dimensions.get('window');

export default function PokeDex() {
    const bTabBarHeight = useBottomTabBarHeight();

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
    const { animatedStyles, isVisible, toggle, ref } = useIsSearchVisible();
    const listRef = useRef(null);
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList, 'PokeDex'>>();
    // @ts-ignore
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
            <GradientBackground />
            <Animated.View style={[StyleSheet.absoluteFill, styles.searchBoxContainer, animatedStyles]}>
                <View style={styles.searchBox}>
                    <BlurView
                        tint="dark"
                        experimentalBlurMethod="dimezisBlurView"
                        intensity={80}
                        style={StyleSheet.absoluteFill}
                    />
                    <TextInput
                        ref={ref}
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
                    <BlurView
                        tint="dark"
                        experimentalBlurMethod="dimezisBlurView"
                        intensity={80}
                        style={StyleSheet.absoluteFill}
                    />
                    <FlashList
                        data={list}
                        keyExtractor={item => item.name}
                        renderItem={({ item }) => {
                            return <PokemonCellItem item={item} color={colors.background} size="small" />;
                        }}
                        keyboardShouldPersistTaps="always"
                    />
                </Animated.View>
            )}
            <View style={styles.pokedex}>
                <FlashList
                    masonry
                    ref={listRef}
                    data={pokemons}
                    ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
                    renderItem={({ item }: { item: PokemonSmDetailType }) => <PokemonCard pokemon={item} />}
                    keyExtractor={item => item.name}
                    numColumns={3}
                    contentInsetAdjustmentBehavior="automatic"
                    keyboardShouldPersistTaps="handled"
                    onScrollBeginDrag={() => isVisible && toggle()}
                    ListFooterComponent={() => <View style={{ height: bTabBarHeight }} />}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 6,
    },
    searchBoxContainer: {
        height: 40,
        top: 0,
        left: 20,
        right: 20,
        zIndex: 2,
    },
    searchBox: {
        overflow: 'hidden',
        borderColor: colors.tomato,
        borderWidth: 1,
        borderRadius: 10,
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: 2,
    },
    searchInput: {
        height: 40,
        paddingVertical: 10,
        paddingLeft: 20,
        fontFamily: fonts.NotoSans_400Regular,
        width: '90%',
        color: colors.cardText,
        letterSpacing: 1,
        lineHeight: 25,
        fontSize: 14,
        zIndex: 2,
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
        height: height / 3,
        borderWidth: 1,
        borderColor: colors.tomato,
        elevation: 10,
        zIndex: 1,
        overflow: 'hidden',
    },
    pokedex: {
        flex: 1,
        // height: Dimensions.get('screen').height,
        // zIndex: -1,
    },
});
