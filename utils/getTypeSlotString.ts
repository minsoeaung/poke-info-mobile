const getTypeSlotString = (slot: number): string | null => {
    if (slot === 1) {
        return null;
    }

    let order: string;

    if (slot > 3) {
        order = slot + 'th';
    } else {
        order = slot + (slot === 2 ? 'nd' : 'rd');
    }

    return order + ' slot';
};

export default getTypeSlotString;
