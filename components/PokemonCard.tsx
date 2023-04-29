import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image } from 'expo-image';
import { memo } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

import MyText from './MyText';
import { app, cardColor, typeColor } from '../constants/colors';
import { LocalPokemonType } from '../constants/pokemons';
import { NativeStackParamList } from '../types';
import getFormattedName from '../utils/getFormattedName';

const PokemonCard = ({ pokemon }: { pokemon: LocalPokemonType }) => {
    const { name, sprite, types } = pokemon;
    const navigation = useNavigation<NativeStackNavigationProp<NativeStackParamList>>();
    const backgroundColor = cardColor[types[0]];

    const goToPokemonDetailScreen = () => {
        navigation.push('PokemonDetail', pokemon);
    };

    return (
        <Animated.View entering={FadeInDown} style={[styles.pokemonCard, { backgroundColor }]}>
            <Pressable onPress={goToPokemonDetailScreen} style={styles.pressable}>
                {({ pressed }) => (
                    <>
                        <MyText
                            style={StyleSheet.flatten([styles.name, pressed ? { color: 'tomato' } : {}])}
                            numberOfLines={1}
                        >
                            {getFormattedName(name)}
                        </MyText>
                        <View style={styles.spriteContainer}>
                            {sprite && (
                                <Image
                                    style={styles.sprite}
                                    source={{ uri: sprite }}
                                    contentFit="cover"
                                    accessibilityLabel={`Sprite of ${name}`}
                                    recyclingKey={name}
                                    transition={200}
                                />
                            )}
                        </View>
                        <View style={styles.types}>
                            {types.map((type, index) => (
                                <MyText
                                    key={type}
                                    style={{
                                        backgroundColor: typeColor[type],
                                        paddingHorizontal: 5,
                                        paddingVertical: 2,
                                        borderBottomLeftRadius: index === 0 ? 5 : 0,
                                        borderTopLeftRadius: index === 0 ? 5 : 0,
                                        borderTopRightRadius: index === types.length - 1 ? 5 : 0,
                                        borderBottomRightRadius: index === types.length - 1 ? 5 : 0,
                                        color: app.lightColor,
                                        fontSize: 8,
                                    }}
                                >
                                    {type}
                                </MyText>
                            ))}
                        </View>
                    </>
                )}
            </Pressable>
        </Animated.View>
    );
};

export default memo(PokemonCard);

const styles = StyleSheet.create({
    pokemonCard: {
        aspectRatio: 9 / 13,
        flex: 1,
        margin: 5,
        borderRadius: 10,
        elevation: 5,
        borderColor: app.darkColor,
        borderWidth: 0.5,
    },
    pressable: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: '100%',
    },
    name: {
        width: '100%',
        textAlign: 'center',
        paddingHorizontal: 5,
        paddingVertical: 4,
    },
    spriteContainer: {
        borderRadius: 10,
        width: '80%',
        height: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    sprite: {
        width: '100%',
        height: '100%',
    },
    types: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
});
