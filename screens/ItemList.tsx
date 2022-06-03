import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import ClearInputButton from '../components/ClearInputButton';
import { PressableNameList } from '../components/PressableNameList';
import { appColor } from '../constants/colors';
import { fonts } from '../constants/fonts';
import { items } from '../constants/items';
import { PressableListItemType } from '../types';

export default function ItemList() {
    const [data, setData] = useState<PressableListItemType[]>(items);
    const [searchValue, setSearchValue] = useState('');

    const filterTheData = (query: string) => {
        if (!query.trim()) {
            setData(items);
        } else {
            const q = query.trim().toLowerCase().replace(' ', '-');
            const filteredItems = items.filter(item => item.name.includes(q));
            setData(filteredItems);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchInputWrap}>
                <TextInput
                    style={styles.searchInput}
                    value={searchValue}
                    onChangeText={(value: string) => {
                        filterTheData(value);
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
                <PressableNameList goTo="ItemDetail" data={data} />
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
