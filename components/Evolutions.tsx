import { PokeAPI } from 'pokeapi-types';
import { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import { app } from '../constants/colors';
import useFetchData from '../hooks/useFetchData';
import { Chain } from '../types';
import getEvolutionDescription from '../utils/getEvolutionDescription';
import getFormattedName from '../utils/getFormattedName';
import MyText from './MyText';
import PokemonCard from './PokemonCard';

const Evolutions = ({ url }: { url: string }) => {
    const { isLoading, error, data } = useFetchData<PokeAPI.EvolutionChain>(url);

    const evoChain: Chain[] = useMemo(() => {
        if (data) {
            const chain = [];
            let evoData = data.chain;
            do {
                const evoDetails = evoData.evolution_details[0];
                chain.push({
                    species_name: evoData.species.name,
                    min_level: !evoDetails ? 1 : evoDetails.min_level,
                    trigger_name: !evoDetails ? null : evoDetails.trigger.name,
                    item: !evoDetails ? null : evoDetails.item,
                });
                evoData = evoData['evolves_to'][0];
            } while (!!evoData && evoData.hasOwnProperty('evolves_to'));

            return chain;
        } else {
            return [];
        }
    }, [data]);

    return (
        <View style={styles.container}>
            {isLoading ? (
                <MyText style={styles.loading}>...</MyText>
            ) : error ? (
                <MyText>{error}</MyText>
            ) : (
                <View style={styles.chains}>
                    {evoChain.map((chain, index) => {
                        const from = chain;
                        const to = evoChain[index + 1];

                        if (!to && evoChain.length > 1) return null;

                        return (
                            <View
                                style={[styles.chain, { marginBottom: index !== evoChain.length - 1 ? 10 : 0 }]}
                                key={from.species_name}>
                                <View style={styles.chainImages}>
                                    <PokemonCard name={from.species_name} inEvolution />
                                    {to && (
                                        <>
                                            <MyText style={styles.arrow}>➡</MyText>
                                            <PokemonCard name={to.species_name} inEvolution />
                                        </>
                                    )}
                                </View>
                                <MyText style={styles.chainDescription}>
                                    {to
                                        ? getEvolutionDescription(from, to)
                                        : `${getFormattedName(from.species_name)} does not evolve.`}
                                </MyText>
                            </View>
                        );
                    })}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    chains: {},
    chain: {},
    chainImages: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 5,
    },
    chainDescription: {
        color: app.darkColor,
        textAlign: 'center',
    },
    arrow: {
        color: app.darkColor,
        fontSize: 20,
        flex: 1,
        textAlign: 'center',
    },
    loading: {
        textAlign: 'center',
        paddingVertical: 20,
    },
});

export default Evolutions;
