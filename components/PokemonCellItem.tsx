import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image } from 'expo-image';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import MyText from './MyText';
import SmallGreyText from './SmallGreyText';
import { app } from '../constants/colors';
import pokemonDetails from '../constants/pokemonDetails';
import { StackParamList } from '../types';
import getTypeSlotString from '../utils/getTypeSlotString';

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

const PokemonCellItem = <T extends { name: string; typeSlot?: number }>({
    item,
    color,
    isLast = false,
    size = 'default',
}: Props<T>) => {
    const typeSlotStr = typeof item?.typeSlot === 'number' ? getTypeSlotString(item.typeSlot) : '';
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList, 'TypeDetail'>>();

    return (
        <Pressable
            style={[
                styles.pokemonCell,
                {
                    borderBottomWidth: isLast ? StyleSheet.hairlineWidth : 0,
                    borderBottomLeftRadius: isLast ? 10 : 0,
                    borderBottomRightRadius: isLast ? 10 : 0,
                    borderColor: color,
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
                        </View>
                        <MyText
                            style={StyleSheet.flatten([styles.name, { color: pressed ? 'tomato' : app.lightColor }])}
                        >
                            {item.name}
                        </MyText>
                        {typeSlotStr && <SmallGreyText text={typeSlotStr} />}
                    </View>
                    <MyText style={{ color: pressed ? 'tomato' : app.lightColor }}>{'> '}</MyText>
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
        paddingHorizontal: 10,
        position: 'relative',
        borderLeftWidth: StyleSheet.hairlineWidth,
        borderRightWidth: StyleSheet.hairlineWidth,
    },
    spriteAndName: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    spriteContainer: {
        width: 50,
        height: 50,
    },
    sprite: {
        width: '100%',
        height: '100%',
    },
    name: {
        textTransform: 'capitalize',
    },
});

export default PokemonCellItem;
