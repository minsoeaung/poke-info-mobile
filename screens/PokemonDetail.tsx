import { Entypo, FontAwesome, FontAwesome5, FontAwesome6, MaterialIcons } from '@expo/vector-icons';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image } from 'expo-image';
import React, { useLayoutEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Animated, { FadeOut } from 'react-native-reanimated';

import Card from '../components/Card';
import ErrorDisplay from '../components/ErrorDisplay';
import Evolutions from '../components/Evolutions';
import LabelAndValue from '../components/LabelAndValue';
import MyText from '../components/MyText';
import PikachuRunning from '../components/PikachuRunning';
import PokemonAbilities from '../components/PokemonAbilities';
import PokemonTypes from '../components/PokemonTypes';
import Stats from '../components/Stats';
import { cardColor, colors } from '../constants/colors';
import { useFetchPokemonDetail } from '../hooks/useFetchPokemonDetail';
import { StackParamList } from '../types';
import getFormattedName from '../utils/getFormattedName';

import hairlineWidth = StyleSheet.hairlineWidth;

export default function PokemonDetail() {
    const route = useRoute<RouteProp<StackParamList, 'PokemonDetail'>>();
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList, 'PokemonDetail'>>();
    const { name } = route.params;

    const { data, error, isLoading } = useFetchPokemonDetail(name);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: getFormattedName(name),
        });
    }, []);

    if (isLoading) {
        return (
            <Animated.View style={StyleSheet.absoluteFill} exiting={FadeOut}>
                <PikachuRunning />
            </Animated.View>
        );
    }

    if (error) {
        return <ErrorDisplay error={error} />;
    }

    if (data === null) {
        return <ErrorDisplay error="Something went wrong!" />;
    }

    const { profile, evolutions, id, breeding, training, stats } = data;
    const color = profile ? cardColor[profile.types[0]] : '';

    return (
        <ScrollView>
            <View style={StyleSheet.flatten([styles.container])}>
                <View style={styles.header}>
                    <View
                        style={StyleSheet.flatten([
                            styles.spriteContainer,
                            {
                                backgroundColor: colors.card,
                            },
                        ])}
                    >
                        {profile?.sprite ? (
                            <Image
                                style={styles.sprite}
                                source={{
                                    uri: profile.sprite,
                                }}
                                contentFit="cover"
                                accessibilityLabel={`Official artwork of ${name}`}
                                recyclingKey={`official_artwork_${name}`}
                                transition={200}
                            />
                        ) : (
                            <MaterialIcons name="image-not-supported" size={24} color="grey" />
                        )}
                    </View>
                    <View style={styles.typesAndStatsContainer}>
                        <PokemonTypes types={profile.types} />
                        <Stats stats={stats} barColor={color} />
                    </View>
                </View>
                <View style={styles.intro}>
                    {profile.species && <MyText style={styles.speciesName}>{profile.species}</MyText>}
                    {!!profile.flavorTextEntry.diamond && (
                        <MyText style={styles.flavorTextEntry}>{profile.flavorTextEntry.diamond}</MyText>
                    )}
                </View>
                <Card title="Profile" titleBgColor={color}>
                    <LabelAndValue
                        label={
                            <MyText style={{ color: colors.cardText }}>
                                <Entypo name="ruler" color="tomato" /> Height
                            </MyText>
                        }
                        value={<MyText style={{ color: colors.cardText }}>{profile.height}</MyText>}
                    />
                    <LabelAndValue
                        label={
                            <MyText style={{ color: colors.cardText }}>
                                <FontAwesome5 name="weight-hanging" color="tomato" /> Weight
                            </MyText>
                        }
                        value={<MyText style={{ color: colors.cardText }}>{profile.weight}</MyText>}
                    />
                    <LabelAndValue
                        label={
                            <MyText style={{ color: colors.cardText }}>
                                <FontAwesome6 name="dumbbell" color="tomato" /> Abilities
                            </MyText>
                        }
                        value={<PokemonAbilities abilities={profile.abilities} />}
                    />
                </Card>
                <Card title="Breeding" titleBgColor={color}>
                    <LabelAndValue
                        label={
                            <MyText style={{ color: colors.cardText }}>
                                <FontAwesome name="circle" color="tomato" /> Gender
                            </MyText>
                        }
                        value={
                            <MyText style={{ color: colors.cardText }}>
                                {profile.gender
                                    ? `♂️ ${profile.gender.male} %, ♀️ ${profile.gender.female} %`
                                    : 'Genderless'}
                            </MyText>
                        }
                    />
                    <LabelAndValue
                        label={
                            <MyText style={{ color: colors.cardText }}>
                                <FontAwesome6 name="egg" color="tomato" /> Egg Groups
                            </MyText>
                        }
                        value={
                            <MyText
                                style={{
                                    textTransform: 'capitalize',
                                    color: colors.cardText,
                                }}
                            >
                                {getFormattedName(breeding.eggGroups.join(', '))}
                            </MyText>
                        }
                    />
                    <LabelAndValue
                        label={
                            <MyText style={{ color: colors.cardText }}>
                                <FontAwesome name="rotate-right" color="tomato" /> Egg cycles
                            </MyText>
                        }
                        value={<MyText style={{ color: colors.cardText }}>{breeding.eggCycles}</MyText>}
                    />
                </Card>
                <Card title="Training" titleBgColor={color}>
                    <LabelAndValue
                        label="EV Yield"
                        value={<MyText style={{ color: colors.cardText }}>{training.evYield}</MyText>}
                    />
                    <LabelAndValue
                        label="Catch Rate"
                        value={<MyText style={{ color: colors.cardText }}>{training.catchRate}</MyText>}
                    />
                    <LabelAndValue
                        label="Base Friendship"
                        value={<MyText style={{ color: colors.cardText }}>{training.baseHappiness}</MyText>}
                    />
                    <LabelAndValue
                        label="Base Exp."
                        value={<MyText style={{ color: colors.cardText }}>{training.baseExp}</MyText>}
                    />
                    <LabelAndValue
                        label="Growth Rate"
                        value={<MyText style={{ color: colors.cardText }}>{training.growthRate}</MyText>}
                    />
                </Card>
                <Card title="Evolutions" titleBgColor={color}>
                    {evolutions.length > 0 ? (
                        <Evolutions evolutions={evolutions} />
                    ) : (
                        <MyText style={styles.nope}>
                            <MyText style={{ color: 'tomato' }}>{getFormattedName(name)}</MyText> does not evolve.
                        </MyText>
                    )}
                </Card>
            </View>
        </ScrollView>
    );
}

const containerVerticalSize = 15;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: containerVerticalSize,
        display: 'flex',
        flexDirection: 'column',
        gap: 15,
        backgroundColor: colors.background,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        gap: 15,
    },
    spriteContainer: {
        flex: 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        overflow: 'hidden',
        borderWidth: hairlineWidth,
        borderColor: 'black',
    },
    sprite: {
        width: '118%',
        aspectRatio: 1,
    },
    bad: {
        fontSize: 20,
    },
    typesAndStatsContainer: {
        flex: 5,
        display: 'flex',
        flexDirection: 'column',
        gap: containerVerticalSize,
    },
    intro: {
        marginVertical: 10,
    },
    speciesName: {
        color: colors.text,
        fontSize: 24,
        letterSpacing: 1,
    },
    flavorTextEntry: {
        color: colors.text,
        marginTop: 15,
    },
    nope: {
        color: colors.cardText,
        textAlign: 'center',
        paddingVertical: 10,
    },
});
