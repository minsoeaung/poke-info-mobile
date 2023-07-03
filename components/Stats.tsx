import { StyleSheet, View } from 'react-native';

import MyText from './MyText';
import { app } from '../constants/colors';
import { PokemonDetailType } from '../types';

type Props = {
    stats: PokemonDetailType['stats'];
    barColor: string;
};

const Stats = ({ stats, barColor }: Props) => {
    return (
        <View style={styles.container}>
            {(Object.keys(stats) as (keyof typeof stats)[]).map(statName => {
                if (statName === 'total') return null;
                const value = stats[statName][0];
                const ratio = getStatRatio(value);

                return (
                    <View style={styles.row} key={statName}>
                        <MyText style={styles.statName} numberOfLines={1}>
                            {statNamesInUI[statName]}
                        </MyText>
                        <View style={[styles.statBar, { borderColor: barColor }]}>
                            <View style={[styles.statNumberContainer, StyleSheet.absoluteFill]}>
                                <MyText style={styles.statNumber}>{value}</MyText>
                            </View>
                            <View
                                style={{
                                    flex: ratio,
                                    backgroundColor: barColor,
                                }}
                            />
                        </View>
                    </View>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        gap: 7,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        height: 15,
        gap: 7,
    },
    statName: {
        flex: 1,
        color: app.lightColor,
    },
    statBar: {
        flex: 2,
        borderWidth: StyleSheet.hairlineWidth,
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 10,
        elevation: 10,
        overflow: 'hidden',
    },
    statNumberContainer: {
        zIndex: 1,
        paddingLeft: 5,
    },
    statNumber: {
        color: app.darkColor,
        fontSize: 10,
        textShadowColor: 'rgba(255, 255, 255, 0.75)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
    },
});

// From: https://github.com/nolanlawson/pokedex.org/blob/master/src/js/shared/renderMonsterDetailView/renderStats.js
function smoothExponentially(value: number, max: number) {
    const a = -max / Math.pow(max, 2);
    return a * Math.pow(value - max, 2) + max;
}

const getStatRatio = (statValue: number) => {
    const maxStat = 255;
    const smoothedValue = smoothExponentially(statValue, maxStat);
    return smoothedValue / maxStat;
};

const statNamesInUI = {
    hp: 'HP',
    attack: 'Attack',
    defense: 'Defense',
    specialAttack: 'Sp Atk',
    specialDefense: 'Sp Def',
    speed: 'Speed',
    total: 'Total',
};

export default Stats;
