import { useNavigation, useScrollToTop } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FlashList } from '@shopify/flash-list';
import React, { useRef } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';

import ClearInputButton from '../components/ClearInputButton';
import { GradientBackground } from '../components/GradientBackground';
import { MoveDamageClass } from '../components/MoveDamageClass';
import MyText from '../components/MyText';
import SmallGreyText from '../components/SmallGreyText';
import MOVES from '../constants/MOVES';
import { colors, typeColor } from '../constants/colors';
import { fonts } from '../constants/fonts';
import useSearchableList from '../hooks/useSearchableList';
import { StackParamList } from '../types';
import getFormattedName from '../utils/getFormattedName';

import hairlineWidth = StyleSheet.hairlineWidth;

import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { EmptyView } from '../components/EmptyView';

const moveNames = Object.keys(MOVES).map(moveName => ({ name: moveName }));

export default function MoveList() {
    const { list, value, handleChangeText, clearInput } = useSearchableList(moveNames);
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList, 'MoveList'>>();
    const bTabBarHeight = useBottomTabBarHeight();
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
            <View style={styles.header}>
                <MyText style={{ flex: 3, ...styles.headerText }}>Name</MyText>
                <MyText style={{ flex: 2, ...styles.headerText }}>Type,Cat.</MyText>
                <MyText style={{ flex: 1, ...styles.headerText }}>Power</MyText>
                <MyText style={{ flex: 1, ...styles.headerText }}>Acc.%</MyText>
                <MyText style={{ flex: 1, ...styles.headerText }}>PP</MyText>
                <MyText style={{ flex: 1, ...styles.headerText }}>&nbsp;</MyText>
            </View>
            <View style={styles.moveListWrap}>
                <FlashList
                    ref={listRef}
                    data={list}
                    ListEmptyComponent={() => <EmptyView text="No results found" />}
                    keyExtractor={item => {
                        return item.name;
                    }}
                    renderItem={({ item, index }) => {
                        const isLast = list.length === index;

                        const move = MOVES[item.name];

                        return (
                            <Pressable
                                style={{
                                    flex: 1,
                                    borderBottomWidth: isLast ? 0 : hairlineWidth,
                                    // borderLeftWidth: hairlineWidth,
                                    // borderRightColor: hairlineWidth,
                                    borderColor: 'black',
                                    paddingVertical: 10,
                                    backgroundColor: colors.card,
                                }}
                                onPress={() => {
                                    navigation.push('MoveDetail', move);
                                }}
                            >
                                {({ pressed }) => (
                                    <>
                                        <View
                                            style={{
                                                flex: 1,
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <View style={{ flex: 3, paddingLeft: 15 }}>
                                                <MyText
                                                    numberOfLines={1}
                                                    style={{
                                                        color: pressed ? colors.tomato : 'white',
                                                        fontSize: 16,
                                                    }}
                                                >
                                                    {getFormattedName(move.name)}
                                                </MyText>
                                            </View>
                                            <View
                                                style={{
                                                    flex: 2,
                                                    flexDirection: 'row',
                                                    gap: 5,
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <MyText
                                                    style={StyleSheet.flatten([
                                                        styles.type,
                                                        {
                                                            backgroundColor:
                                                                typeColor[move.type as keyof typeof typeColor],
                                                        },
                                                    ])}
                                                >
                                                    {move.type}
                                                </MyText>
                                                <MoveDamageClass damageClass={move.damageClass} />
                                            </View>
                                            <MyText
                                                style={{
                                                    ...styles.moveNumberText,
                                                    color: pressed ? colors.tomato : 'white',
                                                }}
                                            >
                                                {move.power || '-'}
                                            </MyText>
                                            <MyText
                                                style={{
                                                    ...styles.moveNumberText,
                                                    color: pressed ? colors.tomato : 'white',
                                                }}
                                            >
                                                {move.accuracy || '-'}
                                            </MyText>
                                            <MyText
                                                style={{
                                                    ...styles.moveNumberText,
                                                    color: pressed ? colors.tomato : 'white',
                                                }}
                                            >
                                                {move.pp || '-'}
                                            </MyText>
                                        </View>
                                        {move.description && (
                                            <View style={{ marginLeft: 10 }}>
                                                <SmallGreyText text={move.description} />
                                            </View>
                                        )}
                                    </>
                                )}
                            </Pressable>
                        );
                    }}
                    ListFooterComponent={() => <View style={{ height: bTabBarHeight }} />}
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
        marginBottom: 10,
        paddingRight: 5,
        borderRadius: 5,
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
    moveListWrap: {
        flex: 1,
        color: colors.cardText,
        borderRadius: 5,
        overflow: 'hidden',
        // borderWidth: StyleSheet.hairlineWidth,
        // borderColor: 'white',
    },
    header: {
        flexDirection: 'row',
        backgroundColor: colors.background,
        paddingBottom: 5,
    },
    headerText: {
        textAlign: 'center',
        fontSize: 12,
        color: 'white',
    },
    type: {
        paddingHorizontal: 3,
        paddingVertical: 2,
        color: colors.typeText,
        fontSize: 10,
        lineHeight: 12,
        borderRadius: 2,

        textShadowColor: 'rgba(0, 0, 0, 0.9)',
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 3,
        textTransform: 'capitalize',
    },
    moveNumberText: {
        flex: 1,
        textAlign: 'center',
        fontSize: 16,
    },
    emptyText: {
        paddingVertical: 100,
        textAlign: 'center',
        color: colors.cardText,
    },
});
