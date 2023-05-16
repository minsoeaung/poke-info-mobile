import { useNavigation, useScrollToTop } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FlashList } from '@shopify/flash-list';
import { Image } from 'expo-image';
import React, { memo, useRef, useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import Animated, { FadeOut } from 'react-native-reanimated';

import ClearInputButton from '../components/ClearInputButton';
import MyText from '../components/MyText';
import PikachuRunning from '../components/PikachuRunning';
import { ITEMS, ItemType } from '../constants/ITEMS';
import { app } from '../constants/colors';
import { fonts } from '../constants/fonts';
import useSearchableList from '../hooks/useSearchableList';
import { StackParamList } from '../types';
import getFormattedName from '../utils/getFormattedName';

export default function ItemList() {
    const [ready, setReady] = useState(false);
    const { list, value, handleChangeText, clearInput } = useSearchableList(ITEMS);
    const listRef = useRef(null);
    useScrollToTop(listRef);

    return (
        <View style={styles.container}>
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
                    ref={listRef}
                    data={list}
                    numColumns={4}
                    renderItem={({ item }) => <Item item={item} />}
                    estimatedItemSize={85}
                    keyExtractor={item => item.name}
                    onLoad={() => setReady(true)}
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
        <View style={styles.item}>
            <Pressable onPress={handlePress} style={styles.pressable}>
                {({ pressed }) => (
                    <>
                        <MyText
                            style={StyleSheet.flatten([styles.itemName, pressed ? { color: 'tomato' } : {}])}
                            numberOfLines={1}
                        >
                            {getFormattedName(item.name)}
                        </MyText>
                        {item.sprites ? (
                            <Image
                                style={styles.itemSprite}
                                source={{ uri: item.sprites }}
                                contentFit="contain"
                                accessibilityLabel={`Sprite of ${item.name}`}
                                recyclingKey={item.name}
                                transition={200}
                            />
                        ) : (
                            <View style={styles.noItemSprite}>
                                <MyText style={styles.bad}>❗</MyText>
                            </View>
                        )}
                    </>
                )}
            </Pressable>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingBottom: 0,
        backgroundColor: app.darkColor,
    },
    searchInputWrap: {
        backgroundColor: app.darkColor,
        borderColor: app.lightColor,
        borderRadius: 10,
        borderWidth: 0.2,
        marginBottom: 10,
        paddingRight: 5,
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: -1,
    },
    searchInput: {
        height: 40,
        paddingVertical: 10,
        paddingLeft: 20,
        fontFamily: fonts.fontDotGothic,
        width: '90%',
        color: app.lightColor,
    },
    itemListWrap: {
        flex: 1,
        zIndex: -1, // To eliminate flash while PikachuRunning doing exiting animation
    },
    item: {
        flex: 1,
        borderWidth: StyleSheet.hairlineWidth,
        aspectRatio: 1,
        margin: 5,
        borderRadius: 10,
        borderColor: app.lightColor,
        backgroundColor: app.darkColor,
        overflow: 'hidden',
    },
    pressable: {
        flex: 1,
    },
    itemName: {
        fontSize: 12,
        textAlign: 'center',
        paddingVertical: 4,
        paddingHorizontal: 2,
        backgroundColor: app.lightColor,
    },
    itemSprite: {
        flex: 1,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    noItemSprite: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    bad: {
        fontSize: 14,
    },
});
