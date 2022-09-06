import { StyleSheet, View } from 'react-native';

import { appColor } from '../constants/colors';
import MyText from './MyText';

export default function LoadingText() {
    return (
        <View style={styles.headerContainer}>
            <MyText style={styles.text}>loading...</MyText>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: appColor.primary,
    },
    text: {
        color: appColor.secondary,
    },
});
