import { useScrollToTop } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { FlatList, StyleSheet, TextInput, View } from 'react-native';

import ClearInputButton from '../components/ClearInputButton';
import { PressableNameList } from '../components/PressableNameList';
import abilities from '../constants/abilities';
import { appColor } from '../constants/colors';
import { fonts } from '../constants/fonts';
import { PressableListItemType } from '../types';

const DEBOUNCE_TIME = 300;

export default function AbilityList() {
    const [data, setData] = useState<PressableListItemType[]>(abilities);
    const [searchValue, setSearchValue] = useState('');

    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const listRef = useRef<FlatList>(null);
    useScrollToTop(listRef);

    const filterTheData = (query: string) => {
        if (!query.trim()) {
            setData(abilities);
        } else {
            const q = query.trim().toLowerCase().replace(' ', '-');
            const filteredAbilities = abilities.filter(ability =>
                ability.name.includes(q),
            );
            setData(filteredAbilities);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchInputWrap}>
                <TextInput
                    style={styles.searchInput}
                    value={searchValue}
                    onChangeText={(value: string) => {
                        if (timerRef.current) {
                            clearTimeout(timerRef.current);
                        }
                        timerRef.current = setTimeout(() => {
                            filterTheData(value);
                        }, DEBOUNCE_TIME);
                        setSearchValue(value);
                    }}
                    placeholder="Search..."
                />
                <ClearInputButton
                    func={() => {
                        filterTheData('');
                        setSearchValue('');
                    }}
                />
            </View>
            <View style={styles.abilityListWrap}>
                <PressableNameList
                    goTo="AbilityDetail"
                    data={data}
                    listRef={listRef}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: appColor.appBg,
        paddingBottom: 60,
    },
    searchInputWrap: {
        backgroundColor: appColor.headerBg,
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
        backgroundColor: appColor.headerBg,
        borderRadius: 10,
        borderWidth: 0.5,
        paddingHorizontal: 10,
    },
});
