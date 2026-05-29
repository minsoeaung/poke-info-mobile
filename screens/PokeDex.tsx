import { FontAwesome } from '@expo/vector-icons';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useNavigation, useScrollToTop } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FlashList } from '@shopify/flash-list';
import { BlurView } from 'expo-blur';
import React, { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Dimensions, Keyboard, Pressable, StyleSheet, TextInput, View, ScrollView } from 'react-native';
import Animated, {
    FadeIn,
    FadeOut,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
} from 'react-native-reanimated';

import ClearInputButton from '../components/ClearInputButton';
import { EmptyView } from '../components/EmptyView';
import { GradientBackground } from '../components/GradientBackground';
import PokemonCard from '../components/PokemonCard';
import PokemonCellItem from '../components/PokemonCellItem';
import pokemonDetails from '../constants/POKEMON_DETAILS';
import { colors, typeColor } from '../constants/colors';
import { fonts } from '../constants/fonts';
import useSearchableList from '../hooks/useSearchableList';
import { PokemonSmDetailType, StackParamList } from '../types';
import MyText from '../components/MyText';
import { PokemonTypeIcon, PokemonTypeList } from '../components/PokemonTypeIcon';

const { height } = Dimensions.get('window');

const SEARCH_INPUT_INITIAL_TOP_OFFSET = -65;
const TYPE_FILTER_INITIAL_TOP_OFFSET = -400;

