import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FlashList } from '@shopify/flash-list';
import React, { Fragment, memo } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { MoveLearnMethod, StackParamList } from '../types';
import { MoveDamageClass } from './MoveDamageClass';
import MyText from './MyText';
import moves from '../constants/MOVES';
import { colors, typeColor } from '../constants/colors';
import getFormattedName from '../utils/getFormattedName';

import hairlineWidth = StyleSheet.hairlineWidth;

import { AntDesign } from '@expo/vector-icons';

type Props =
    | {
          learnMethod: 'levelUp';
          moves: [string, number | null][];
      }
    | {
          learnMethod: Exclude<MoveLearnMethod, 'levelUp'>;
          moves: string[];
      };

export const PokemonMoves = ({ moves, learnMethod }: Props) => {
    if (learnMethod === 'levelUp') {
        return (
            <View style={{ flex: 1 }}>
                {moves.map(move => (
                    <Move key={move[0]} item={move} learnMethod="levelUp" />
                ))}
            </View>

            // <FlashList
            //     data={moves}
            //     estimatedItemSize={60}
            //     keyExtractor={(item) => item[0]}
            //     renderItem={({ item }) => <Move item={item} learnMethod="levelUp" />}
            //     ListEmptyComponent={() => <MyText style={styles.emptyText}>None!</MyText>}
            //     extraData={learnMethod}
            // />;
        );
    } else {
        return (
            <View style={{ flex: 1 }}>
                {moves.map(move => (
                    <Move key={move} item={move} learnMethod="other" />
                ))}
            </View>
            // <FlashList
            //     data={moves}
            //     estimatedItemSize={60}
            //     keyExtractor={(item) => item}
            //     renderItem={({ item }) => <Move item={item} learnMethod="other" />}
            //     ListEmptyComponent={() => <MyText style={styles.emptyText}>None!</MyText>}
            //     extraData={learnMethod}
            // />;
        );
    }
};

export const Move = memo(
    ({
        item,
        learnMethod,
    }:
        | { item: string; learnMethod: 'other' }
        | {
              item: [string, number | null];
              learnMethod: 'levelUp';
          }) => {
        const navigation = useNavigation<NativeStackNavigationProp<StackParamList, 'PokemonDetail'>>();

        const move = learnMethod === 'levelUp' ? moves[item[0]] : moves[item];

        return (
            <Pressable
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',

                    borderBottomWidth: hairlineWidth,
                    borderLeftWidth: hairlineWidth,
                    borderRightWidth: hairlineWidth,
                    borderColor: 'white',

                    paddingVertical: 10,
                    marginHorizontal: 10,
                }}
                onPress={() => {
                    navigation.push('MoveDetail', move);
                }}
            >
                {({ pressed }) => (
                    <>
                        {learnMethod === 'levelUp' && (
                            <MyText
                                style={{
                                    flex: 1,
                                    textAlign: 'center',
                                    color: pressed ? colors.tomato : 'white',
                                }}
                            >
                                {learnMethod === 'levelUp' ? item[1] || '-' : ''}
                            </MyText>
                        )}
                        <View style={{ flex: 2, paddingLeft: learnMethod === 'levelUp' ? 0 : 15 }}>
                            <MyText numberOfLines={1} style={{ color: pressed ? colors.tomato : 'white' }}>
                                {getFormattedName(move.name)}
                            </MyText>
                            <View style={{ flex: 1, flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                                <MyText
                                    style={StyleSheet.flatten([
                                        styles.type,
                                        {
                                            backgroundColor: typeColor[move.type as keyof typeof typeColor],
                                        },
                                    ])}
                                >
                                    {move.type}
                                </MyText>
                                <MoveDamageClass damageClass={move.damageClass} />
                            </View>
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
                        <MyText style={{ flex: 1, textAlign: 'center', color: pressed ? colors.tomato : 'white' }}>
                            {move.accuracy || '-'}
                        </MyText>
                        <MyText style={{ flex: 1, textAlign: 'center', color: pressed ? colors.tomato : 'white' }}>
                            {move.pp || '-'}
                        </MyText>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <AntDesign name="arrow-right" size={12} color={pressed ? colors.tomato : 'white'} />
                        </View>
                    </>
                )}
            </Pressable>
        );
    },
);

const styles = StyleSheet.create({
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
    emptyText: {
        paddingVertical: 100,
        textAlign: 'center',
        color: colors.cardText,
        borderBottomWidth: hairlineWidth,
        borderColor: 'black',
    },
});
