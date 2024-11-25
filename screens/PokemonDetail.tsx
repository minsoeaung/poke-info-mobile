import { Entypo, FontAwesome, FontAwesome5, FontAwesome6, MaterialIcons } from '@expo/vector-icons';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FlashList } from '@shopify/flash-list';
import { Image } from 'expo-image';
import React, { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Animated, { FadeOut } from 'react-native-reanimated';

import { CardBody, CardTitle } from '../components/Card';
import ErrorDisplay from '../components/ErrorDisplay';
import Evolutions from '../components/Evolutions';
import LabelAndValue from '../components/LabelAndValue';
import MyText from '../components/MyText';
import PikachuRunning from '../components/PikachuRunning';
import PokemonAbilities from '../components/PokemonAbilities';
import { Move } from '../components/PokemonMoves';
import PokemonTypes from '../components/PokemonTypes';
import Stats from '../components/Stats';
import { cardColor, colors } from '../constants/colors';
import { useFetchPokemonDetail } from '../hooks/useFetchPokemonDetail';
import { MoveLearnMethod, StackParamList } from '../types';
import getFormattedName from '../utils/getFormattedName';

import hairlineWidth = StyleSheet.hairlineWidth;

type SectionItem =
    | {
          type: 'MainHeader';
      }
    | {
          type: 'MovesHeader';
          selectedLearnMethod: MoveLearnMethod;
          title: string;
      }
    | {
          type: 'Header';
          title: string;
      }
    | {
          type: 'ProfileItem' | 'BreedingItem' | 'TrainingItem' | 'EvolutionsItem';
      }
    | {
          type: 'MoveItem_LevelUp';
          name: string;
          level: number | null;
      }
    | {
          type: 'MoveItem';
          name: string;
      };

const cardGap = 24;

export default function PokemonDetail() {
    const route = useRoute<RouteProp<StackParamList, 'PokemonDetail'>>();
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList, 'PokemonDetail'>>();
    const { name } = route.params;

    const [selectedMoveLearnMethod, setSelectedMoveLearnMethod] = useState<MoveLearnMethod>('levelUp');

    const { data, error, isLoading } = useFetchPokemonDetail(name);

    const sectionData = useMemo(() => {
        if (!data) return [];

        const flashListData: SectionItem[] = [
            { type: 'MainHeader' },
            { type: 'Header', title: 'Profile' },
            { type: 'ProfileItem' },
            { type: 'Header', title: 'Breeding' },
            { type: 'BreedingItem' },
            { type: 'Header', title: 'Training' },
            { type: 'TrainingItem' },
            { type: 'Header', title: 'Evolutions' },
            { type: 'EvolutionsItem' },
            { type: 'MovesHeader', title: 'Moves', selectedLearnMethod: selectedMoveLearnMethod },
        ];

        if (selectedMoveLearnMethod === 'levelUp') {
            const moves = data.moves.levelUp.map(
                x =>
                    ({
                        type: 'MoveItem_LevelUp',
                        name: x[0],
                        level: x[1],
                    } as const),
            );
            flashListData.push(...moves);
        } else {
            const moves = data.moves[selectedMoveLearnMethod].map(
                x =>
                    ({
                        type: 'MoveItem',
                        name: x,
                    } as const),
            );
            flashListData.push(...moves);
        }

        return flashListData;
    }, [data, selectedMoveLearnMethod]);

    useEffect(() => {
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

    const { profile, evolutions, breeding, training, stats } = data;
    const color = profile ? cardColor[profile.types[0]] : '';

    return (
        <View style={styles.container}>
            <FlashList
                showsVerticalScrollIndicator={false}
                data={sectionData}
                // Cannot have this keyExtractor
                // keyExtractor={item => {
                //     if (item.type === 'MoveItem_LevelUp' || item.type === 'MoveItem') {
                //         return item.name;
                //     } else if (item.type === 'Header') {
                //         return item.title;
                //     } else if (item.type === 'MovesHeader') {
                //         return item.type + item.selectedLearnMethod;
                //     }
                //
                //     return item.type;
                // }}
                renderItem={({ item }) => {
                    if (item.type === 'MainHeader') {
                        return (
                            <View style={{ marginTop: 5, flex: 1 }}>
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
                                        <MyText style={styles.flavorTextEntry}>
                                            {profile.flavorTextEntry.diamond}
                                        </MyText>
                                    )}
                                </View>
                            </View>
                        );
                    } else if (item.type === 'Header') {
                        return <CardTitle title={item.title} titleBgColor={color} />;
                    } else if (item.type === 'ProfileItem') {
                        return (
                            <View style={{ marginBottom: cardGap }}>
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
                            </View>
                        );
                    } else if (item.type === 'BreedingItem') {
                        return (
                            <View style={{ marginBottom: cardGap }}>
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
                            </View>
                        );
                    } else if (item.type === 'TrainingItem') {
                        return (
                            <View style={{ marginBottom: cardGap }}>
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
                                        value={
                                            <MyText style={{ color: colors.cardText }}>{training.baseHappiness}</MyText>
                                        }
                                    />
                                    <LabelAndValue
                                        label="Base Exp."
                                        value={<MyText style={{ color: colors.cardText }}>{training.baseExp}</MyText>}
                                    />
                                    <LabelAndValue
                                        label="Growth Rate"
                                        value={
                                            <MyText style={{ color: colors.cardText }}>{training.growthRate}</MyText>
                                        }
                                    />
                                </CardBody>
                            </View>
                        );
                    } else if (item.type === 'EvolutionsItem') {
                        return (
                            <View style={{ marginBottom: cardGap }}>
                                <CardBody>
                                    {evolutions.length > 0 ? (
                                        <Evolutions evolutions={evolutions} />
                                    ) : (
                                        <MyText style={styles.nope}>
                                            <MyText style={{ color: 'tomato' }}>{getFormattedName(name)}</MyText> does
                                            not evolve.
                                        </MyText>
                                    )}
                                </CardBody>
                            </View>
                        );
                    } else if (item.type === 'MovesHeader') {
                        return (
                            <MovesHeader
                                selected={selectedMoveLearnMethod}
                                setSelected={setSelectedMoveLearnMethod}
                                titleBgColor={color}
                            />
                        );
                    } else if (item.type === 'MoveItem_LevelUp') {
                        return (
                            <View
                                style={{
                                    backgroundColor: colors.card,
                                    borderRightWidth: hairlineWidth,
                                    borderColor: 'black',
                                }}
                            >
                                <Move item={[item.name, item.level]} learnMethod="levelUp" />
                            </View>
                        );
                    } else if (item.type === 'MoveItem') {
                        return (
                            <View style={{ backgroundColor: colors.card }}>
                                <Move item={item.name} learnMethod="other" />
                            </View>
                        );
                    }

                    return null;
                }}
                stickyHeaderIndices={[1, 3, 5, 7, 9]}
                getItemType={item => item.type}
                estimatedItemSize={60}
                ListFooterComponent={
                    data.moves[selectedMoveLearnMethod].length > 0 ? (
                        <View style={{ height: 10, backgroundColor: colors.card }} />
                    ) : (
                        <View style={{ backgroundColor: colors.card }}>
                            <View
                                style={{
                                    marginHorizontal: 10,
                                    borderWidth: hairlineWidth,
                                    borderColor: 'black',
                                    borderTopWidth: 0,
                                    marginBottom: 10,
                                    height: 200,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <MyText style={{ textAlign: 'center' }}>None!</MyText>
                            </View>
                        </View>
                    )
                }
            />
        </View>
    );
}

const MovesHeader = ({
    selected,
    setSelected,
    titleBgColor,
}: {
    selected: MoveLearnMethod;
    setSelected: Dispatch<SetStateAction<MoveLearnMethod>>;
    titleBgColor: string;
}) => {
    const [localSelected, setLocalSelected] = React.useState<MoveLearnMethod>(selected);

    useEffect(() => {
        // The selected learn method will not update if this header is at the top.
        // To solve this, this useEffect is used temporarily.
        // https://github.com/Shopify/flash-list/issues/814
        setLocalSelected(selected);
    }, [selected]);

    return (
        <View style={styles.movesHeader}>
            <CardTitle titleBgColor={titleBgColor} title="Moves" />
            <View style={{ backgroundColor: colors.card }}>
                <View style={styles.movesTabContainer}>
                    <Pressable
                        style={localSelected === 'levelUp' ? styles.selectedMoveTabItem : styles.moveTabItem}
                        onPress={() => {
                            setSelected('levelUp');
                            setLocalSelected('levelUp');
                        }}
                    >
                        {({ pressed }) => (
                            <MyText
                                style={StyleSheet.flatten([
                                    styles.moveTabItemText,
                                    {
                                        color: pressed || localSelected === 'levelUp' ? 'tomato' : 'black',
                                    },
                                ])}
                            >
                                Natural
                            </MyText>
                        )}
                    </Pressable>
                    <Pressable
                        style={localSelected === 'machine' ? styles.selectedMoveTabItem : styles.moveTabItem}
                        onPress={() => {
                            setSelected('machine');
                            setLocalSelected('machine');
                        }}
                    >
                        {({ pressed }) => (
                            <MyText
                                style={StyleSheet.flatten([
                                    styles.moveTabItemText,
                                    {
                                        color: pressed || localSelected === 'machine' ? 'tomato' : 'black',
                                    },
                                ])}
                            >
                                Machine
                            </MyText>
                        )}
                    </Pressable>
                    <Pressable
                        style={localSelected === 'tutor' ? styles.selectedMoveTabItem : styles.moveTabItem}
                        onPress={() => {
                            setSelected('tutor');
                            setLocalSelected('tutor');
                        }}
                    >
                        {({ pressed }) => (
                            <MyText
                                style={StyleSheet.flatten([
                                    styles.moveTabItemText,
                                    {
                                        color: pressed || localSelected === 'tutor' ? 'tomato' : 'black',
                                    },
                                ])}
                            >
                                Tutor
                            </MyText>
                        )}
                    </Pressable>
                    <Pressable
                        style={localSelected === 'egg' ? styles.selectedMoveTabItem : styles.moveTabItem}
                        onPress={() => {
                            setSelected('egg');
                            setLocalSelected('egg');
                        }}
                    >
                        {({ pressed }) => (
                            <MyText
                                style={StyleSheet.flatten([
                                    styles.moveTabItemText,
                                    {
                                        color: pressed || localSelected === 'egg' ? 'tomato' : 'black',
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
                    {selected === 'levelUp' && (
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
    );
};

const containerVerticalSize = 15;

const moveCardSpace = 10;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: 10,
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
        fontSize: 32,
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
        width: '120%',
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
