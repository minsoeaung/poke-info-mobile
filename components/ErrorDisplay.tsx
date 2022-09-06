import { StyleSheet, View } from 'react-native';

import MyText from './MyText';

export default function ErrorDisplay({ error }: { error: string }) {
    return (
        <View style={styles.headerContainer}>
            <MyText>{error}</MyText>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
