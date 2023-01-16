import { useRef, useState } from 'react';

const useSearchableList = <T extends { name: string }>(initialList: T[] = []) => {
    const [list, setList] = useState<T[]>(initialList);
    const [value, setValue] = useState<string>('');
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const filterTheList = (query: string) => {
        if (!query.trim()) {
            setList(initialList);
        } else {
            const q = query.trim().toLowerCase().replace(' ', '-');
            const filteredPokemons = initialList.filter(item => item.name.includes(q));
            setList(filteredPokemons);
        }
    };

    const handleChangeText = (value: string) => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
            filterTheList(value);
        }, 275);
        setValue(value);
    };

    const clearInput = () => {
        setValue('');
        setList(initialList);
    };

    return {
        list,
        value,
        handleChangeText,
        clearInput,
    };
};
export default useSearchableList;
