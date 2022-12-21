import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { PokeAPI } from 'pokeapi-types';
import { useLayoutEffect, useMemo } from 'react';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';

import Card from '../components/Card';
import Description from '../components/Description';
import ErrorDisplay from '../components/ErrorDisplay';
import LoadingText from '../components/LoadingText';
import MyText from '../components/MyText';
import { PressableNameList } from '../components/PressableNameList';
import { app, cardColor, typeColor } from '../constants/colors';
import useFetchData from '../hooks/useFetchData';
import { NativeStackParamList } from '../types';
import getFormattedName from '../utils/getFormattedName';

type Props = NativeStackScreenProps<NativeStackParamList, 'TypeDetail'>;

export default function TypeDetail({ route, navigation }: Props) {
    const { name } = route.params;

    const { isLoading, error, data } = useFetchData<PokeAPI.Type>(`https://pokeapi.co/api/v2/type/${name}`);

    const pokemonsWithThisType = useMemo(() => {
        if (data) {
            return data.pokemon.map(d => ({
                name: d.pokemon.name,
                typeSlot: d.slot,
            }));
        } else {
            return [];
        }
    }, [data]);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: getFormattedName(name),
            headerStyle: {
                backgroundColor: cardColor[name],
            },
        });
    }, []);

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
                    <Card title="Attack" titleBgColor={cardColor[name]}>
                        {data!.damage_relations.double_damage_to.length > 0 && (
                            <Description
                                label="2x damage"
                                value={<Types types={data!.damage_relations.double_damage_to} />}
                            />
                        )}
                        {data!.damage_relations.half_damage_to.length > 0 && (
                            <Description
                                label="0.5x damage"
                                value={<Types types={data!.damage_relations.half_damage_to} />}
                                noBorder={!data!.damage_relations.no_damage_to.length}
                            />
                        )}
                        {data!.damage_relations.no_damage_to.length > 0 && (
                            <Description
                                label="no damage"
                                value={<Types types={data!.damage_relations.no_damage_to} />}
                                noBorder
                            />
                        )}
                    </Card>
                    <Card title="Defense" titleBgColor={cardColor[name]}>
                        {data!.damage_relations.double_damage_from.length > 0 && (
                            <Description
                                label="2x damage"
                                value={<Types types={data!.damage_relations.double_damage_from} />}
                            />
                        )}
                        {data!.damage_relations.half_damage_from.length > 0 && (
                            <Description
                                label="0.5x damage"
                                value={<Types types={data!.damage_relations.half_damage_from} />}
                                noBorder={!data!.damage_relations.no_damage_from.length}
                            />
                        )}
                        {data!.damage_relations.no_damage_from.length > 0 && (
                            <Description
                                label="no damage"
                                value={<Types types={data!.damage_relations.no_damage_from} />}
                                noBorder
                            />
                        )}
                    </Card>
                </>
            }
            ListEmptyComponent={
                <Card title={getFormattedName(name) + ' Pokémon'} titleBgColor={cardColor[name]}>
                    <PressableNameList goTo="PokemonDetail" data={pokemonsWithThisType} />
                </Card>
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
    const navigation = useNavigation<NativeStackNavigationProp<NativeStackParamList, 'TypeDetail'>>();

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
                                backgroundColor: pressed ? 'rgb(130,183,255)' : typeColor[type.name],
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
        backgroundColor: app.darkColor,
    },
    typeContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    footer: {
        marginBottom: 10,
    },
});