export default function PokeDex() {
    const bTabBarHeight = useBottomTabBarHeight();

    const searchInputRef = useRef<TextInput>(null);
    const searchInputTop = useSharedValue(SEARCH_INPUT_INITIAL_TOP_OFFSET);
    const typeFilterTop = useSharedValue(TYPE_FILTER_INITIAL_TOP_OFFSET);

    const [selectedType, setSelectedType] = useState<PokemonSmDetailType['types'][number] | null>(null);

    const pokemons: PokemonSmDetailType[] = useMemo(() => {
        const theList = Object.values(pokemonDetails).map(details => ({
            name: details.name,
            sprite: details.profile.sprite,
            types: details.profile.types,
            id: details.id,
        }));

        if (!!selectedType) {
            return theList.filter(p => p.types[0] === selectedType);
        } else {
            return theList;
        }
    }, [selectedType]);

    const { list, value, handleChangeText, clearInput } = useSearchableList(pokemons);

    const [searchInputVisible, setSearchInputVisible] = useState(false);
    const [typeFilterVisible, setTypeFilterVisible] = useState(false);

    const searchInputAnimatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: searchInputTop.value }],
        };
    });

    const typeFilterAnimatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: typeFilterTop.value }],
        };
    });

    const openSearchInput = useCallback(() => {
        setSearchInputVisible(true);
        searchInputTop.value = withTiming(10);
        searchInputRef?.current?.focus();
    }, []);

    const closeSearchInput = useCallback(() => {
        setSearchInputVisible(false);
        searchInputTop.value = withTiming(SEARCH_INPUT_INITIAL_TOP_OFFSET);
        Keyboard.dismiss();
    }, []);

    const openTypeFilter = useCallback(() => {
        setTypeFilterVisible(true);
        typeFilterTop.value = withTiming(10);
    }, []);

    const closeTypeFilter = useCallback(() => {
        setTypeFilterVisible(false);
        typeFilterTop.value = withTiming(TYPE_FILTER_INITIAL_TOP_OFFSET);
    }, []);

    const toggleSearchInputVisibility = () => {
        if (searchInputTop.value === SEARCH_INPUT_INITIAL_TOP_OFFSET) {
            openSearchInput();
            closeTypeFilter();
        } else {
            closeSearchInput();
        }
    };

    const toggleTypeFilterVisibility = () => {
        if (typeFilterTop.value === TYPE_FILTER_INITIAL_TOP_OFFSET) {
            openTypeFilter();
            closeSearchInput();
        } else {
            closeTypeFilter();
        }
    };

    const listRef = useRef(null);
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList, 'PokeDex'>>();
    // @ts-ignore
    useScrollToTop(listRef);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={styles.headerRightContainer}>
                    <Pressable onPress={toggleTypeFilterVisibility} style={styles.searchBtn}>
                        {!!selectedType ? (
                            <PokemonTypeIcon name={selectedType} size={22} />
                        ) : (
                            <FontAwesome
                                name="filter"
                                style={{ color: typeFilterVisible ? 'tomato' : colors.text }}
                                size={22}
                            />
                        )}
                    </Pressable>
                    <Pressable onPress={toggleSearchInputVisibility} style={styles.searchBtn}>
                        <FontAwesome
                            name="search"
                            style={{ color: searchInputVisible ? 'tomato' : colors.text }}
                            size={22}
                        />
                    </Pressable>
                </View>
            ),
        });
    }, [navigation, searchInputVisible, typeFilterVisible, selectedType]);

    return (
        <View style={styles.container}>
            <GradientBackground />
            <Animated.View
                pointerEvents="box-none"
                style={[StyleSheet.absoluteFill, styles.typeFilterBoxContainer, typeFilterAnimatedStyles]}
            >
                <View style={styles.typeFilterBox}>
                    <BlurView
                        tint="dark"
                        experimentalBlurMethod="dimezisBlurView"
                        intensity={80}
                        style={StyleSheet.absoluteFill}
                    />
                    <View style={styles.typeFilterScrollContent}>
                        <TypeChip
                            type="All types"
                            isSelected={!selectedType}
                            onPress={() => {
                                setSelectedType(null);
                                closeTypeFilter();
                            }}
                        />
                        {PokemonTypeList.map(type => (
                            <TypeChip
                                type={type}
                                key={type}
                                isSelected={type === selectedType}
                                onPress={() => {
                                    setSelectedType(type);
                                    closeTypeFilter();
                                }}
                            />
                        ))}
                    </View>
                </View>
            </Animated.View>
            <Animated.View style={[StyleSheet.absoluteFill, styles.searchBoxContainer, searchInputAnimatedStyles]}>
                <View style={styles.searchBox}>
                    <BlurView
                        tint="dark"
                        experimentalBlurMethod="dimezisBlurView"
                        intensity={80}
                        style={StyleSheet.absoluteFill}
                    />
                    <TextInput
                        ref={searchInputRef}
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
            {!!value.trim() && searchInputVisible && (
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
                        ListEmptyComponent={<EmptyView text={`No results for “${value}”`} />}
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
                    onScrollBeginDrag={() => {
                        console.log('onScrollBeginDrag');

                        closeSearchInput();
                        closeTypeFilter();
                    }}
                    ListFooterComponent={() => <View style={{ height: bTabBarHeight }} />}
                />
            </View>
        </View>
    );
}

type TypeChipProps = {
    type: PokemonSmDetailType['types'][number] | 'All types';
    onPress: () => void;
    isSelected: boolean;
};

const TypeChip = ({ type, onPress, isSelected }: TypeChipProps) => {
    const chipActiveColor = type !== 'All types' ? typeColor[type] : 'tomato';

    return (
        <Pressable
            onPress={onPress}
            style={[
                styles.chip,
                isSelected
                    ? { borderColor: chipActiveColor, backgroundColor: `${chipActiveColor}50` }
                    : styles.chipInactive,
            ]}
        >
            {type !== 'All types' && <PokemonTypeIcon name={type} size={18} />}
            <MyText style={styles.chipText}>{type}</MyText>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 6,
    },
    headerRightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    typeFilterBoxContainer: {
        top: 0,
        left: 20,
        right: 20,
        zIndex: 2,
    },
    typeFilterBox: {
        overflow: 'hidden',
        borderColor: colors.tomato,
        borderWidth: 1,
        borderRadius: 10,
        zIndex: 2,
        paddingVertical: 16,
        paddingHorizontal: 14,
    },
    typeFilterScrollContent: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
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
        fontSize: 14,
        zIndex: 2,
    },
    searchBtn: {
        width: 48,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
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
    },
    chip: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    chipInactive: {
        borderColor: 'rgba(255,255,255,0.2)',
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    chipText: {
        textShadowColor: 'rgba(0, 0, 0, 0.6)',
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 2,
        textTransform: 'capitalize',
        fontSize: 13,
        fontFamily: fonts.NotoSans_400Regular,
    },
});
