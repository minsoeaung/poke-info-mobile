import { SQLiteDatabase } from 'expo-sqlite';

type LocalData = {
    url: string;
    value: string;
} | null;

export const fetchData = async <T>(url: string, db: SQLiteDatabase): Promise<T | null> => {
    const localData = await db.getFirstAsync<LocalData>(`SELECT * FROM pokeApis WHERE key = ?`, url);

    if (!!localData && typeof localData?.value === 'string') {
        // From local database
        return JSON.parse(localData.value);
    } else {
        // From network
        const res = await fetch(url);
        const data = await res.json();
        if (data) {
            await db.execAsync(`
                            PRAGMA journal_mode = WAL;
                            CREATE TABLE IF NOT EXISTS pokeApis (key VARCHAR(300) PRIMARY KEY NOT NULL, value TEXT NOT NULL);
                        `);
            await db.runAsync('INSERT or IGNORE INTO pokeApis (key, value) VALUES (?, ?)', url, JSON.stringify(data));
            return data;
        }
    }

    return null;
};
