import MyText from "./MyText";
import {Pressable, StyleSheet, View} from "react-native";
import {typeBg} from "../constants/colors";

export default function Types({types, isBig = false, navigation}) {
    if (isBig) {
        return (
            <View style={styles.typeContainer}>
                {types.map(({type}) => (
                    <Pressable
                        onPress={() => {
                            navigation.push('Type', {name: type.name, url: type.url})
                        }}
                    >
                        {({pressed}) => (
                            <MyText
                                style={{
                                    backgroundColor: pressed
                                        ? 'rgb(130,183,255)'
                                        : typeBg[type.name],
                                    paddingHorizontal: 10,
                                    paddingVertical: 7,
                                    borderRadius: 5,
                                    color: 'white',
                                    marginRight: 15,
                                    elevation: 5,
                                }}
                            >
                                {type.name}
                            </MyText>
                        )}
                    </Pressable>
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
                        paddingHorizontal: 5,
                        paddingVertical: 2,
                        borderBottomLeftRadius: index === 0 ? 5 : 0,
                        borderTopLeftRadius: index === 0 ? 5 : 0,
                        borderTopRightRadius: index === types.length - 1 ? 5 : 0,
                        borderBottomRightRadius: index === types.length - 1 ? 5 : 0,
                        color: 'white',
                        fontSize: 10
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
