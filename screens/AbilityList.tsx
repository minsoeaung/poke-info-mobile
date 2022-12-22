import { useScrollToTop } from '@react-navigation/native';
import React, { useRef } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

import ClearInputButton from '../components/ClearInputButton';
import { PressableNameList } from '../components/PressableNameList';
import ABILITIES from '../constants/ABILITIES';
import { app } from '../constants/colors';
import { fonts } from '../constants/fonts';
import useSearchableList from '../hooks/useSearchableList';

export default function AbilityList() {
    const { list, value, handleChangeText, clearInput } = useSearchableList(ABILITIES);

    const listRef = useRef(null);
    useScrollToTop(listRef);

    return (
        <Animated.View style={styles.container} entering={FadeIn.duration(100)}>
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
        </Animated.View>
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
    abilityListWrap: {
        flex: 1,
        backgroundColor: app.lightColor,
        borderRadius: 10,
        borderWidth: 0.5,
        paddingHorizontal: 10,
    },
});
