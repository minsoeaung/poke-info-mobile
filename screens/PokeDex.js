import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {useEffect, useState} from "react";
import PokemonCard from "../components/PokemonCard";
import {appColor} from "../constants/colors";

export default function PokeDex({navigation}) {
    const [next, setNext] = useState('https://pokeapi.co/api/v2/pokemon?offset=0&limit=27');
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
                setData(prevState => [...prevState, ...data.results]);
            }
            setFetching(false);
        })();
    }, [page]);

    const renderItem = ({item}) => <PokemonCard url={item.url} navigation={navigation}/>;

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => (item.name + index)}
                numColumns={3}
                onEndReached={() => setPage(page + 1)}
                ListFooterComponent={
                    fetching && (
                        <ActivityIndicator color={appColor.border} style={{marginBottom: 5}}/>
                    )
                }
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
