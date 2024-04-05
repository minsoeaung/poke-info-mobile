import { useNavigation, useScrollToTop } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useRef } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import ClearInputButton from '../components/ClearInputButton';
import PressableItemList from '../components/PressableItemList';
import ABILITIES from '../constants/ABILITIES';
import { colors } from '../constants/colors';
import { fonts } from '../constants/fonts';
import useSearchableList from '../hooks/useSearchableList';
import { StackParamList } from '../types';
import hairlineWidth = StyleSheet.hairlineWidth;

export default function AbilityList() {
    const { list, value, handleChangeText, clearInput } = useSearchableList(ABILITIES);
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList, 'AbilityList'>>();
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
                    selectionColor="tomato"
                    placeholderTextColor="grey"
                />
                <ClearInputButton onPress={clearInput} />
            </View>
            <View style={styles.abilityListWrap}>
                <PressableItemList
                    listRef={listRef}
                    data={list}
                    onPressItem={item => {
                        navigation.push('AbilityDetail', item);
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingBottom: 0,
        backgroundColor: colors.background,
    },
    searchInputWrap: {
        backgroundColor: colors.card,
        borderRadius: 5,
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
        color: colors.cardText,
        width: '90%',
        fontFamily: fonts.fontDotGothic,
    },
    abilityListWrap: {
        flex: 1,
        backgroundColor: colors.card,
        color: colors.cardText,
        borderRadius: 5,
        overflow: 'hidden',
        borderWidth: hairlineWidth,
        borderColor: 'black',
    },
});
