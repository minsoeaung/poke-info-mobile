import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image, Pressable, StyleSheet, View } from 'react-native';

import { app, cardColor } from '../constants/colors';
import useFetchData from '../hooks/useFetchData';
import { NativeStackParamList, PokemonForm } from '../types';
import getFormattedName from '../utils/getFormattedName';
import ErrorDisplay from './ErrorDisplay';
import MyText from './MyText';
import PokemonTypes from './PokemonTypes';

type Props = {
    name: string;
    inEvolution?: boolean;
};

export default function PokemonCard({ name, inEvolution }: Props) {
    const { isLoading, error, data } = useFetchData<PokemonForm>(`https://pokeapi.co/api/v2/pokemon-form/${name}/`);

    const navigation = useNavigation<NativeStackNavigationProp<NativeStackParamList>>();

    if (isLoading) {
        return (
            <View style={[styles.container, styles.containerInEvolution]}>
                <MyText>...</MyText>
            </View>
        );
    }

    if (error) {
        return <ErrorDisplay error={error} />;
    }

    if (data) {
        const bgColor = cardColor[data.types[0].type.name];

        const goToPokemonDetail = () => {
            navigation.push('PokemonDetail', { name, color: bgColor });
        };

        if (inEvolution) {
            return (
                <Pressable onPress={goToPokemonDetail} style={[styles.container, styles.containerInEvolution]}>
                    <View style={styles.imageContainerInEvolution}>
                        <Image style={styles.image} source={{ uri: data.sprites['front_default'] }} />
                    </View>
                </Pressable>
            );
        }

        return (
            <Pressable
                onPress={goToPokemonDetail}
                style={({ pressed }) => [
                    styles.container,
                    {
                        backgroundColor: pressed ? 'rgb(210, 230, 255)' : bgColor,
                    },
                ]}>
                <MyText style={styles.name}>{getFormattedName(data.name)}</MyText>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: data.sprites['front_default'] }} />
                </View>
                <PokemonTypes types={data.types} />
            </Pressable>
        );
    } else {
        return null;
    }
}

const styles = StyleSheet.create({
    container: {
        height: 160,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: 5,
        borderRadius: 10,
        elevation: 5,
        borderColor: app.darkColor,
        borderWidth: 0.5,
    },
    containerInEvolution: {
        height: 100,
        elevation: 0,
        borderWidth: 0,
        margin: 0,
    },
    imageContainer: {
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        width: '80%',
        height: '60%',
    },
    imageContainerInEvolution: {
        width: '100%',
        height: '100%',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    name: {
        letterSpacing: 1,
    },
});
