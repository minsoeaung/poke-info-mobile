import {StyleSheet, View} from 'react-native';
import MyText from "../components/MyText";

export default function PokeDex() {
    return (
        <View style={styles.container}>
            <MyText>Pokedex</MyText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
