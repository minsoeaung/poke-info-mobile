import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';

import { NativeStackParamList, ScreenType, ThreeInfo } from '../types';
import getFormattedName from '../utils/getFormattedName';
import MyText from './MyText';
import SmallGreyText from './SmallGreyText';
import TypeSlot from './TypeSlot';

type Props = {
    goTo: ScreenType;
    size?: 'small' | 'big';
    data: ThreeInfo[];
};

export const PressableNameList = ({ data, size = 'big', goTo }: Props) => {
    const route = useRoute();
    const navigation =
        useNavigation<NativeStackNavigationProp<NativeStackParamList>>();

    const goToScreen = (name: string) => {
        navigation.push(goTo, { name });
    };

    return (
        <FlatList
            data={data}
            keyExtractor={key => key.name}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            ListEmptyComponent={() => (
                <MyText style={styles.emptyText}>NOT FOUND</MyText>
            )}
            renderItem={({ item }) => (
                <Pressable
                    onPress={() => {
                        goToScreen(item.name);
                    }}>
                    {({ pressed }) => (
                        <View
                            style={[
                                styles.listItem,
                                {
                                    paddingVertical: size === 'small' ? 15 : 20,
                                },
                            ]}>
                            <View style={styles.name}>
                                <MyText
                                    style={{
                                        color: pressed ? 'tomato' : 'black',
                                    }}>
                                    {getFormattedName(item.name)}
                                </MyText>
                                {route.name === 'AbilityDetail' &&
                                    item.isHidden && (
                                        <SmallGreyText text="   (Hidden ability)" />
                                    )}
                                {route.name === 'TypeDetail' &&
                                    item.typeSlot && (
                                        <TypeSlot slot={item.typeSlot} />
                                    )}
                            </View>
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
    separator: {
        borderBottomColor: 'tomato',
        borderBottomWidth: 0.5,
    },
    emptyText: {
        paddingVertical: 50,
        textAlign: 'center',
    },
    name: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
