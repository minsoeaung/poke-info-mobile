import { useScrollToTop } from '@react-navigation/native';
import React, { useRef } from 'react';
import { FlatList, StyleSheet, TextInput, View } from 'react-native';

import ClearInputButton from '../components/ClearInputButton';
import { PressableNameList } from '../components/PressableNameList';
import ABILITIES from '../constants/ABILITIES';
import { appColor } from '../constants/colors';
import { fonts } from '../constants/fonts';
import useSearchableList from '../hooks/useSearchableList';

export default function AbilityList() {
    const { list, value, handleChangeText, clearInput } = useSearchableList(ABILITIES);

    const listRef = useRef<FlatList>(null);
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
            <View style={styles.abilityListWrap}>
                <PressableNameList goTo="AbilityDetail" data={list} listRef={listRef} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: appColor.primary,
        paddingBottom: 60,
    },
    searchInputWrap: {
        backgroundColor: appColor.secondary,
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
    abilityListWrap: {
        backgroundColor: appColor.secondary,
        borderRadius: 10,
        borderWidth: 0.5,
        paddingHorizontal: 10,
    },
});
