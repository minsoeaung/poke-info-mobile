import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PokeAPI } from 'pokeapi-types';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Card from '../components/Card';
import ErrorDisplay from '../components/ErrorDisplay';
import LoadingText from '../components/LoadingText';
import MyText from '../components/MyText';
import { PressableNameList } from '../components/PressableNameList';
import { app } from '../constants/colors';
import useFetchData from '../hooks/useFetchData';
import { NativeStackParamList, PressableListItemType } from '../types';
import getFormattedName from '../utils/getFormattedName';

type Props = NativeStackScreenProps<NativeStackParamList, 'AbilityDetail'>;

export default function AbilityDetail({ navigation, route }: Props) {
    const { name } = route.params;

    const [pokemonsWithThisAbility, setPokemonsWithThisAbility] = useState<PressableListItemType[]>([]);
    const [flavorText, setFlavorText] = useState('');
    const [effectEntry, setEffectEntry] = useState('');

    const { isLoading, error, data } = useFetchData<PokeAPI.Ability>(`https://pokeapi.co/api/v2/ability/${name}`);

    useEffect(() => {
        if (data) {
            const enFlavorText = data.flavor_text_entries.find(e => e.language.name === 'en');
            if (enFlavorText) {
                setFlavorText(enFlavorText.flavor_text.replace('\n', ' '));
            }
            const enEffect = data.effect_entries.find(e => e.language.name === 'en');
            if (enEffect) {
                setEffectEntry(enEffect.effect.replace('\n', ' '));
            }
            const list: PressableListItemType[] = data.pokemon.map(d => ({
                name: d.pokemon.name,
                isHidden: d.is_hidden,
                typeSlot: d.slot,
            }));
            setPokemonsWithThisAbility(list);
        }
    }, [data]);

    useEffect(() => {
        navigation.setOptions({ title: getFormattedName(name) });
    }, []);

    if (isLoading) {
        return <LoadingText />;
    }

    if (error) {
        return <ErrorDisplay error={error} />;
    }

    return (
        <FlatList
            data={[]}
            renderItem={null}
            style={styles.container}
            ListHeaderComponent={
                <Card>
                    {flavorText.length > 0 && <MyText style={styles.description}>{flavorText}</MyText>}
                    {effectEntry.length > 0 && <MyText style={styles.description}>{effectEntry}</MyText>}
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
