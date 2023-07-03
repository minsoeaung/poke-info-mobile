import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image } from 'expo-image';
import { memo } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import MyText from './MyText';
import { app, cardColor, typeColor } from '../constants/colors';
import { PokemonSmDetailType, StackParamList } from '../types';
import getFormattedName from '../utils/getFormattedName';

const PokemonCard = ({ pokemon }: { pokemon: PokemonSmDetailType }) => {
    const { name, sprite, types } = pokemon;
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
    const backgroundColor = cardColor[types[0]];

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
                            borderColor: pressed ? 'tomato' : app.darkColor,
                            backgroundColor,
                        },
                    ]}
                >
                    <MyText style={styles.name} numberOfLines={1}>
                        {getFormattedName(name)}
                    </MyText>
                    <View style={styles.spriteContainer}>
                        {sprite && (
                            <Image
                                style={styles.sprite}
                                source={{
                                    // uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
                                    uri: sprite,
                                }}
                                contentFit="cover"
                                accessibilityLabel={`Sprite of ${name}`}
                                recyclingKey={`front_default_${name}`}
                                transition={200}
                            />
                        )}
                    </View>
                    <View style={styles.types}>
                        {types.map((type, index) => (
                            <MyText
                                key={index}
                                style={StyleSheet.flatten([
                                    styles.type,
                                    {
                                        backgroundColor: typeColor[type],
                                        borderBottomLeftRadius: index === 0 ? 5 : 0,
                                        borderTopLeftRadius: index === 0 ? 5 : 0,
                                        borderTopRightRadius: index === types.length - 1 ? 5 : 0,
                                        borderBottomRightRadius: index === types.length - 1 ? 5 : 0,
                                    },
                                ])}
                            >
                                {type}
                            </MyText>
                        ))}
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
        aspectRatio: 9 / 13,
        margin: 5,
    },
    pokemonCard: {
        flex: 1,
        borderRadius: 10,
        paddingTop: 5,
        paddingBottom: 7,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 2,
    },
    name: {
        width: '100%',
        textAlign: 'center',
        paddingHorizontal: 3,
        paddingVertical: 3,
        color: app.darkColor,

        textShadowColor: 'rgba(255, 255, 255, 1)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
    },
    spriteContainer: {
        width: '80%',
        height: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: app.lightColor + app.transparency,
        borderRadius: 10,
    },
    sprite: {
        width: '115%',
        height: '115%',
        aspectRatio: 1,
    },
    types: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    type: {
        paddingHorizontal: 3,
        paddingVertical: 2,
        color: app.lightColor,
        fontSize: 7,

        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 1.5, height: 1 },
        textShadowRadius: 1,
        textTransform: 'capitalize',
    },
});
