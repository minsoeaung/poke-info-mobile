import { useNavigation, useScrollToTop } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FlashList } from '@shopify/flash-list';
import React, { useRef } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';

import ClearInputButton from '../components/ClearInputButton';
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
import { GradientBackground } from '../components/GradientBackground';

const moveNames = Object.keys(MOVES).map(moveName => ({ name: moveName }));

export default function MoveList() {
    const { list, value, handleChangeText, clearInput } = useSearchableList(moveNames);
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList, 'MoveList'>>();
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
            <View style={styles.moveListWrap}>
                <FlashList
                    data={['StickyHeader', ...list]}
                    keyExtractor={item => {
                        if (typeof item === 'string') {
                            return item;
                        } else {
                            return item.name;
                        }
                    }}
                    stickyHeaderIndices={[0]}
                    renderItem={({ item }) => {
                        if (typeof item === 'string') {
                            return (
                                <View style={styles.header}>
                                    <MyText style={{ flex: 3, ...styles.headerText }}>Name</MyText>
                                    <MyText style={{ flex: 2, ...styles.headerText }}>Type,Cat.</MyText>
                                    <MyText style={{ flex: 1, ...styles.headerText }}>Power</MyText>
                                    <MyText style={{ flex: 1, ...styles.headerText }}>Acc.%</MyText>
                                    <MyText style={{ flex: 1, ...styles.headerText }}>PP</MyText>
                                    <MyText style={{ flex: 1, ...styles.headerText }}>&nbsp;</MyText>
                                </View>
                            );
                        } else {
                            const move = MOVES[item.name];

                            return (
                                <Pressable
                                    style={{
                                        flex: 1,
                                        borderBottomWidth: hairlineWidth,
                                        borderColor: 'white',
                                        paddingVertical: 10,
                                        // marginHorizontal: 10,
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
                                                        style={{ color: pressed ? colors.tomato : 'white' }}
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
                                                        flex: 1,
                                                        textAlign: 'center',
                                                        color: pressed ? colors.tomato : 'white',
                                                    }}
                                                >
                                                    {move.power || '-'}
                                                </MyText>
                                                <MyText
                                                    style={{
                                                        flex: 1,
                                                        textAlign: 'center',
                                                        color: pressed ? colors.tomato : 'white',
                                                    }}
                                                >
                                                    {move.accuracy || '-'}
                                                </MyText>
                                                <MyText
                                                    style={{
                                                        flex: 1,
                                                        textAlign: 'center',
                                                        color: pressed ? colors.tomato : 'white',
                                                    }}
                                                >
                                                    {move.pp || '-'}
                                                </MyText>
                                                <MyText
                                                    style={{
                                                        flex: 1,
                                                        textAlign: 'center',
                                                        color: pressed ? colors.tomato : 'black',
                                                    }}
                                                >
                                                    {'>'}
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

                            // return <Move item={item.name} learnMethod="other" />;
                        }
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    searchInputWrap: {
        backgroundColor: colors.card,
        borderRadius: 5,
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
        color: colors.cardText,
        width: '90%',
        fontFamily: fonts.NotoSans_400Regular,
    },
    moveListWrap: {
        flex: 1,
        backgroundColor: colors.card,
        color: colors.cardText,
        borderRadius: 5,
        overflow: 'hidden',
        position: 'relative',
    },
    header: {
        flexDirection: 'row',
        backgroundColor: colors.background,
    },
    headerText: {
        textAlign: 'center',
        fontSize: 10,
        color: 'white',
    },
    type: {
        paddingHorizontal: 3,
        paddingVertical: 2,
        color: colors.typeText,
        fontSize: 9,
        lineHeight: 12,
        borderRadius: 2,

        textShadowColor: 'rgba(0, 0, 0, 0.9)',
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 3,
        textTransform: 'capitalize',
    },
});
