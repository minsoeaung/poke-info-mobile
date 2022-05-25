import { StyleSheet, View } from 'react-native';

import MyText from '../components/MyText';

export default function ItemList() {
    return (
        <View style={styles.container}>
            <MyText>ITEM LIST</MyText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
});
