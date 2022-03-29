import {View, StyleSheet, Text} from 'react-native';

export default function Abilities() {
    return (
        <View style={styles.container}>
            <Text>Abilities</Text>
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
