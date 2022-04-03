import MyText from "./MyText";
import {StyleSheet, View} from "react-native";
import {appColor, typeBg} from "../constants/colors";

export default function Types({types, isBig = false}) {
    if (isBig) {
        return (
            <View style={styles.typeContainer}>
                {types.map((type, index) => (
                    <MyText
                        style={{
                            backgroundColor: typeBg[type.type.name],
                            fontFamily: 'DotGothic16_400Regular',
                            paddingHorizontal: 10,
                            paddingVertical: 7,
                            borderRadius: 5,
                            color: 'white',
                            marginRight: 15,
                            elevation: 5
                        }}
                    >
                        {type.type.name}
                    </MyText>
                ))}
            </View>
        )
    }

    return (
        <View style={styles.typeContainer}>
            {types.map((type, index) => (
                <MyText
                    style={{
                        backgroundColor: typeBg[type.type.name],
                        fontFamily: 'DotGothic16_400Regular',
                        paddingHorizontal: 5,
                        paddingVertical: 1,
                        borderBottomLeftRadius: index === 0 ? 5 : 0,
                        borderTopLeftRadius: index === 0 ? 5 : 0,
                        borderTopRightRadius: index === types.length - 1 ? 5 : 0,
                        borderBottomRightRadius: index === types.length - 1 ? 5 : 0,
                        color: 'white',
                    }}
                >
                    {type.type.name}
                </MyText>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    typeContainer: {
        flexDirection: 'row',
    }
})
