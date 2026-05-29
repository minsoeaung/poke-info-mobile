import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image } from 'expo-image';
import React, { memo } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import MyText from './MyText';
import { colors, typeColor } from '../constants/colors';
import { PokemonSmDetailType, StackParamList } from '../types';
import getFormattedName from '../utils/getFormattedName';
import { PokemonTypeIcon } from './PokemonTypeIcon';

const PokemonCard = ({ pokemon }: { pokemon: PokemonSmDetailType }) => {
    const { name, sprite, types } = pokemon;
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

    const goToPokemonDetailScreen = () => {
        navigation.push('PokemonDetail', { name });
    };

    return (
        <TouchableOpacity onPress={goToPokemonDetailScreen} style={styles.container}>
            <View style={styles.spriteContainer}>
                {sprite ? (
                    <Image
                        style={styles.sprite}
                        source={{
                            uri: sprite,
                        }}
                        contentFit="cover"
                        accessibilityLabel={name}
                        recyclingKey={`official_artwork_${name}`}
                        transition={200}
                    />
                ) : (
                    <MaterialIcons name="image-not-supported" size={24} color="grey" />
                )}
            </View>
            <MyText style={styles.name} fontWeight="medium">
                {getFormattedName(name)}
            </MyText>
            <View style={styles.types}>
                {types.map((type, index) => (
                    <View
                        key={index}
                        style={[
                            styles.type,
                            {
                                backgroundColor: typeColor[type],
                            },
                        ]}
                    >
                        <PokemonTypeIcon
                            name={type}
                            size={8}
                            style={{
                                shadowColor: 'rgba(0, 0, 0, 0.9)',
                                shadowOffset: { width: 0.5, height: 0.5 },
                                shadowRadius: 3,
                            }}
                        />
                        <MyText style={styles.typeText}>{type}</MyText>
                    </View>
                ))}
            </View>
        </TouchableOpacity>
    );
};

export default memo(PokemonCard);

const IMAGE_BORDER = 20;

const styles = StyleSheet.create({
    container: {
        padding: 8,
        paddingBottom: 12,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'rgba(255,255,255,0.15)',
        // backgroundColor: colors.card,
        marginHorizontal: 6,
    },
    spriteContainer: {
        backgroundColor: 'rgba(0,0,0,0.3)',
        aspectRatio: 1,
        borderTopRightRadius: IMAGE_BORDER,
        borderBottomLeftRadius: IMAGE_BORDER,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        padding: 8,
    },
    sprite: {
        width: '100%',
        height: '100%',
        flex: 1,
    },
    name: {
        color: '#fff',
        fontSize: 14,
        lineHeight: 25,
        marginTop: 5,
    },
    types: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: 5,
        marginTop: 7,
    },
    type: {
        paddingHorizontal: 3,
        paddingVertical: 2,
        borderRadius: 2,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
    },
    typeText: {
        color: colors.typeText,
        fontSize: 9,
        lineHeight: 12,
        textShadowColor: 'rgba(0, 0, 0, 0.9)',
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 3,
        textTransform: 'capitalize',
    },
});
