import {StyleSheet, View} from "react-native";
import MyText from "./MyText";
import {appColor} from "../constants/colors";

export default function Description({label, value}) {
    return (
        <View style={styles.types}>
            <View style={{flex: 1.3}}>
                <MyText>{label}</MyText>
            </View>
            <View style={{flex: 2}}>
                {value}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    types: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        borderColor: 'tomato',
    }
})
