import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {useEffect, useState} from "react";
import PokemonCard from "../components/PokemonCard";
import {appColor} from "../constants/colors";
import MyText from "../components/MyText";

export default function PokeDex({navigation}) {
    const [next, setNext] = useState('https://pokeapi.co/api/v2/pokemon?offset=0&limit=27');
    const [page, setPage] = useState(1);
    const [fetching, setFetching] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            setFetching(true);
            try {
                const res = await fetch(next);
                const data = await res.json();
                if (data) {
                    setNext(data.next);
                    setData(prevState => [...prevState, ...data.results]);
                }
            } catch (e) {
                setError('No internet connection.');
            } finally {
                setFetching(false);
            }
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
                onEndReached={() => !error && setPage(page + 1)}
                ListFooterComponent={
                    error
                        ? <MyText>{error}</MyText>
                        : fetching && <ActivityIndicator color={appColor.border} style={{marginBottom: 5}}/>
                }
                ListFooterComponentStyle={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
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
