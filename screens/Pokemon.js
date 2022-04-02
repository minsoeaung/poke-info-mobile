import {StyleSheet, View} from "react-native";
import MyText from "../components/MyText";
import {useEffect} from "react";

export default function Pokemon({route, navigation}) {
    const {data} = route.params;

    useEffect(() => {
        navigation.setOptions({title: data.name})
    }, []);

    return (
        <View style={styles.container}>
            <MyText>{data.name}</MyText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
