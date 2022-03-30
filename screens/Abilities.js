import {View, StyleSheet} from 'react-native';
import MyText from "../components/MyText";

export default function Abilities() {
    return (
        <View style={styles.container}>
            <MyText>Abilities</MyText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
