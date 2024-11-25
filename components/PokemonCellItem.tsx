import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image } from 'expo-image';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import MyText from './MyText';
import SmallGreyText from './SmallGreyText';
import { colors } from '../constants/colors';
import pokemonDetails from '../constants/POKEMON_DETAILS';
import { MoveLearnMethod, StackParamList } from '../types';
import getFormattedName from '../utils/getFormattedName';
import getTypeSlotString from '../utils/getTypeSlotString';
import hairlineWidth = StyleSheet.hairlineWidth;

type Props<T> = {
    item: T;
    color: string;
    isLast?: boolean;
    size?: 'default' | 'small';
};

const sizeToPaddingVertical = {
    default: 5,
    small: 0,
};

const PokemonCellItem = <
    T extends {
        name: string;
        typeSlot?: number;
        isHidden?: boolean;
        learnMethod?: MoveLearnMethod | '';
        learnedAtLevel?: number | null;
    },
>({
      item,
      color,
      isLast = false,
      size = 'default',
  }: Props<T>) => {
    const typeSlotStr = typeof item?.typeSlot === 'number' ? getTypeSlotString(item.typeSlot) : '';
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

    return (
        <Pressable
            style={[
                styles.pokemonCell,
                {
                    borderBottomLeftRadius: isLast ? 5 : 0,
                    borderBottomRightRadius: isLast ? 5 : 0,
                    paddingVertical: sizeToPaddingVertical[size],
                },
            ]}
            onPress={() => {
                navigation.push('PokemonDetail', { name: item.name });
            }}
        >
            {({ pressed }) => (
                <>
                    <View style={styles.spriteAndName}>
                        <View style={styles.spriteContainer}>
                            {pokemonDetails[item.name]?.profile.sprite ? (
                                <Image
                                    style={styles.sprite}
                                    source={{
                                        uri: pokemonDetails[item.name]?.profile.sprite || '',
                                    }}
                                    contentFit="cover"
                                    accessibilityLabel={`Sprite of ${item.name}`}
                                    recyclingKey={`front_default_${item.name}`}
                                    transition={200}
                                />
                            ) : (
                                <MaterialIcons name="image-not-supported" size={18} color="grey" />
                            )}
                        </View>
                        <View>
                            <MyText
                                style={StyleSheet.flatten([
                                    styles.name,
                                    { color: pressed ? 'tomato' : colors.cardText },
                                ])}
                            >
                                {getFormattedName(item.name)}
                            </MyText>
                            {(typeSlotStr || item.isHidden) && (
                                <MyText>
                                    {typeSlotStr && <SmallGreyText text={typeSlotStr} />}
                                    {typeSlotStr && ' '}
                                    {item.isHidden && <SmallGreyText text="(hidden ability)" />}
                                </MyText>
                            )}
                            {item.learnMethod === 'levelUp' &&
                                (item.learnedAtLevel ? (
                                    <SmallGreyText text={`Learned at level ${item.learnedAtLevel}.`} />
                                ) : (
                                    <SmallGreyText text="Learnt by level up." />
                                ))}
                            {item.learnMethod === 'egg' && <SmallGreyText text="Learned through breeding." />}
                            {item.learnMethod === 'machine' && <SmallGreyText text="Learned via TM/HM." />}
                            {item.learnMethod === 'tutor' && <SmallGreyText text="Learned from a Tutor." />}
                        </View>
                    </View>
                    <MyText style={StyleSheet.flatten([styles.arrow, { color: pressed ? 'tomato' : colors.cardText }])}>
                        {'> '}
                    </MyText>
                </>
            )}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    pokemonCell: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        backgroundColor: colors.card,
        borderBottomWidth: hairlineWidth,
        borderBottomColor: 'black',
    },
    spriteAndName: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        flex: 15,
    },
    spriteContainer: {
        width: 50,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sprite: {
        width: '100%',
        height: '100%',
        aspectRatio: 1,
    },
    name: {},
    arrow: {
        flex: 1,
    },
});

export default PokemonCellItem;
