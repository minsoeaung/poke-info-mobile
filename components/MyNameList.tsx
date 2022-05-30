import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';

import { NativeStackParamList, ScreenType } from '../types';
import getFormattedName from '../utils/getFormattedName';
import MyText from './MyText';

type Props = {
    goTo: ScreenType;
    size: 'small' | 'big';
    data: string[];
    keyExtractor: (key: string) => string;
};

export const MyNameList = ({ data, size, keyExtractor, goTo }: Props) => {
    // TODO: which NativeStackParamList ???
    const navigation =
        useNavigation<NativeStackNavigationProp<NativeStackParamList>>();

    return (
        <FlatList
            data={data}
            keyExtractor={keyExtractor}
            renderItem={({ item, index }) => (
                <Pressable
                    onPress={() => {
                        navigation.navigate(goTo, { name: item });
                    }}>
                    {({ pressed }) => (
                        <View
                            style={[
                                styles.listItem,
                                {
                                    paddingVertical: size === 'small' ? 15 : 20,
                                    borderBottomWidth:
                                        index === data.length - 1 ? 0 : 0.5,
                                },
                            ]}>
                            <MyText
                                style={{
                                    color: pressed ? 'tomato' : 'black',
                                }}>
                                {getFormattedName(item)}
                            </MyText>
                            <MyText
                                style={{
                                    color: pressed ? 'tomato' : 'black',
                                }}>
                                {'>'}
                            </MyText>
                        </View>
                    )}
                </Pressable>
            )}
        />
    );
};

const styles = StyleSheet.create({
    listItem: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: 'tomato',
    },
});
