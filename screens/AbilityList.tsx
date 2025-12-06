import { useNavigation, useScrollToTop } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useRef } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import ClearInputButton from '../components/ClearInputButton';
import { GradientBackground } from '../components/GradientBackground';
import PressableItemList from '../components/PressableItemList';
import ABILITIES from '../constants/ABILITIES';
import { colors } from '../constants/colors';
import { fonts } from '../constants/fonts';
import useSearchableList from '../hooks/useSearchableList';
import { StackParamList } from '../types';

export default function AbilityList() {
    const { list, value, handleChangeText, clearInput } = useSearchableList(ABILITIES);
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList, 'AbilityList'>>();
    const listRef = useRef(null);
    // @ts-ignore
    useScrollToTop(listRef);

    return (
        <View style={styles.container}>
            <GradientBackground />
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
                    // @ts-ignore
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
        padding: 12,
        paddingTop: 0,
    },
    searchInputWrap: {
        overflow: 'hidden',
        borderRadius: 5,
        marginBottom: 10,
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
    abilityListWrap: {
        flex: 1,
        color: colors.cardText,
        borderRadius: 5,
        overflow: 'hidden',
    },
});
