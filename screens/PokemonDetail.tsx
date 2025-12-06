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
import { GradientBackground } from '../components/GradientBackground';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

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

const labelIconSize = 16;

export default function PokemonDetail() {
    const route = useRoute<RouteProp<StackParamList, 'PokemonDetail'>>();
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList, 'PokemonDetail'>>();
    const { name } = route.params;

    const [selectedMoveLearnMethod, setSelectedMoveLearnMethod] = useState<MoveLearnMethod>('levelUp');

    const { data, error, isLoading } = useFetchPokemonDetail(name);

    const bTabBarHeight = useBottomTabBarHeight();

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
            <GradientBackground />
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
                renderItem={({ item, index }) => {
                    const isLast = sectionData.length - 1 === index;
                    if (item.type === 'MainHeader') {
                        return (
                            <View style={{ marginTop: 5, flex: 1 }}>
                                <View style={styles.header}>
                                    <View style={styles.spriteContainer}>
                                        {profile?.sprite ? (
                                            <Image
                                                style={styles.sprite}
                                                source={{
                                                    uri: profile.sprite,
                                                }}
                                                contentFit="cover"
                                                accessibilityLabel={name}
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
                                    {profile.species && (
                                        <MyText style={styles.speciesName} fontWeight="medium">
                                            {profile.species}
                                        </MyText>
                                    )}
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
                                            <MyText style={styles.labelText}>
                                                <Entypo name="ruler" size={labelIconSize} color="tomato" />
                                                &nbsp;&nbsp;Height
                                            </MyText>
                                        }
                                        value={<MyText style={styles.valueText}>{profile.height}</MyText>}
                                    />
                                    <LabelAndValue
                                        label={
                                            <MyText style={styles.labelText}>
                                                <FontAwesome5
                                                    name="weight-hanging"
                                                    size={labelIconSize}
                                                    color="tomato"
                                                />
                                                &nbsp;&nbsp;Weight
                                            </MyText>
                                        }
                                        value={<MyText style={styles.valueText}>{profile.weight}</MyText>}
                                    />
                                    <LabelAndValue
                                        label={
                                            <MyText style={styles.labelText}>
                                                <FontAwesome6 name="dumbbell" size={labelIconSize} color="tomato" />
                                                &nbsp;&nbsp;Abilities
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
                                            <MyText style={styles.labelText}>
                                                <FontAwesome name="circle" color="tomato" size={labelIconSize} />
                                                &nbsp;&nbsp;Gender
                                            </MyText>
                                        }
                                        value={
                                            <MyText style={styles.valueText}>
                                                {profile.gender
                                                    ? `♂️ ${profile.gender.male} %, ♀️ ${profile.gender.female} %`
                                                    : 'Genderless'}
                                            </MyText>
                                        }
                                    />
                                    <LabelAndValue
                                        label={
                                            <MyText style={styles.labelText}>
                                                <FontAwesome6 name="egg" size={labelIconSize} color="tomato" />
                                                &nbsp;&nbsp;Egg Groups
                                            </MyText>
                                        }
                                        value={
                                            <MyText
                                                style={StyleSheet.flatten([
                                                    styles.valueText,
                                                    { textTransform: 'capitalize' },
                                                ])}
                                            >
                                                {getFormattedName(breeding.eggGroups.join(', '))}
                                            </MyText>
                                        }
                                    />
                                    <LabelAndValue
                                        label={
                                            <MyText style={styles.labelText}>
                                                <FontAwesome name="rotate-right" size={labelIconSize} color="tomato" />
                                                &nbsp;&nbsp;Egg cycles
                                            </MyText>
                                        }
                                        value={<MyText style={styles.valueText}>{breeding.eggCycles}</MyText>}
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
                                        value={<MyText style={styles.valueText}>{training.evYield}</MyText>}
                                    />
                                    <LabelAndValue
                                        label="Catch Rate"
                                        value={<MyText style={styles.valueText}>{training.catchRate}</MyText>}
                                    />
                                    <LabelAndValue
                                        label="Base Friendship"
                                        value={<MyText style={styles.valueText}>{training.baseHappiness}</MyText>}
                                    />
                                    <LabelAndValue
                                        label="Base Exp."
                                        value={<MyText style={styles.valueText}>{training.baseExp}</MyText>}
                                    />
                                    <LabelAndValue
                                        label="Growth Rate"
                                        value={<MyText style={styles.valueText}>{training.growthRate}</MyText>}
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
                                        <View style={styles.nope}>
                                            <MyText>
                                                <MyText style={{ color: 'tomato' }}>{getFormattedName(name)}</MyText>{' '}
                                                does not evolve.
                                            </MyText>
                                        </View>
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
                ListFooterComponent={
                    <View>
                        {data.moves[selectedMoveLearnMethod].length > 0 ? (
                            <View
                                style={{
                                    height: 10,
                                    backgroundColor: colors.card,
                                    borderBottomLeftRadius: 10,
                                    borderBottomRightRadius: 10,
                                }}
                            />
                        ) : (
                            <View
                                style={{
                                    backgroundColor: colors.card,
                                    borderBottomLeftRadius: 10,
                                    borderBottomRightRadius: 10,
                                }}
                            >
                                <View style={styles.moveEmptyTextContainer}>
                                    <MyText style={{ textAlign: 'center', color: 'white' }}>None!</MyText>
                                </View>
                            </View>
                        )}
                        <View
                            style={{
                                height: bTabBarHeight + 10,
                            }}
                        />
                    </View>
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
                                        color: pressed || localSelected === 'levelUp' ? 'tomato' : 'white',
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
                                        color: pressed || localSelected === 'machine' ? 'tomato' : 'white',
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
                                        color: pressed || localSelected === 'tutor' ? 'tomato' : 'white',
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
                                        color: pressed || localSelected === 'egg' ? 'tomato' : 'white',
                                    },
                                ])}
                            >
                                Egg
                            </MyText>
                        )}
                    </Pressable>
                </View>
                <View style={styles.moveListTableHeader}>
                    {selected === 'levelUp' && (
                        <MyText style={StyleSheet.flatten([styles.moveListTableHeaderText, { flex: 1 }])}>Lvl</MyText>
                    )}
                    <MyText style={StyleSheet.flatten([styles.moveListTableHeaderText, { flex: 2 }])}>Name</MyText>
                    <MyText style={StyleSheet.flatten([styles.moveListTableHeaderText, { flex: 1 }])}>Power</MyText>
                    <MyText style={StyleSheet.flatten([styles.moveListTableHeaderText, { flex: 1 }])}>Acc.%</MyText>
                    <MyText style={StyleSheet.flatten([styles.moveListTableHeaderText, { flex: 1 }])}>PP</MyText>
                    <MyText style={StyleSheet.flatten([styles.moveListTableHeaderText, { flex: 1 }])}>&nbsp;</MyText>
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
    },
    sprite: {
        width: '100%',
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
        fontSize: 16,
    },
    nope: {
        padding: 10,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    movesHeader: {
        flex: 1,
    },
    movesTabContainer: {
        backgroundColor: colors.background,
        flex: 1,
        flexDirection: 'row',

        marginHorizontal: moveCardSpace,
        paddingTop: moveCardSpace,
    },
    selectedMoveTabItem: {
        flex: 1,
        borderWidth: hairlineWidth,
        borderColor: 'white',
        borderBottomWidth: 0,
        paddingVertical: 10,
    },
    moveTabItem: {
        flex: 1,
        borderBottomWidth: hairlineWidth,
        borderBottomColor: 'white',
        paddingVertical: 10,
    },
    moveTabItemText: {
        fontSize: 16,
        textAlign: 'center',
    },
    moveListTableHeader: {
        borderLeftWidth: hairlineWidth,
        borderRightWidth: hairlineWidth,
        borderColor: 'white',
        marginHorizontal: moveCardSpace,
        flexDirection: 'row',
        paddingVertical: 10,
        backgroundColor: colors.background,
    },
    moveListTableHeaderText: {
        textAlign: 'center',
        fontSize: 12,
        color: 'white',
    },
    moveEmptyTextContainer: {
        marginHorizontal: 10,
        borderWidth: hairlineWidth,
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
        borderColor: 'white',
        borderTopWidth: 0,
        marginBottom: 10,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    labelText: {
        color: colors.cardText,
        fontSize: 16,
    },
    valueText: {
        color: colors.cardText,
        fontSize: 16,
    },
});
