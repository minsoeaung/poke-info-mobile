import SmallGreyText from "./SmallGreyText";

const a = {
    2: 'nd',
    3: 'rd',
}

export default function TypeSlot({slot}) {
    let order;

    if (slot > 3) {
        order = slot + 'th';
    } else {
        order = slot + a[slot];
    }

    if (slot === 1) {
        return null;
    }

    return (
        <SmallGreyText text={'   (' + order + ' slot)'}/>
    )
}
