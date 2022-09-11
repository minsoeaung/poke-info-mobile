import { PokeAPI } from 'pokeapi-types';
import { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import { appColor } from '../constants/colors';
import useFetchData from '../hooks/useFetchData';
import { Chain } from '../types';
import getEvolutionDescription from '../utils/getEvolutionDescription';
import LoadingText from './LoadingText';
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
                <LoadingText />
            ) : error ? (
                <MyText>{error}</MyText>
            ) : (
                <View style={styles.chains}>
                    {evoChain.map((chain, index) => {
                        if (index === evoChain.length - 1) return null;

                        const from = chain;
                        const to = evoChain[index + 1];

                        return (
                            <View style={styles.chain} key={from.species_name}>
                                <View style={styles.chainImages}>
                                    <PokemonCard name={from.species_name} inEvolution />
                                    <MyText style={styles.arrow}>➡</MyText>
                                    <PokemonCard name={to.species_name} inEvolution />
                                </View>
                                <MyText style={styles.chainDescription}>{getEvolutionDescription(from, to)}</MyText>
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
    },
    chainDescription: {
        color: appColor.primary,
    },
    arrow: {
        color: appColor.primary,
        fontSize: 20,
        flex: 1,
        textAlign: 'center',
    },
});

export default Evolutions;
