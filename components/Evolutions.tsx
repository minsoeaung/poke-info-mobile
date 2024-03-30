import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image } from 'expo-image';
import { memo } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import MyText from './MyText';
import { app } from '../constants/colors';
import { useFetchPokemonDetail } from '../hooks/useFetchPokemonDetail';
import { StackParamList } from '../types';
import getFormattedName from '../utils/getFormattedName';

type Props = {
    evolutions: string[];
};

const Evolutions = ({ evolutions }: Props) => {
    return (
        <View style={styles.container}>
            {evolutions.map((evo, index) => {
                if (index % 2 !== 0) return;
                if (index >= evolutions.length - 2) return;

                return (
                    <Evolution
                        key={index}
                        fromName={evo}
                        reason={evolutions[index + 1]}
                        toName={evolutions[index + 2]}
                    />
                );
            })}
        </View>
    );
};

const Evolution = ({ fromName, reason, toName }: { fromName: string; reason: string; toName: string }) => {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList, 'PokemonDetail'>>();

    const { data: fromPokemon } = useFetchPokemonDetail(fromName);
    const { data: toPokemon, isLoading, error } = useFetchPokemonDetail(toName);

    const goToPokemonDetailScreen = (name: string) => {
        if (name) {
            navigation.push('PokemonDetail', { name });
        }
    };

    return (
        <View>
            <View style={styles.row}>
                {fromPokemon ? (
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
                ) : (
                    <MyText
                        style={{
                            flex: 2,
                            aspectRatio: 1,
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            fontSize: 10,
                            color: 'grey',
                        }}
                    >
                        Loading...
                    </MyText>
                )}
                <View style={styles.arrow}>
                    <AntDesign name="arrowright" size={24} color={app.lightColor} />
                </View>
                {toPokemon ? (
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
                ) : (
                    <MyText
                        style={{
                            flex: 2,
                            aspectRatio: 1,
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            fontSize: 10,
                            color: 'grey',
                        }}
                    >
                        {isLoading ? 'Loading...' : error}
                    </MyText>
                )}
            </View>
            <View style={styles.row}>
                {fromPokemon && toPokemon ? (
                    <MyText style={styles.trigger}>
                        {`${getFormattedName(fromPokemon.name)} evolves into ${getFormattedName(
                            toPokemon.name,
                        )} ${reason}.`}
                    </MyText>
                ) : (
                    <MyText>
                        {'\n'}
                    </MyText>
                )}
            </View>
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
