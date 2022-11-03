import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

import { app } from '../constants/colors';
import { NativeStackParamList, PressableListItemType, ScreenType } from '../types';
import getFormattedName from '../utils/getFormattedName';
import MyText from './MyText';
import SmallGreyText from './SmallGreyText';
import TypeSlot from './TypeSlot';

type Props = {
    goTo: ScreenType;
    size?: 'small' | 'big';
    data: PressableListItemType[];
    listRef?: React.LegacyRef<FlashList<PressableListItemType>> | null;
};

export const PressableNameList = ({ data, size = 'big', goTo, listRef = null }: Props) => {
    const route = useRoute();
    const navigation = useNavigation<NativeStackNavigationProp<NativeStackParamList>>();

    const goToScreen = (name: string) => {
        navigation.push(goTo, { name });
    };

    return (
        <View style={styles.container}>
            <FlashList
                ref={listRef}
                data={data}
                estimatedItemSize={54}
                keyExtractor={key => key.name}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                ListEmptyComponent={() => <MyText style={styles.emptyText}>EMPTY!</MyText>}
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
                                <View style={styles.nameWrap}>
                                    {route.name === 'ItemList' && item.sprites && (
                                        <Image
                                            style={[StyleSheet.absoluteFill, styles.itemImage]}
                                            source={{
                                                uri: item.sprites,
                                            }}
                                        />
                                    )}
                                    <MyText
                                        style={StyleSheet.flatten([
                                            styles.nameText,
                                            {
                                                color: pressed ? 'tomato' : 'black',
                                                marginLeft: item.sprites ? 40 : 0,
                                            },
                                        ])}>
                                        {getFormattedName(item.name)}
                                    </MyText>
                                    {route.name === 'AbilityDetail' && item.isHidden && (
                                        <SmallGreyText text="   (Hidden ability)" />
                                    )}
                                    {route.name === 'TypeDetail' && item.typeSlot && <TypeSlot slot={item.typeSlot} />}
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
                keyboardShouldPersistTaps="handled"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        minHeight: 10,
        flex: 1,
    },
    listItem: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: 'tomato',
    },
    separator: {
        borderBottomColor: app.darkColor,
        borderBottomWidth: 0.5,
    },
    emptyText: {
        paddingVertical: 50,
        textAlign: 'center',
    },
    nameWrap: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    nameText: {
        letterSpacing: 1,
    },
    itemImage: {
        resizeMode: 'cover',
        top: -8,
        width: 30,
        height: 30,
    },
});
