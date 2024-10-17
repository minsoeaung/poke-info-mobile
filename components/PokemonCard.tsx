import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image } from 'expo-image';
import React, { memo } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import MyText from './MyText';
import { cardColor, colors, typeColor } from '../constants/colors';
import { PokemonSmDetailType, StackParamList } from '../types';
import getFormattedName from '../utils/getFormattedName';

import hairlineWidth = StyleSheet.hairlineWidth;

const PokemonCard = ({ pokemon }: { pokemon: PokemonSmDetailType }) => {
    const { name, sprite, types } = pokemon;
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

    const goToPokemonDetailScreen = () => {
        navigation.push('PokemonDetail', { name });
    };

    return (
        <Pressable onPress={goToPokemonDetailScreen} style={styles.pressable}>
            {({ pressed }) => (
                <View
                    style={[
                        styles.pokemonCard,
                        {
                            borderColor: pressed ? 'tomato' : 'transparent',
                            backgroundColor: cardColor[types[0]],
                        },
                    ]}
                >
                    <View style={styles.spriteContainer}>
                        {sprite ? (
                            <Image
                                style={styles.sprite}
                                source={{
                                    uri: sprite,
                                }}
                                contentFit="cover"
                                accessibilityLabel={`Sprite of ${name}`}
                                recyclingKey={`front_default_${name}`}
                                transition={200}
                            />
                        ) : (
                            <MaterialIcons name="image-not-supported" size={24} color="grey" />
                        )}
                    </View>
                    <View style={styles.nameContainer}>
                        <MyText style={styles.name} numberOfLines={1}>
                            {getFormattedName(name)}
                        </MyText>
                        <View style={styles.types}>
                            {types.map((type, index) => (
                                <MyText
                                    key={index}
                                    style={StyleSheet.flatten([
                                        styles.type,
                                        {
                                            backgroundColor: typeColor[type],
                                        },
                                    ])}
                                >
                                    {type}
                                </MyText>
                            ))}
                        </View>
                    </View>
                </View>
            )}
        </Pressable>
    );
};

export default memo(PokemonCard);

const styles = StyleSheet.create({
    pressable: {
        flex: 1,
        aspectRatio: 2,
        margin: 5,
    },
    pokemonCard: {
        flex: 1,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 2,
        overflow: 'hidden',
        padding: 5,
        gap: 5,
    },
    spriteContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: hairlineWidth,
        borderColor: 'black',
    },
    nameContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 5,
    },
    name: {
        color: 'black',
        textShadowColor: 'rgba(0, 0, 0, 0.7)',
        textShadowOffset: { width: 0.2, height: 0.2 },
        textShadowRadius: 1,
    },
    sprite: {
        width: '110%',
        height: '110%',
        aspectRatio: 1,
    },
    bad: {
        fontSize: 14,
    },
    types: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: 5,
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
