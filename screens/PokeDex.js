import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {useEffect, useState} from "react";
import PokemonCard from "../components/PokemonCard";
import {appColor} from "../constants/colors";

export default function PokeDex() {
    const [next, setNext] = useState('https://pokeapi.co/api/v2/pokemon?limit=51');
    const [page, setPage] = useState(1);
    const [fetching, setFetching] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            setFetching(true);
            const res = await fetch(next);
            const data = await res.json();
            if (data) {
                setNext(data.next);
                setData(prevState => prevState.concat(data.results));
            }
            setFetching(false);
        })();
    }, [page]);

    const renderItem = ({item}) => <PokemonCard url={item.url} key={item.url}/>;

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.url}
                numColumns={3}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
