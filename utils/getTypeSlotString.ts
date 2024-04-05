const getTypeSlotString = (slot: number): string => {
    if (slot === 1) {
        return '';
    }

    let order: string;

    if (slot > 3) {
        order = slot + 'th';
    } else {
        order = slot + (slot === 2 ? 'nd' : 'rd');
    }

    return order + ' Slot';
};

export default getTypeSlotString;
