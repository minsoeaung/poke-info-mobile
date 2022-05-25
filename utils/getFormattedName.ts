export default function getFormattedName(name: string): string {
    const a = name.split('-').join(' ');
    return a.charAt(0).toUpperCase() + a.slice(1);
}
