import { StyleSheet, View } from 'react-native';

import MyText from '../components/MyText';

export default function ItemDetail() {
    return (
        <View style={styles.container}>
            <MyText>Item detail</MyText>
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
