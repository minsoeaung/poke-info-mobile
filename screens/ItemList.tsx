import { useScrollToTop } from '@react-navigation/native';
import React, { useRef } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import ClearInputButton from '../components/ClearInputButton';
import { PressableNameList } from '../components/PressableNameList';
import { ITEMS } from '../constants/ITEMS';
import { app } from '../constants/colors';
import { fonts } from '../constants/fonts';
import useSearchableList from '../hooks/useSearchableList';

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
                <PressableNameList goTo="ItemDetail" data={list} listRef={listRef} />
            </View>
        </View>
    );
}

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
        backgroundColor: app.lightColor,
        borderRadius: 10,
        borderWidth: 0.5,
        paddingHorizontal: 10,
    },
});
