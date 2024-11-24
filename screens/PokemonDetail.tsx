import { Entypo, FontAwesome, FontAwesome5, FontAwesome6, MaterialIcons } from '@expo/vector-icons';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image } from 'expo-image';
import React, { useLayoutEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import Animated, { FadeOut } from 'react-native-reanimated';

import { CardBody, CardTitle } from '../components/Card';
import ErrorDisplay from '../components/ErrorDisplay';
import Evolutions from '../components/Evolutions';
import LabelAndValue from '../components/LabelAndValue';
import MyText from '../components/MyText';
import PikachuRunning from '../components/PikachuRunning';
import PokemonAbilities from '../components/PokemonAbilities';
import { PokemonMoves } from '../components/PokemonMoves';
import PokemonTypes from '../components/PokemonTypes';
import Stats from '../components/Stats';
import { cardColor, colors } from '../constants/colors';
import { useFetchPokemonDetail } from '../hooks/useFetchPokemonDetail';
import { MoveLearnMethod, StackParamList } from '../types';
import getFormattedName from '../utils/getFormattedName';

import hairlineWidth = StyleSheet.hairlineWidth;

const cardGap = 24;

export default function PokemonDetail() {
    const route = useRoute<RouteProp<StackParamList, 'PokemonDetail'>>();
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList, 'PokemonDetail'>>();
    const { name } = route.params;

    const [selectedMoveLearnMethod, setSelectedMoveLearnMethod] = useState<MoveLearnMethod>('levelUp');

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

    const handleMoveTabPress = (method: MoveLearnMethod) => () => {
        setSelectedMoveLearnMethod(method);
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer} stickyHeaderIndices={[2, 5, 8, 11, 14]}>
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
                {/*2*/}
                <CardTitle titleBgColor={color} title="Profile" />
                <CardBody>
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
                </CardBody>
                <View style={{ marginTop: cardGap }} />
                {/*5*/}
                <CardTitle titleBgColor={color} title="Breeding" />
                <CardBody>
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
                </CardBody>
                <View style={{ marginTop: cardGap }} />
                {/*8*/}
                <CardTitle titleBgColor={color} title="Training" />
                <CardBody>
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
                </CardBody>
                <View style={{ marginTop: cardGap }} />
                {/*11*/}
                <CardTitle titleBgColor={color} title="Evolutions" />
                <CardBody>
                    {evolutions.length > 0 ? (
                        <Evolutions evolutions={evolutions} />
                    ) : (
                        <MyText style={styles.nope}>
                            <MyText style={{ color: 'tomato' }}>{getFormattedName(name)}</MyText> does not evolve.
                        </MyText>
                    )}
                </CardBody>
                <View style={{ marginTop: cardGap }} />
                {/* sticky 14 */}
                <View style={styles.movesHeader}>
                    <CardTitle titleBgColor={color} title="Moves" />
                    <View style={{ backgroundColor: colors.card }}>
                        <View style={styles.movesTabContainer}>
                            <Pressable
                                style={
                                    selectedMoveLearnMethod === 'levelUp'
                                        ? styles.selectedMoveTabItem
                                        : styles.moveTabItem
                                }
                                onPress={handleMoveTabPress('levelUp')}
                            >
                                {({ pressed }) => (
                                    <MyText
                                        style={StyleSheet.flatten([
                                            styles.moveTabItemText,
                                            {
                                                color:
                                                    pressed || selectedMoveLearnMethod === 'levelUp'
                                                        ? 'tomato'
                                                        : 'black',
                                            },
                                        ])}
                                    >
                                        Natural
                                    </MyText>
                                )}
                            </Pressable>
                            <Pressable
                                style={
                                    selectedMoveLearnMethod === 'machine'
                                        ? styles.selectedMoveTabItem
                                        : styles.moveTabItem
                                }
                                onPress={handleMoveTabPress('machine')}
                            >
                                {({ pressed }) => (
                                    <MyText
                                        style={StyleSheet.flatten([
                                            styles.moveTabItemText,
                                            {
                                                color:
                                                    pressed || selectedMoveLearnMethod === 'machine'
                                                        ? 'tomato'
                                                        : 'black',
                                            },
                                        ])}
                                    >
                                        Machine
                                    </MyText>
                                )}
                            </Pressable>
                            <Pressable
                                style={
                                    selectedMoveLearnMethod === 'tutor'
                                        ? styles.selectedMoveTabItem
                                        : styles.moveTabItem
                                }
                                onPress={handleMoveTabPress('tutor')}
                            >
                                {({ pressed }) => (
                                    <MyText
                                        style={StyleSheet.flatten([
                                            styles.moveTabItemText,
                                            {
                                                color:
                                                    pressed || selectedMoveLearnMethod === 'tutor' ? 'tomato' : 'black',
                                            },
                                        ])}
                                    >
                                        Tutor
                                    </MyText>
                                )}
                            </Pressable>
                            <Pressable
                                style={
                                    selectedMoveLearnMethod === 'egg' ? styles.selectedMoveTabItem : styles.moveTabItem
                                }
                                onPress={handleMoveTabPress('egg')}
                            >
                                {({ pressed }) => (
                                    <MyText
                                        style={StyleSheet.flatten([
                                            styles.moveTabItemText,
                                            {
                                                color:
                                                    pressed || selectedMoveLearnMethod === 'egg' ? 'tomato' : 'black',
                                            },
                                        ])}
                                    >
                                        Egg
                                    </MyText>
                                )}
                            </Pressable>
                        </View>
                        <View
                            style={{
                                borderLeftWidth: hairlineWidth,
                                borderRightWidth: hairlineWidth,
                                borderColor: 'black',
                                marginHorizontal: moveCardSpace,
                                flexDirection: 'row',
                                paddingVertical: 10,
                            }}
                        >
                            {selectedMoveLearnMethod === 'levelUp' && (
                                <MyText style={{ flex: 1, textAlign: 'center', fontSize: 10 }}>Lvl</MyText>
                            )}
                            <MyText style={{ flex: 2, textAlign: 'center', fontSize: 10 }}>Name</MyText>
                            <MyText style={{ flex: 1, textAlign: 'center', fontSize: 10 }}>Power</MyText>
                            <MyText style={{ flex: 1, textAlign: 'center', fontSize: 10 }}>Acc.%</MyText>
                            <MyText style={{ flex: 1, textAlign: 'center', fontSize: 10 }}>PP</MyText>
                            <MyText style={{ flex: 1, textAlign: 'center', fontSize: 10 }}>&nbsp;</MyText>
                        </View>
                    </View>
                </View>
                <View style={{ backgroundColor: colors.card }}>
                    <View style={styles.moveListContainer}>
                        {/* @ts-ignore */}
                        <PokemonMoves
                            moves={data.moves[selectedMoveLearnMethod]}
                            learnMethod={selectedMoveLearnMethod}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const containerVerticalSize = 15;

const moveCardSpace = 10;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    contentContainer: {
        paddingHorizontal: 10,
        paddingVertical: containerVerticalSize,
        // gap: 16,
        display: 'flex',
        alignContent: 'center',
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
        // overflow: 'hidden',
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
        marginVertical: 22,
    },
    speciesName: {
        color: colors.text,
        fontSize: 24,
        lineHeight: 28,
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
    movesHeader: {
        flex: 1,
    },
    movesTabContainer: {
        backgroundColor: colors.card,
        flex: 1,
        flexDirection: 'row',

        marginHorizontal: moveCardSpace,
        marginTop: moveCardSpace,
    },
    selectedMoveTabItem: {
        flex: 1,
        borderWidth: hairlineWidth,
        borderColor: 'black',
        borderBottomWidth: 0,
        paddingVertical: 10,
    },
    moveTabItem: {
        flex: 1,
        borderBottomWidth: hairlineWidth,
        borderBottomColor: 'black',
        paddingVertical: 10,
    },
    moveTabItemText: {
        textAlign: 'center',
    },
    moveListContainer: {
        backgroundColor: colors.card,
        borderWidth: hairlineWidth,
        borderColor: 'black',
        borderBottomWidth: 0,
        borderTopWidth: 0,
        marginHorizontal: moveCardSpace,
        marginBottom: moveCardSpace,
    },
});
