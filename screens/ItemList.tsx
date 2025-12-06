import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useScrollToTop } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FlashList } from '@shopify/flash-list';
import { Image } from 'expo-image';
import React, { memo, useRef, useState } from 'react';
import { Pressable, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Animated, { FadeOut } from 'react-native-reanimated';

import ClearInputButton from '../components/ClearInputButton';
import MyText from '../components/MyText';
import PikachuRunning from '../components/PikachuRunning';
import { ITEMS, ItemType } from '../constants/ITEMS';
import { colors } from '../constants/colors';
import { fonts } from '../constants/fonts';
import useSearchableList from '../hooks/useSearchableList';
import { StackParamList } from '../types';
import getFormattedName from '../utils/getFormattedName';
import { GradientBackground } from '../components/GradientBackground';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { EmptyView } from '../components/EmptyView';

export default function ItemList() {
    const [ready, setReady] = useState(false);
    const { list, value, handleChangeText, clearInput } = useSearchableList(ITEMS);
    const listRef = useRef(null);
    // @ts-ignore
    useScrollToTop(listRef);

    const bottom = useBottomTabBarHeight();

    return (
        <View style={styles.container}>
            <GradientBackground />
            {!ready && (
                <Animated.View style={StyleSheet.absoluteFill} exiting={FadeOut}>
                    <PikachuRunning />
                </Animated.View>
            )}
            <View style={styles.searchInputWrap}>
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
            <View style={styles.itemListWrap}>
                <FlashList
                    masonry
                    ref={listRef}
                    data={list}
                    numColumns={4}
                    ListEmptyComponent={() => <EmptyView text="No results found" />}
                    renderItem={({ item }) => <Item item={item} />}
                    ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
                    keyExtractor={item => item.name}
                    onLoad={() => setReady(true)}
                    ListFooterComponent={() => <View style={{ height: bottom + 10 }} />}
                />
            </View>
        </View>
    );
}

const Item = memo(({ item }: { item: ItemType }) => {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList, 'ItemList'>>();

    const handlePress = () => {
        navigation.push('ItemDetail', item);
    };

    return (
        <TouchableOpacity onPress={handlePress} style={styles.pressable}>
            <View style={styles.itemSpriteContainer}>
                {item.sprites ? (
                    <Image
                        style={styles.itemSprite}
                        source={{
                            uri: item.sprites,
                        }}
                        contentFit="cover"
                        accessibilityLabel={`Sprite of ${item.name}`}
                        recyclingKey={item.name}
                        transition={200}
                    />
                ) : (
                    <MaterialIcons name="image-not-supported" size={24} color="grey" />
                )}
            </View>
            <MyText style={styles.itemName}>{getFormattedName(item.name)}</MyText>
        </TouchableOpacity>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchInputWrap: {
        overflow: 'hidden',
        borderRadius: 5,
        marginBottom: 10,
        marginHorizontal: 12,
        paddingRight: 5,
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.card,
    },
    searchInput: {
        fontSize: 16,
        paddingLeft: 20,
        fontFamily: fonts.NotoSans_400Regular,
        width: '90%',
        color: 'white',
    },
    itemListWrap: {
        flex: 1,
        paddingHorizontal: 6,

        // zIndex: -1, // To eliminate flash while PikachuRunning doing exiting animation
    },
    pressable: {
        padding: 8,
        paddingBottom: 12,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'rgba(255,255,255,0.15)',
        marginHorizontal: 6,
    },
    itemName: {
        marginTop: 8,
        fontSize: 16,
        lineHeight: 18,
        textAlign: 'center',
        color: colors.cardText,
    },
    itemSpriteContainer: {
        aspectRatio: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    itemSprite: {
        width: '110%',
        height: '110%',
        flex: 1,
    },
    noItemSprite: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bad: {
        fontSize: 14,
    },
});
