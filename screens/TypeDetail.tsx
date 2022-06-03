import { useNavigation } from '@react-navigation/native';
import {
    NativeStackNavigationProp,
    NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { PokeAPI } from 'pokeapi-types';
import { useEffect, useState } from 'react';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';

import Description from '../components/Description';
import ErrorDisplay from '../components/ErrorDisplay';
import LoadingText from '../components/LoadingText';
import MyText from '../components/MyText';
import { PressableNameList } from '../components/PressableNameList';
import { appColor, typeColor } from '../constants/colors';
import useFetchData from '../hooks/useFetchData';
import { NativeStackParamList, PressableListItemType } from '../types';
import getFormattedName from '../utils/getFormattedName';

type Props = NativeStackScreenProps<NativeStackParamList, 'TypeDetail'>;

export default function TypeDetail({ route, navigation }: Props) {
    const { name } = route.params;

    const [pokemonsWithThisType, setPokemonsWithThisType] = useState<
        PressableListItemType[]
    >([]);

    const { isLoading, error, data } = useFetchData<PokeAPI.Type>(
        `https://pokeapi.co/api/v2/type/${name}`,
    );

    useEffect(() => {
        navigation.setOptions({ title: getFormattedName(name) });
    }, []);

    useEffect(() => {
        if (data) {
            const list: PressableListItemType[] = data.pokemon.map(d => ({
                name: d.pokemon.name,
                typeSlot: d.slot,
            }));
            setPokemonsWithThisType(list);
        }
    }, [data]);

    if (isLoading) {
        return <LoadingText />;
    }

    if (error) {
        return <ErrorDisplay error={error} />;
    }

    return (
        <FlatList
            data={[]}
            renderItem={null}
            style={styles.container}
            ListHeaderComponent={
                <>
                    <View style={styles.boxWrap}>
                        <MyText style={styles.boxTitle}>Attack</MyText>
                        <Description
                            label="2x damage"
                            value={
                                <Types
                                    types={
                                        data!.damage_relations.double_damage_to
                                    }
                                />
                            }
                        />
                        <Description
                            label="0.5x damage"
                            value={
                                <Types
                                    types={
                                        data!.damage_relations.half_damage_to
                                    }
                                />
                            }
                            noBorder={
                                !data!.damage_relations.no_damage_to.length
                            }
                        />
                        {!!data!.damage_relations.no_damage_to.length && (
                            <Description
                                label="no damage"
                                value={
                                    <Types
                                        types={
                                            data!.damage_relations.no_damage_to
                                        }
                                    />
                                }
                                noBorder
                            />
                        )}
                    </View>
                    <View style={styles.boxWrap}>
                        <MyText style={styles.boxTitle}>Defense</MyText>
                        <Description
                            label="2x damage"
                            value={
                                <Types
                                    types={
                                        data!.damage_relations
                                            .double_damage_from
                                    }
                                />
                            }
                        />
                        <Description
                            label="0.5x damage"
                            value={
                                <Types
                                    types={
                                        data!.damage_relations.half_damage_from
                                    }
                                />
                            }
                            noBorder={
                                !data!.damage_relations.no_damage_from.length
                            }
                        />
                        {!!data!.damage_relations.no_damage_from.length && (
                            <Description
                                label="no damage"
                                value={
                                    <Types
                                        types={
                                            data!.damage_relations
                                                .no_damage_from
                                        }
                                    />
                                }
                                noBorder
                            />
                        )}
                    </View>
                </>
            }
            ListEmptyComponent={
                <View style={styles.boxWrap}>
                    <MyText style={styles.boxTitle}>
                        {getFormattedName(name) + ' Pokémon'}
                    </MyText>
                    <PressableNameList
                        goTo="PokemonDetail"
                        data={pokemonsWithThisType}
                    />
                </View>
            }
            ListFooterComponent={<View style={styles.footer} />}
        />
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
        useNavigation<
            NativeStackNavigationProp<NativeStackParamList, 'TypeDetail'>
        >();

    return (
        <View style={styles.typeContainer}>
            {types?.map(type => (
                <Pressable
                    key={type.name}
                    onPress={() => {
                        navigation.push('TypeDetail', {
                            name: type.name,
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
    boxWrap: {
        marginBottom: 10,
        backgroundColor: appColor.headerBg,
        borderRadius: 10,
        borderWidth: 0.5,
        padding: 10,
    },
    boxTitle: {
        fontSize: 20,
        margin: 10,
        color: '#000',
    },
    footer: {
        marginBottom: 10,
    },
});
