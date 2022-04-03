import {StyleSheet, View} from "react-native";
import MyText from "./MyText";

export default function Description({label, value, noBorder}) {
    return (
        <View
            style={{
                ...styles.types,
                borderBottomWidth: noBorder ? 0 : 1,
                borderColor: 'tomato'
            }}
        >
            <View style={styles.label}>
                <MyText>{label}</MyText>
            </View>
            <View style={styles.value}>
                {value}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    types: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        marginHorizontal: 10,
    },
    label: {
        flex: 2
    },
    value: {
        flex: 3
    }
})
