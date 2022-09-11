export default function getWeightString(weight: number): string {
    // input: The weight of the Pokémon, in tenths of a kilogram (hectograms)

    const lbs = `${(Math.round(weight * 0.2205 * 10) / 10).toFixed(1)} lbs`;
    const kg = `${Number((weight * 0.1).toFixed(2))} kg`;
    return lbs + ', ' + kg;
}
