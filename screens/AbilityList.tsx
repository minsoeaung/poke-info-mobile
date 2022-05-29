import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PokeAPI } from 'pokeapi-types';
import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, TextInput, View } from 'react-native';

import MyText from '../components/MyText';
import abilities from '../constants/abilities';
import { appColor } from '../constants/colors';
import { fonts } from '../constants/fonts';
import { NativeStackParamList } from '../types';

type Props = NativeStackScreenProps<NativeStackParamList, 'AbilityList'>;

export default function AbilityList({ navigation }: Props) {
    const [data, setData] = useState<PokeAPI.NamedAPIResource[]>(abilities);

    const onChangeText = (value: string) => filterTheData(value);

    const filterTheData = (query: string) => {
        if (!query) {
            setData(abilities);
        } else {
            setData(
                abilities.filter(ability =>
                    ability.name.toLowerCase().includes(query.toLowerCase()),
                ),
            );
        }
    };

    const renderItem = ({
        item,
        index,
    }: {
        item: PokeAPI.NamedAPIResource;
        index: number;
    }) => (
        <Pressable
            onPress={() =>
                navigation.navigate('AbilityDetail', {
                    name: item.name,
                    url: item.url,
                })
            }>
            {({ pressed }) => (
                <View
                    style={{
                        ...styles.ability,
                        borderBottomWidth: index === data.length - 1 ? 0 : 1,
                    }}>
                    <MyText style={{ color: pressed ? 'tomato' : 'black' }}>
                        {item.name}
                    </MyText>
                    <MyText style={{ color: pressed ? 'tomato' : 'black' }}>
                        {'>'}
                    </MyText>
                </View>
            )}
        </Pressable>
    );

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
                <FlatList
                    data={data}
                    renderItem={renderItem}
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
    abilitiesContainer: {
        backgroundColor: appColor.headerBg,
        borderRadius: 10,
        borderWidth: 0.5,
    },
    ability: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: 'tomato',
        paddingVertical: 20,
        marginHorizontal: 10,
    },
    searchInputWrap: {
        backgroundColor: appColor.headerBg,
        borderRadius: 10,
        borderWidth: 0.5,
        marginBottom: 10,
    },
    searchInput: {
        height: 40,
        padding: 10,
        fontFamily: fonts.fontDotGothic,
    },
});
