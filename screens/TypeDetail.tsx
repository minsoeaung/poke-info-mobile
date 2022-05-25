import { useNavigation } from '@react-navigation/native';
import {
    NativeStackNavigationProp,
    NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { PokeAPI } from 'pokeapi-types';
import { useEffect } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';

import Description from '../components/Description';
import ErrorDisplay from '../components/ErrorDisplay';
import LoadingText from '../components/LoadingText';
import MyText from '../components/MyText';
import SmallGreyText from '../components/SmallGreyText';
import TypeSlot from '../components/TypeSlot';
import { appColor, typeColor } from '../constants/colors';
import useFetchData from '../hooks/useFetchData';
import { NativeStackParamList } from '../types';
import getFormattedName from '../utils/getFormattedName';

type Props = NativeStackScreenProps<NativeStackParamList, 'TypeDetail'>;

export default function TypeDetail({ route, navigation }: Props) {
    const { name, url } = route.params;
    const { isLoading, error, data } = useFetchData<PokeAPI.Type>(url);

    useEffect(() => {
        navigation.setOptions({ title: getFormattedName(name) });
    }, []);

    const goToPokemon = (name: string, url: string) => () => {
        navigation.push('PokemonDetail', { name, url });
    };

    if (isLoading) {
        return <LoadingText />;
    }

    if (error) {
        return <ErrorDisplay error={error} />;
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.dmgRelationContainer}>
                <MyText style={styles.cardTitle}>Attack</MyText>
                <Description
                    label="2x damage"
                    value={
                        <Types
                            types={data!.damage_relations.double_damage_to}
                        />
                    }
                />
                <Description
                    label="0.5x damage"
                    value={
                        <Types types={data!.damage_relations.half_damage_to} />
                    }
                    noBorder={!data!.damage_relations.no_damage_to.length}
                />
                {!!data!.damage_relations.no_damage_to.length && (
                    <Description
                        label="no damage"
                        value={
                            <Types
                                types={data!.damage_relations.no_damage_to}
                            />
                        }
                        noBorder
                    />
                )}
            </View>

            <View style={styles.dmgRelationContainer}>
                <MyText style={styles.cardTitle}>Defense</MyText>
                <Description
                    label="2x damage"
                    value={
                        <Types
                            types={data!.damage_relations.double_damage_from}
                        />
                    }
                />
                <Description
                    label="0.5x damage"
                    value={
                        <Types
                            types={data!.damage_relations.half_damage_from}
                        />
                    }
                    noBorder={!data!.damage_relations.no_damage_from.length}
                />
                {!!data!.damage_relations.no_damage_from.length && (
                    <Description
                        label="no damage"
                        value={
                            <Types
                                types={data!.damage_relations.no_damage_from}
                            />
                        }
                        noBorder
                    />
                )}
            </View>

            <View style={styles.dmgRelationContainer}>
                <MyText style={styles.cardTitle}>
                    {getFormattedName(name)} Pokémon
                </MyText>
                {data!.pokemon.map(({ pokemon, slot }, index) => (
                    <Pokemon
                        key={pokemon.name}
                        name={pokemon.name}
                        url={pokemon.url}
                        typeSlot={slot}
                        noBorder={index === data!.pokemon.length - 1}
                        goToPokemon={goToPokemon}
                    />
                ))}
            </View>
        </ScrollView>
    );
}

type PokemonProps = {
    name: string;
    url: string;
    goToPokemon: (name: string, url: string) => () => void;
    noBorder?: boolean;
    isHidden?: boolean;
    typeSlot?: number;
};

export function Pokemon({
    name,
    url,
    noBorder = false,
    goToPokemon,
    isHidden,
    typeSlot,
}: PokemonProps) {
    return (
        <Pressable onPress={goToPokemon(name, url)}>
            {({ pressed }) => (
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderBottomWidth: noBorder ? 0 : 1,
                        borderColor: 'tomato',
                        paddingVertical: 20,
                        marginHorizontal: 10,
                    }}>
                    <View
                        style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <MyText style={{ color: pressed ? 'tomato' : 'black' }}>
                            {getFormattedName(name)}
                        </MyText>
                        {isHidden && (
                            <SmallGreyText text="   (Hidden ability)" />
                        )}
                        {typeSlot && <TypeSlot slot={typeSlot} />}
                    </View>
                    <MyText style={{ color: pressed ? 'tomato' : 'black' }}>
                        {'     >'}
                    </MyText>
                </View>
            )}
        </Pressable>
    );
}

type TypesProps = {
    types: {
        name: string;
        url: string;
    }[];
};

function Types({ types }: TypesProps) {
    const navigation =
        useNavigation<NativeStackNavigationProp<NativeStackParamList>>();

    return (
        <View style={styles.typeContainer}>
            {types?.map(type => (
                <Pressable
                    key={type.name}
                    onPress={() => {
                        navigation.push('TypeDetail', {
                            name: type.name,
                            url: type.url,
                        });
                    }}>
                    {({ pressed }) => (
                        <MyText
                            style={{
                                backgroundColor: pressed
                                    ? 'rgb(130,183,255)'
                                    : typeColor[type.name],
                                paddingHorizontal: 10,
                                paddingVertical: 7,
                                borderRadius: 5,
                                color: 'white',
                                marginRight: 5,
                                elevation: 5,
                                marginTop: 5,
                            }}>
                            {type.name}
                        </MyText>
                    )}
                </Pressable>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: appColor.appBg,
    },
    typeContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    dmgRelationContainer: {
        marginBottom: 20,
        backgroundColor: appColor.headerBg,
        borderRadius: 10,
        borderWidth: 0.5,
    },
    cardTitle: {
        fontSize: 20,
        margin: 10,
        color: '#000',
    },
});
