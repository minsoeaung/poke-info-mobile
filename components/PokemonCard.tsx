import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image } from 'expo-image';
import { memo } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

import MyText from './MyText';
import { app, cardColor, typeColor } from '../constants/colors';
import { PokemonSmDetailType, StackParamList } from '../types';
import getFormattedName from '../utils/getFormattedName';

const PokemonCard = ({ pokemon }: { pokemon: PokemonSmDetailType }) => {
    const { name, sprite, id, types } = pokemon;
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
    const backgroundColor = cardColor[types[0]];

    const goToPokemonDetailScreen = () => {
        navigation.push('PokemonDetail', { name });
    };

    return (
        <View style={[styles.pokemonCard, { backgroundColor: `${backgroundColor}${app.transparency}` }]}>
            <Pressable onPress={goToPokemonDetailScreen} style={styles.pressable}>
                {({ pressed }) => (
                    <>
                        <MyText
                            style={StyleSheet.flatten([
                                styles.name,
                                pressed
                                    ? { color: 'tomato' }
                                    : { color: types[0] === 'dark' ? app.lightColor : app.darkColor },
                            ])}
                            numberOfLines={1}
                        >
                            {getFormattedName(name)}
                        </MyText>
                        <View style={styles.spriteContainer}>
                            {sprite && (
                                <SharedElement id={`pokemon.sprite.${name}`}>
                                    <Image
                                        style={styles.sprite}
                                        source={{
                                            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
                                        }}
                                        contentFit="cover"
                                        accessibilityLabel={`Sprite of ${name}`}
                                        recyclingKey={`front_default_${name}`}
                                        transition={200}
                                    />
                                </SharedElement>
                            )}
                        </View>
                        <View style={styles.types}>
                            {types.map((type, index) => (
                                <MyText
                                    key={index}
                                    style={{
                                        backgroundColor: typeColor[type],
                                        paddingHorizontal: 5,
                                        paddingVertical: 2,
                                        borderBottomLeftRadius: index === 0 ? 5 : 0,
                                        borderTopLeftRadius: index === 0 ? 5 : 0,
                                        borderTopRightRadius: index === types.length - 1 ? 5 : 0,
                                        borderBottomRightRadius: index === types.length - 1 ? 5 : 0,
                                        color: types[index] === 'grass' ? app.darkColor : app.lightColor,
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
        </View>
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
        backgroundColor: app.lightColor + app.transparency,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sprite: {
        width: '105%',
        height: '105%',
        aspectRatio: 1,
    },
    types: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
});
