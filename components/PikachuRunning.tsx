import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

import { colors } from '../constants/colors';

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
        backgroundColor: colors.background,
    },
    sprite: {
        flex: 1,
        width: '15%',
    },
});
