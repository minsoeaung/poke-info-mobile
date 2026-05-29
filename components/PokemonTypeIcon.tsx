import { Image, ImageStyle } from 'expo-image';
import React from 'react';
import { PokemonSmDetailType } from '../types';

export const PokemonTypeList: PokemonSmDetailType['types'] = [
    'bug',
    'dark',
    'dragon',
    'electric',
    'fairy',
    'fighting',
    'fire',
    'flying',
    'ghost',
    'grass',
    'ground',
    'ice',
    'normal',
    'poison',
    'psychic',
    'rock',
    'steel',
    'water',
];

const TypeSources = {
    bug: require('../assets/pokemon-types/bug.svg'),
    dark: require('../assets/pokemon-types/dark.svg'),
    dragon: require('../assets/pokemon-types/dragon.svg'),
    electric: require('../assets/pokemon-types/electric.svg'),
    fairy: require('../assets/pokemon-types/fairy.svg'),
    fighting: require('../assets/pokemon-types/fighting.svg'),
    fire: require('../assets/pokemon-types/fire.svg'),
    flying: require('../assets/pokemon-types/flying.svg'),
    ghost: require('../assets/pokemon-types/ghost.svg'),
    grass: require('../assets/pokemon-types/grass.svg'),
    ground: require('../assets/pokemon-types/ground.svg'),
    ice: require('../assets/pokemon-types/ice.svg'),
    normal: require('../assets/pokemon-types/normal.svg'),
    poison: require('../assets/pokemon-types/poison.svg'),
    psychic: require('../assets/pokemon-types/psychic.svg'),
    rock: require('../assets/pokemon-types/rock.svg'),
    steel: require('../assets/pokemon-types/steel.svg'),
    water: require('../assets/pokemon-types/water.svg'),
} as const;

export type PokemonTypeName = keyof typeof TypeSources;

interface PokemonTypeProps {
    name: PokemonTypeName;
    size?: number;
    style?: ImageStyle;
}

export const PokemonTypeIcon: React.FC<PokemonTypeProps> = ({ name, size = 24, style }) => {
    const imageSource = TypeSources[name];

    if (!imageSource) {
        console.warn(`PokemonType: Type "${name}" not found in assets.`);
        return null;
    }

    return <Image source={imageSource} contentFit="contain" style={[{ width: size, height: size }, style]} />;
};
