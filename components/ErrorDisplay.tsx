import { StyleSheet, View } from 'react-native';

import SmallGreyText from './SmallGreyText';

export default function ErrorDisplay({ error }: { error: string }) {
    return (
        <View style={styles.container}>
            <SmallGreyText text={error} />
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
