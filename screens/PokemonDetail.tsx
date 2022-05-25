import { useNavigation } from '@react-navigation/native';
import {
    NativeStackNavigationProp,
    NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { PokeAPI } from 'pokeapi-types';
import { useEffect } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, View } from 'react-native';

import Abilities from '../components/Abilities';
import Description from '../components/Description';
import ErrorDisplay from '../components/ErrorDisplay';
import LoadingText from '../components/LoadingText';
import MyText from '../components/MyText';
import Types from '../components/Types';
import { appColor, cardColor } from '../constants/colors';
import useFetchData from '../hooks/useFetchData';
import { NativeStackParamList } from '../types';
import getFormattedName from '../utils/getFormattedName';
import getHeightInFeetAndInches from '../utils/getHeightInFeetAndInches';
import getWeightInLbs from '../utils/getWeightInLbs';

type Props = NativeStackScreenProps<NativeStackParamList, 'PokemonDetail'>;

export default function PokemonDetail({ route }: Props) {
    const { data, name, url } = route.params;
    const navigation =
        useNavigation<NativeStackNavigationProp<NativeStackParamList>>();

    useEffect(() => {
        navigation.setOptions({
            title: data ? getFormattedName(data.name) : getFormattedName(name),
        });
    }, []);

    if (data) {
        return <PokemonDetails data={data} />;
    } else {
        return <PokemonWithFetching url={url} />;
    }
}

function PokemonWithFetching({ url }: { url: string }) {
    const { isLoading, error, data } = useFetchData<PokeAPI.Pokemon>(url);

    if (isLoading) {
        return <LoadingText />;
    }
    if (error) {
        return <ErrorDisplay error={error} />;
    }

    return <PokemonDetails data={data} />;
}

function PokemonDetails({ data }: { data: PokeAPI.Pokemon | null }) {
    if (!data) {
        return null;
    }

    return (
        <View
            style={[
                styles.container,
                { backgroundColor: cardColor[data.types[0].type.name] },
            ]}>
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: data.sprites.other['official-artwork'][
                                'front_default'
                            ],
                        }}
                    />
                </View>
                <View style={styles.descriptionContainer}>
                    <Description
                        label="type"
                        value={<Types types={data.types} isBig />}
                    />
                    <Description
                        label="abilities"
                        value={<Abilities abilities={data.abilities} />}
                    />
                    <Description
                        label="height"
                        value={
                            <MyText>
                                {getHeightInFeetAndInches(data.height)}
                            </MyText>
                        }
                    />
                    <Description
                        label="weight"
                        value={<MyText>{getWeightInLbs(data.weight)}</MyText>}
                    />
                    <Description
                        label="base-experience"
                        value={<MyText>{data.base_experience}</MyText>}
                    />
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    imageContainer: {
        width: Dimensions.get('window').width - 70,
        height: Dimensions.get('window').width - 70,
        backgroundColor: appColor.headerBg,
        borderRadius:
            Math.round(
                Dimensions.get('window').width + Dimensions.get('window').width,
            ) / 2,
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
        backgroundColor: appColor.headerBg,
        marginBottom: 10,
    },
});
