export default function getHeightString(height: number): string {
    // input: The height of the Pokémon, in tenths of a meter (decimeters)

    const realFeet = height * 0.32808;
    const feet = Math.floor(realFeet);
    const inches = Math.round((realFeet - feet) * 12);
    const meter = Number((height * 0.1).toFixed(2));
    return `${feet}' ${inches}", ${meter} m`;
}
