import { StyleSheet, View } from 'react-native';

import { app } from '../constants/colors';
import MyText from './MyText';

export default function LoadingText() {
    return (
        <View style={styles.container}>
            <MyText style={styles.text}>Loading...</MyText>
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
    text: {
        color: app.lightColor,
    },
});
