import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image } from 'expo-image';
import { useLayoutEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import Card from '../components/Card';
import Evolutions from '../components/Evolutions';
import LabelAndValue from '../components/LabelAndValue';
import MyText from '../components/MyText';
import PokemonAbilities from '../components/PokemonAbilities';
import PokemonTypes from '../components/PokemonTypes';
import Stats from '../components/Stats';
import { app, cardColor } from '../constants/colors';
import { StackParamList } from '../types';
import getPokemonDetailByName from '../utils/getPokemonDetailByName';

export default function PokemonDetail() {
    const route = useRoute<RouteProp<StackParamList, 'PokemonDetail'>>();
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList, 'PokemonDetail'>>();
    const { name } = route.params;

    const { profile, evolutions, id, breeding, training, stats } = getPokemonDetailByName(name);
    const color = cardColor[profile.types[0]];

    useLayoutEffect(() => {
        navigation.setOptions({
            title: name,
        });
    }, []);

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.spriteContainer}>
                        <Image
                            style={styles.sprite}
                            source={{
                                // uri: profile.sprite || '',
                                uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
                            }}
                            contentFit="cover"
                            accessibilityLabel={`Official artwork of ${name}`}
                            recyclingKey={`official_artwork_${name}`}
                            transition={200}
                        />
                    </View>
                    <View style={styles.typesAndStatsContainer}>
                        <PokemonTypes types={profile.types} />
                        <Stats stats={stats} barColor={color} />
                    </View>
                </View>
                <View style={[styles.intro]}>
                    <MyText style={styles.speciesName}>{profile.species}</MyText>
                    {!!profile.flavorTextEntry.diamond && (
                        <MyText style={styles.flavorTextEntry}>{profile.flavorTextEntry.diamond}</MyText>
                    )}
                </View>
                <Card title="Profile" titleBgColor={color}>
                    <LabelAndValue
                        label="HEIGHT"
                        value={<MyText style={{ color: app.lightColor }}>{profile.height}</MyText>}
                    />
                    <LabelAndValue
                        label="WEIGHT"
                        value={<MyText style={{ color: app.lightColor }}>{profile.weight}</MyText>}
                    />
                    <LabelAndValue label="ABILITIES" value={<PokemonAbilities abilities={profile.abilities} />} />
                </Card>
                <Card title="Breeding" titleBgColor={color}>
                    <LabelAndValue
                        label="GENDER"
                        value={
                            <MyText style={{ color: app.lightColor }}>
                                {profile.gender
                                    ? `${profile.gender.male} ♂️  ${profile.gender.female} ♀️`
                                    : 'Genderless'}
                            </MyText>
                        }
                    />
                    <LabelAndValue
                        label="EGG GROUPS"
                        value={
                            <MyText
                                style={{
                                    color: app.lightColor,
                                    textTransform: 'capitalize',
                                }}
                            >
                                {breeding.eggGroups.join(', ')}
                            </MyText>
                        }
                    />
                    <LabelAndValue
                        label="EGG CYCLES"
                        value={
                            <MyText
                                style={{
                                    color: app.lightColor,
                                }}
                            >
                                {breeding.eggCycles}
                            </MyText>
                        }
                    />
                </Card>
                <Card title="Training" titleBgColor={color}>
                    <LabelAndValue
                        label="EV YIELD"
                        value={<MyText style={{ color: app.lightColor }}>{training.evYield}</MyText>}
                    />
                    <LabelAndValue
                        label="CATCH RATE"
                        value={<MyText style={{ color: app.lightColor }}>{training.catchRate}</MyText>}
                    />
                    <LabelAndValue
                        label="BASE FRIENDSHIP"
                        value={<MyText style={{ color: app.lightColor }}>{training.baseHappiness}</MyText>}
                    />
                    <LabelAndValue
                        label="BASE EXP"
                        value={<MyText style={{ color: app.lightColor }}>{training.baseExp}</MyText>}
                    />
                    <LabelAndValue
                        label="GROWTH RATE"
                        value={<MyText style={{ color: app.lightColor }}>{training.growthRate}</MyText>}
                    />
                </Card>
                <Card title="Evolutions" titleBgColor={color}>
                    {evolutions.length > 0 ? (
                        <Evolutions evolutions={evolutions} />
                    ) : (
                        <MyText style={styles.nope}>{name} does not evolve.</MyText>
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
        backgroundColor: app.darkColor,
        display: 'flex',
        flexDirection: 'column',
        gap: 25,
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

        backgroundColor: app.grey + app.transparency,
        borderRadius: 10,
    },
    sprite: {
        width: '100%',
        aspectRatio: 1,
    },
    typesAndStatsContainer: {
        flex: 5,
        display: 'flex',
        flexDirection: 'column',
        gap: containerVerticalSize,
    },
    intro: {},
    speciesName: {
        color: app.lightColor,
        fontSize: 20,
        letterSpacing: 1,
        elevation: 10,

        // textShadowColor: 'rgba(255, 255, 255, 1)',
        // textShadowOffset: { width: 1, height: 1 },
        // textShadowRadius: 1,
    },
    flavorTextEntry: {
        color: app.lightColor,
        marginTop: 15,
    },
    nope: {
        color: app.lightColor,
        textTransform: 'capitalize',
        textAlign: 'center',
        paddingVertical: 10,
    },
});
