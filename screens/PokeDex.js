import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {useEffect, useState} from "react";
import PokemonCard from "../components/PokemonCard";
import {appColor} from "../constants/colors";

export default function PokeDex() {
    const [next, setNext] = useState('https://pokeapi.co/api/v2/pokemon?limit=27');
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

    const renderItem = ({item}) => <PokemonCard url={item.url}/>;

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => (item.name + index)}
                numColumns={3}
                onEndReached={() => setPage(page + 1)}
                onEndReachedThreshold={1}
                ListFooterComponent={fetching && <ActivityIndicator color={appColor.border}/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColor.appBg
    }
})
