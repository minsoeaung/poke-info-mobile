import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useLayoutEffect } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, View } from 'react-native';

import Description from '../components/Description';
import ErrorDisplay from '../components/ErrorDisplay';
import LoadingText from '../components/LoadingText';
import MyText from '../components/MyText';
import PokemonAbilities from '../components/PokemonAbilities';
import PokemonTypes from '../components/PokemonTypes';
import { appColor } from '../constants/colors';
import useFetchData from '../hooks/useFetchData';
import { NativeStackParamList, PokemonType } from '../types';
import getFormattedName from '../utils/getFormattedName';
import getHeightInFeetAndInches from '../utils/getHeightInFeetAndInches';
import getWeightInLbs from '../utils/getWeightInLbs';

export default function PokemonDetail() {
    const route = useRoute<RouteProp<NativeStackParamList, 'PokemonDetail'>>();
    const { name } = route.params;
    const navigation = useNavigation<NativeStackNavigationProp<NativeStackParamList, 'PokemonDetail'>>();
    const { isLoading, error, data } = useFetchData<PokemonType>(`https://pokeapi.co/api/v2/pokemon/${name}`);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: getFormattedName(name),
        });
    }, []);

    return (
        <View style={styles.headerContainer}>
            {isLoading ? (
                <LoadingText />
            ) : error ? (
                <ErrorDisplay error={error} />
            ) : (
                data && (
                    <ScrollView>
                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.image}
                                source={{
                                    uri: data.sprites.other['official-artwork']['front_default'],
                                }}
                            />
                        </View>
                        <View style={styles.descriptionContainer}>
                            <Description label="type" value={<PokemonTypes types={data.types} isInScreen />} />
                            <Description label="abilities" value={<PokemonAbilities abilities={data.abilities} />} />
                            <Description
                                label="height"
                                value={<MyText>{getHeightInFeetAndInches(data.height)}</MyText>}
                            />
                            <Description label="weight" value={<MyText>{getWeightInLbs(data.weight)}</MyText>} />
                            <Description label="base-experience" value={<MyText>{data.base_experience}</MyText>} />
                            {data.stats.map(({ base_stat, stat }) => (
                                <Description
                                    key={stat.name}
                                    label={stat.name}
                                    value={<MyText>{base_stat}</MyText>}
                                    noBorder
                                />
                            ))}
                        </View>
                    </ScrollView>
                )
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: appColor.primary,
    },
    imageContainer: {
        width: Dimensions.get('window').width - 70,
        height: Dimensions.get('window').width - 70,
        backgroundColor: appColor.secondary,
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
        resizeMode: 'contain',
    },
    descriptionContainer: {
        borderWidth: 0.5,
        borderRadius: 10,
        backgroundColor: appColor.secondary,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});
