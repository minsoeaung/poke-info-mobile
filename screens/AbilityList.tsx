import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { MyNameList } from '../components/MyNameList';
import abilities from '../constants/abilities';
import { appColor } from '../constants/colors';
import { fonts } from '../constants/fonts';

export default function AbilityList() {
    const [data, setData] = useState<string[]>(abilities);

    const onChangeText = (value: string) => filterTheData(value);

    const filterTheData = (query: string) => {
        if (!query.trim()) {
            setData(abilities);
        } else {
            setData(
                abilities.filter(ability =>
                    ability
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
            <View style={styles.abilitiesContainer}>
                <MyNameList
                    goTo="AbilityDetail"
                    size="big"
                    data={data}
                    keyExtractor={item => item}
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
    abilitiesContainer: {
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
