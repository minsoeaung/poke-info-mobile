import {View, StyleSheet, Text} from 'react-native';

export default function PokeDex() {
    return (
        <View style={styles.container}>
            <Text>Pokedex</Text>
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
