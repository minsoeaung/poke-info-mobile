import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image } from 'expo-image';
import { PokeAPI } from 'pokeapi-types';
import { useLayoutEffect, useMemo } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

import Card from '../components/Card';
import Description from '../components/Description';
import ErrorDisplay from '../components/ErrorDisplay';
import Evolutions from '../components/Evolutions';
import MyText from '../components/MyText';
import PikachuRunning from '../components/PikachuRunning';
import PokemonAbilities from '../components/PokemonAbilities';
import PokemonTypes from '../components/PokemonTypes';
import { app, cardColor } from '../constants/colors';
import useFetchData from '../hooks/useFetchData';
import { NativeStackParamList, PokemonType } from '../types';
import getFormattedName from '../utils/getFormattedName';
import getHeightString from '../utils/getHeightString';
import getWeightString from '../utils/getWeightString';

export default function PokemonDetail() {
    const route = useRoute<RouteProp<NativeStackParamList, 'PokemonDetail'>>();
    const { name, url, types } = route.params;
    const color = cardColor[types[0]];
    const navigation = useNavigation<NativeStackNavigationProp<NativeStackParamList, 'PokemonDetail'>>();
    const { isLoading, error, data } = useFetchData<PokemonType>(url);
    const { isLoading: speciesLoading, data: species } = useFetchData<PokeAPI.PokemonSpecies>(
        data ? data.species.url : null,
    );

    const flavorTextEntry = useMemo(() => {
        if (!species) return '';
        const str = species.flavor_text_entries.find(
            entry => entry.version.name === 'diamond' && entry.language.name === 'en',
        )?.flavor_text;
        return str?.replace(/(\r\n|\r|\n)/g, ' ') || '';
    }, [species]);

    const eggGroups = useMemo(() => {
        if (!species) return [];
        return species.egg_groups.map(gp => gp.name);
    }, [species]);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: getFormattedName(name),
            headerStyle: {
                backgroundColor: color,
            },
        });
    }, []);

    return (
        <View style={styles.container}>
            {isLoading ? (
                <PikachuRunning />
            ) : error ? (
                <ErrorDisplay error={error} />
            ) : (
                data && (
                    <Animated.ScrollView entering={FadeIn}>
                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.image}
                                source={{
                                    uri: data.sprites.other['official-artwork']['front_default'],
                                }}
                                contentFit="contain"
                                accessibilityLabel={`Official artwork of ${name}`}
                                recyclingKey={`official_artwork_${name}`}
                                transition={200}
                            />
                        </View>
                        <Card>
                            {speciesLoading ? (
                                <MyText>...</MyText>
                            ) : (
                                flavorTextEntry && <MyText>{flavorTextEntry}</MyText>
                            )}
                        </Card>
                        <Card title="Profile" titleBgColor={color}>
                            <Description label="Type" value={<PokemonTypes types={data.types} isInScreen />} />
                            <Description label="Abilities" value={<PokemonAbilities abilities={data.abilities} />} />
                            <Description
                                label="Egg groups"
                                value={
                                    <View style={styles.eggGroups}>
                                        {eggGroups.map(name => (
                                            <MyText key={name} style={styles.eggGroup}>
                                                {getFormattedName(name)}
                                            </MyText>
                                        ))}
                                    </View>
                                }
                            />
                            <Description label="Height" value={<MyText>{getHeightString(data.height)}</MyText>} />
                            <Description
                                label="Weight"
                                value={<MyText>{getWeightString(data.weight)}</MyText>}
                                noBorder
                            />
                        </Card>
                        <Card title="Stats" titleBgColor={color}>
                            <Description label="Base experience" value={<MyText>{data.base_experience}</MyText>} />
                            {data.stats.map(({ base_stat, stat }, index) => (
                                <Description
                                    key={stat.name}
                                    label={getFormattedName(stat.name)}
                                    value={<MyText>{base_stat}</MyText>}
                                    noBorder={index === data?.stats.length - 1}
                                />
                            ))}
                        </Card>
                        {species && (
                            <Card title="Evolutions" titleBgColor={color}>
                                <Evolutions url={species.evolution_chain.url} />
                            </Card>
                        )}
                    </Animated.ScrollView>
                )
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: app.darkColor,
    },
    imageContainer: {
        width: Dimensions.get('window').width - 70,
        height: Dimensions.get('window').width - 70,
        backgroundColor: app.lightColor,
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').width) / 2,
        elevation: 5,
        flex: 1,
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    image: {
        width: Dimensions.get('window').width - 1,
        height: Dimensions.get('window').width - 1,
        flex: 1,
        alignSelf: 'center',
    },
    descriptionContainer: {
        borderWidth: 0.5,
        borderRadius: 10,
        backgroundColor: app.lightColor,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    eggGroups: {
        flexDirection: 'row',
    },
    eggGroup: {
        marginRight: 10,
    },
});
