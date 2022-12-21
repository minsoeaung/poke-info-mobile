import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PokeAPI } from 'pokeapi-types';
import { useLayoutEffect, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

import Card from '../components/Card';
import ErrorDisplay from '../components/ErrorDisplay';
import LoadingText from '../components/LoadingText';
import MyText from '../components/MyText';
import { PressableNameList } from '../components/PressableNameList';
import { app } from '../constants/colors';
import useFetchData from '../hooks/useFetchData';
import { NativeStackParamList } from '../types';
import getFormattedName from '../utils/getFormattedName';

type Props = NativeStackScreenProps<NativeStackParamList, 'AbilityDetail'>;

type PokemonsWithThisAbilityType = {
    name: string;
    isHidden: boolean;
    typeSlot: number;
};

type Results = {
    pokemonsWithThisAbility: PokemonsWithThisAbilityType[];
    flavorText: string;
    effectEntry: string;
};

export default function AbilityDetail({ navigation, route }: Props) {
    const { name } = route.params;

    const { isLoading, error, data } = useFetchData<PokeAPI.Ability>(`https://pokeapi.co/api/v2/ability/${name}`);

    const { pokemonsWithThisAbility, flavorText, effectEntry } = useMemo(() => {
        const results: Results = { pokemonsWithThisAbility: [], flavorText: '', effectEntry: '' };

        if (data) {
            const enFlavorText = data.flavor_text_entries.find(e => e.language.name === 'en');
            if (enFlavorText) {
                results.flavorText = enFlavorText.flavor_text.replace('\n', ' ');
            }
            const enEffect = data.effect_entries.find(e => e.language.name === 'en');
            if (enEffect) {
                results.effectEntry = enEffect.effect.replace('\n', ' ');
            }
            results.pokemonsWithThisAbility = data.pokemon.map(d => ({
                name: d.pokemon.name,
                isHidden: d.is_hidden,
                typeSlot: d.slot,
            }));
        }

        return results;
    }, [data]);

    useLayoutEffect(() => {
        navigation.setOptions({ title: getFormattedName(name) });
    }, []);

    if (isLoading) {
        return <LoadingText />;
    }

    if (error) {
        return <ErrorDisplay error={error} />;
    }

    return (
        <Animated.FlatList
            entering={FadeIn.duration(100)}
            data={[]}
            renderItem={null}
            style={styles.container}
            ListHeaderComponent={
                <Card>
                    {!!flavorText && <MyText style={styles.description}>{flavorText}</MyText>}
                    {!!effectEntry && <MyText style={styles.description}>{effectEntry}</MyText>}
                    <MyText style={styles.description}>
                        {'Originated generation: ' + getFormattedName(data!.generation.name)}
                    </MyText>
                </Card>
            }
            ListEmptyComponent={
                <Card title="Pokémon with this ability">
                    <PressableNameList goTo="PokemonDetail" data={pokemonsWithThisAbility} />
                </Card>
            }
            ListFooterComponent={<View style={styles.footer} />}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: app.darkColor,
    },
    description: {
        paddingVertical: 10,
    },
    footer: {
        marginBottom: 10,
    },
});
