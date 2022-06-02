import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { PressableNameList } from '../components/PressableNameList';
import abilities from '../constants/abilities';
import { appColor } from '../constants/colors';
import { fonts } from '../constants/fonts';
import { ThreeInfo } from '../types';

export default function AbilityList() {
    const [data, setData] = useState<ThreeInfo[]>(abilities);

    const onChangeText = (value: string) => filterTheData(value);

    const filterTheData = (query: string) => {
        if (!query.trim()) {
            setData(abilities);
        } else {
            setData(
                abilities.filter(ability =>
                    ability.name
                        .toLowerCase()
                        .includes(query.toLowerCase().replace(' ', '-')),
                ),
            );
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchInputWrap}>
                <TextInput
                    style={styles.searchInput}
                    onChangeText={onChangeText}
                    placeholder="Search..."
                />
            </View>
            <View style={styles.abilityListWrap}>
                <PressableNameList
                    goTo="AbilityDetail"
                    size="big"
                    data={data}
                    keyExtractor={item => item.name}
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
    abilityListWrap: {
        backgroundColor: appColor.headerBg,
        borderRadius: 10,
        borderWidth: 0.5,
        paddingHorizontal: 10,
    },
    searchInputWrap: {
        backgroundColor: appColor.headerBg,
        borderRadius: 10,
        borderWidth: 0.5,
        marginBottom: 10,
    },
    searchInput: {
        height: 40,
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontFamily: fonts.fontDotGothic,
    },
});
