import {StyleSheet, View} from "react-native";
import MyText from "./MyText";

export default function Abilities({abilities}) {
    return (
        <View style={styles.container}>
            {abilities.map((ability, index) => (
                <View style={styles.ability}>
                    <MyText
                        style={{
                            backgroundColor: '#2f4f4f',
                            paddingHorizontal: 10,
                            paddingVertical: 7,
                            borderRadius: 5,
                            color: 'white',
                            marginTop: index === 0 ? 0 : 5,
                            elevation: 5
                        }}
                    >
                        {ability.ability.name}
                    </MyText>
                    <MyText>{ability.is_hidden && ' (Hidden)'}</MyText>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
    },
    ability: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})
