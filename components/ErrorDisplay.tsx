import { StyleSheet, View } from 'react-native';

import SmallGreyText from './SmallGreyText';
import { app } from '../constants/colors';

export default function ErrorDisplay({ error }: { error: string }) {
    return (
        <View style={styles.container}>
            <SmallGreyText text={error || 'Something went wrong'} />
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
});
