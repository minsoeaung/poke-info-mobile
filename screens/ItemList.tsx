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
import { colors } from '../constants/colors';
import { fonts } from '../constants/fonts';
import useSearchableList from '../hooks/useSearchableList';
import { StackParamList } from '../types';
import getFormattedName from '../utils/getFormattedName';
import { MaterialIcons } from '@expo/vector-icons';
import hairlineWidth = StyleSheet.hairlineWidth;

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
        <Pressable onPress={handlePress} style={styles.pressable}>
            {({ pressed }) => (
                <View
                    style={StyleSheet.flatten([
                        styles.item,
                        {
                            borderColor: pressed ? 'tomato' : 'transparent',
                        },
                    ])}
                >
                    <MyText style={styles.itemName} numberOfLines={1}>
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
                            <MaterialIcons name="image-not-supported" size={24} color="grey" />
                        </View>
                    )}
                </View>
            )}
        </Pressable>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 5,
        paddingBottom: 0,
        backgroundColor: colors.background,
    },
    searchInputWrap: {
        borderRadius: 5,
        overflow: 'hidden',
        marginBottom: 10,
        marginHorizontal: 5,
        paddingRight: 5,
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: -1,
        backgroundColor: colors.card,
    },
    searchInput: {
        height: 40,
        paddingVertical: 10,
        paddingLeft: 20,
        fontFamily: fonts.fontDotGothic,
        width: '90%',
    },
    itemListWrap: {
        flex: 1,
        zIndex: -1, // To eliminate flash while PikachuRunning doing exiting animation
    },
    pressable: {
        flex: 1,
        aspectRatio: 1,
        borderRadius: 5,
        overflow: 'hidden',
        borderWidth: hairlineWidth,
        borderColor: 'black',
        margin: 5,
    },
    item: {
        flex: 1,
        borderWidth: 2,
        padding: 2,
        borderRadius: 5,
        backgroundColor: colors.card,
    },
    itemName: {
        fontSize: 13,
        textAlign: 'center',
        color: colors.cardText,
    },
    itemSprite: {
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
