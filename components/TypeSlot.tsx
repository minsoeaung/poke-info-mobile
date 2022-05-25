import SmallGreyText from './SmallGreyText';

export default function TypeSlot({ slot }: { slot: number }) {
    if (slot === 1) {
        return null;
    }

    let order: string;

    if (slot > 3) {
        order = slot + 'th';
    } else {
        order = slot + (slot === 2 ? 'nd' : 'rd');
    }

    return <SmallGreyText text={'   (' + order + ' slot)'} />;
}
