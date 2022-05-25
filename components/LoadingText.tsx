import { StyleSheet, View } from 'react-native';

import MyText from './MyText';

export default function LoadingText() {
    return (
        <View style={styles.container}>
            <MyText>loading...</MyText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
