export default function getHeightInFeetAndInches(height) {
    // height from poke api come with dm
    const realFeet = height * 0.32808
    const feet = Math.floor(realFeet)
    const inches = Math.round((realFeet - feet) * 12);
    return `${feet}' ${inches}"`
}
