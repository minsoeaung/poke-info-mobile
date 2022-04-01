import useFetchData from "../hooks/useFetchData";
import {ActivityIndicator, Image, StyleSheet, View} from 'react-native';
import {appColor, cardBg} from "../constants/colors";
import MyText from "./MyText";

export default function PokemonCard({url}) {
    const {isLoading, error, data} = useFetchData(url);

    if (isLoading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator color={appColor.border}/>
            </View>
        )
    }

    return (
        <View style={{...styles.container, backgroundColor: cardBg[data.types[0].type.name]}}>
            <MyText>{data.name}</MyText>
            <View style={styles.roundBorder}>
                <Image
                    style={styles.sprite}
                    source={{uri: data.sprites['front_default']}}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: 5,
        borderWidth: 1,
        borderColor: appColor.border,
    },
    roundBorder: {
        borderRadius: 20,
        backgroundColor: '#fff',
        width: '80%',
        height: '60%'
    },
    sprite: {
        width: '100%',
        height: '100%'
    }
})
