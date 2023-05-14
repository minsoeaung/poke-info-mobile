import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image } from 'expo-image';
import { memo } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import MyText from './MyText';
import { app } from '../constants/colors';
import { StackParamList } from '../types';
import getPokemonDetailByName from '../utils/getPokemonDetailByName';

type Props = {
    evolutions: string[];
};

const Evolutions = ({ evolutions }: Props) => {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList, 'PokemonDetail'>>();

    const goToPokemonDetailScreen = (name: string) => {
        if (name) {
            navigation.push('PokemonDetail', { name });
        }
    };

    return (
        <View style={styles.container}>
            {evolutions.map((evo, index) => {
                if (index % 2 !== 0) return;
                if (index >= evolutions.length - 2) return;

                const fromPokemon = getPokemonDetailByName(evo);
                const reason = evolutions[index + 1];
                const toPokemon = getPokemonDetailByName(evolutions[index + 2]);

                return (
                    <View key={fromPokemon.name}>
                        <View style={styles.row}>
                            <Pressable onPress={() => goToPokemonDetailScreen(fromPokemon.name)} style={styles.from}>
                                <Image
                                    style={styles.sprite}
                                    source={{
                                        uri: fromPokemon.profile.sprite || '',
                                    }}
                                    contentFit="contain"
                                    accessibilityLabel={`Front default of ${fromPokemon.name}`}
                                    recyclingKey={`front_default_${fromPokemon.name}`}
                                    transition={200}
                                />
                            </Pressable>
                            <View style={styles.arrow}>
                                <AntDesign name="arrowright" size={24} color={app.lightColor} />
                            </View>
                            <Pressable onPress={() => goToPokemonDetailScreen(toPokemon.name)} style={styles.to}>
                                <Image
                                    style={styles.sprite}
                                    source={{
                                        uri: toPokemon.profile.sprite || '',
                                    }}
                                    contentFit="contain"
                                    accessibilityLabel={`Front default of ${toPokemon.name}`}
                                    recyclingKey={`front_default_${toPokemon.name}`}
                                    transition={200}
                                />
                            </Pressable>
                        </View>
                        <View style={styles.row}>
                            <MyText style={styles.trigger}>
                                {`${fromPokemon.name} evolves into ${toPokemon.name} ${reason}.`}
                            </MyText>
                        </View>
                    </View>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    from: {
        flex: 2,
    },
    sprite: {
        aspectRatio: 1,
    },
    arrow: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    to: {
        flex: 2,
    },
    trigger: {
        color: app.lightColor,
        textTransform: 'capitalize',
    },
});

export default memo(Evolutions);
