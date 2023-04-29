import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

import { app } from '../constants/colors';

export default function PikachuRunning() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.sprite}
                source={require('./../assets/pikachu-running.gif')}
                contentFit="contain"
                accessibilityLabel="Pikachu running"
                recyclingKey="pikachu_running"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: app.darkColor,
    },
    sprite: {
        flex: 1,
        width: '15%',
    },
});
