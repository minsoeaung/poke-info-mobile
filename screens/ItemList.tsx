import { useNavigation, useScrollToTop } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FlashList } from '@shopify/flash-list';
import { Image } from 'expo-image';
import React, { useRef } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

import ClearInputButton from '../components/ClearInputButton';
import MyText from '../components/MyText';
import { ITEMS, ItemType } from '../constants/ITEMS';
import { app } from '../constants/colors';
import { fonts } from '../constants/fonts';
import useSearchableList from '../hooks/useSearchableList';
import { NativeStackParamList } from '../types';
import getFormattedName from '../utils/getFormattedName';

export default function ItemList() {
    const { list, value, handleChangeText, clearInput } = useSearchableList(ITEMS);
    const listRef = useRef(null);
    useScrollToTop(listRef);

    return (
        <View style={styles.container}>
            <View style={styles.searchInputWrap}>
                <TextInput
                    style={styles.searchInput}
                    value={value}
                    onChangeText={handleChangeText}
                    placeholder="Search..."
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
                />
            </View>
        </View>
    );
}

const Item = ({ item }: { item: ItemType }) => {
    const navigation = useNavigation<NativeStackNavigationProp<NativeStackParamList, 'ItemList'>>();

    const handlePress = () => {
        navigation.push('ItemDetail', item);
    };

    return (
        <Animated.View entering={FadeInDown} style={styles.item}>
            <Pressable onPress={handlePress} style={styles.pressable}>
                {({ pressed }) => (
                    <>
                        <MyText
                            style={StyleSheet.flatten([styles.itemName, pressed ? { color: 'tomato' } : {}])}
                            numberOfLines={1}
                        >
                            {getFormattedName(item.name)}
                        </MyText>
                        <Image
                            style={styles.itemSprite}
                            source={{ uri: item.sprites }}
                            contentFit="contain"
                            accessibilityLabel={`Sprite of ${item.name}`}
                            recyclingKey={item.name}
                            transition={200}
                        />
                    </>
                )}
            </Pressable>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingBottom: 0,
        backgroundColor: app.darkColor,
    },
    searchInputWrap: {
        backgroundColor: app.lightColor,
        borderRadius: 10,
        borderWidth: 0.5,
        marginBottom: 10,
        paddingRight: 5,
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
    itemListWrap: {
        flex: 1,
    },
    item: {
        flex: 1,
        borderWidth: 0.5,
        aspectRatio: 1,
        margin: 5,
        borderRadius: 10,
        elevation: 5,
        borderColor: app.darkColor,
        backgroundColor: app.lightColor,
    },
    pressable: {
        flex: 1,
    },
    itemName: {
        fontSize: 12,
        textAlign: 'center',
        paddingVertical: 4,
        paddingHorizontal: 2,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    itemSprite: {
        flex: 1,
    },
});
