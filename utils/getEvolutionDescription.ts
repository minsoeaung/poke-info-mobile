import { Chain } from '../types';
import getFormattedName from './getFormattedName';

const getEvolutionDescription = (from: Chain, to: Chain): string => {
    const firstPart = getFormattedName(from.species_name) + ' evolves into ' + getFormattedName(to.species_name);
    let lastPart = '';

    const triggerName = to.trigger_name;
    if (triggerName === 'level-up' && to.min_level) {
        lastPart = 'at level ' + to.min_level;
    } else if (triggerName === 'trade') {
        lastPart = 'by trading';
    } else if (triggerName === 'use-item' && to.item?.name) {
        lastPart = 'using a ' + getFormattedName(to.item?.name);
    } else if (triggerName === 'shed') {
        lastPart = 'when leveled up with high friendship';
    } else if (triggerName === 'spin') {
        lastPart = 'by spinning around holding Sweet';
    } else if (triggerName === 'tower-of-darkness') {
        lastPart = 'in Tower of Darkness';
    } else if (triggerName === 'tower-of-waters') {
        lastPart = 'in Tower of Water';
    } else if (triggerName === 'three-critical-hits') {
        lastPart = 'by achieving 3 critical hits in one battle';
    } else if (triggerName === 'take-damage') {
    }

    return firstPart + ' ' + lastPart + '.';
};

export default getEvolutionDescription;
