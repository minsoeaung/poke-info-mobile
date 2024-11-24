import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FlashList } from '@shopify/flash-list';
import { Image } from 'expo-image';
import React, { memo } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { MoveLearnMethod, PokemonMoveDetailType, StackParamList } from '../types';
import { MoveDamageClass } from './MoveDamageClass';
import MyText from './MyText';
import movesJson from '../assets/data/moves.json';
import { colors, typeColor } from '../constants/colors';
import getFormattedName from '../utils/getFormattedName';

import hairlineWidth = StyleSheet.hairlineWidth;

const moves = movesJson as unknown as { [key: string]: PokemonMoveDetailType };

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
            <FlashList
                data={moves}
                estimatedItemSize={60}
                keyExtractor={item => item[0]}
                renderItem={({ item }) => <Move item={item} learnMethod="levelUp" />}
                ListEmptyComponent={() => <MyText style={styles.emptyText}>None!</MyText>}
            />
        );
    } else {
        return (
            <FlashList
                data={moves}
                estimatedItemSize={60}
                keyExtractor={item => item}
                renderItem={({ item }) => <Move item={item} learnMethod="other" />}
                ListEmptyComponent={() => <MyText style={styles.emptyText}>None!</MyText>}
            />
        );
    }
};

const Move = memo(
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
                    backgroundColor: colors.card,
                    flexDirection: 'row',
                    borderBottomWidth: hairlineWidth,
                    borderBottomColor: 'black',
                    paddingVertical: 10,
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
                                    color: pressed ? colors.tomato : 'black',
                                }}
                            >
                                {learnMethod === 'levelUp' ? item[1] || '-' : ''}
                            </MyText>
                        )}
                        <View style={{ flex: 2, paddingLeft: learnMethod === 'levelUp' ? 0 : 15 }}>
                            <MyText numberOfLines={1} style={{ color: pressed ? colors.tomato : 'black' }}>
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
                                color: pressed ? colors.tomato : 'black',
                            }}
                        >
                            {move.power || '-'}
                        </MyText>
                        <MyText style={{ flex: 1, textAlign: 'center', color: pressed ? colors.tomato : 'black' }}>
                            {move.accuracy || '-'}
                        </MyText>
                        <MyText style={{ flex: 1, textAlign: 'center', color: pressed ? colors.tomato : 'black' }}>
                            {move.pp || '-'}
                        </MyText>
                        <MyText style={{ flex: 1, textAlign: 'center', color: pressed ? colors.tomato : 'black' }}>
                            {'>'}
                        </MyText>
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
