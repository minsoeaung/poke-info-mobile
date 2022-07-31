import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ActivityIndicator, Image, Pressable, StyleSheet, View } from 'react-native';

import { appColor, cardColor } from '../constants/colors';
import useFetchData from '../hooks/useFetchData';
import { NativeStackParamList, PickedPokemonType, PokemonType } from '../types';
import ErrorDisplay from './ErrorDisplay';
import MyText from './MyText';
import PokemonTypes from './PokemonTypes';

export default function PokemonCard({ url }: { url: string }) {
    const { isLoading, error, data } = useFetchData<PokemonType>(url);

    const navigation = useNavigation<NativeStackNavigationProp<NativeStackParamList>>();

    const goToPokemonDetail = () => {
        if (!data) return;

        const payload: PickedPokemonType = {
            name: data.name,
            sprites: {
                other: {
                    'official-artwork': {
                        front_default: data.sprites.other['official-artwork']['front_default'],
                    },
                },
            },
            types: data.types,
            abilities: data.abilities,
            height: data.height,
            weight: data.weight,
            base_experience: data.base_experience,
            stats: data.stats,
        };

        navigation.navigate('PokemonDetail', {
            data: payload,
            name: 'polyfill',
        });
    };

    if (isLoading) {
        return (
            <View style={[styles.container, { elevation: 0 }]}>
                <ActivityIndicator color={appColor.border} />
            </View>
        );
    }

    if (error) {
        return <ErrorDisplay error={error} />;
    }

    return (
        <Pressable
            onPress={goToPokemonDetail}
            style={({ pressed }) => [
                styles.container,
                {
                    backgroundColor: pressed ? 'rgb(210, 230, 255)' : cardColor[data!.types[0].type.name],
                },
            ]}>
            <MyText style={styles.name}>{data!.name}</MyText>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: data!.sprites['front_default'] }} />
            </View>
            <PokemonTypes types={data!.types} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 160,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: 5,
        borderWidth: 0.5,
        borderColor: appColor.border,
        elevation: 5,
    },
    imageContainer: {
        borderRadius: 20,
        backgroundColor: '#fff',
        width: '80%',
        height: '60%',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    name: {
        letterSpacing: 1,
    },
});
