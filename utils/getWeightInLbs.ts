export default function getWeightInLbs(weight: number): string {
    return `${(Math.round(weight * 0.2205 * 10) / 10).toFixed(1)} lbs`;
}
