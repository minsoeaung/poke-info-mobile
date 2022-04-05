export default function getFormattedName(name) {
    if (typeof name !== "string") return '';

    const a = name.split('-').join(' ');
    return a.charAt(0).toUpperCase() + a.slice(1);
}
