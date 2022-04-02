import useFetchData from "../hooks/useFetchData";
import {ActivityIndicator, Image, Pressable, StyleSheet, View} from 'react-native';
import {appColor, cardBg} from "../constants/colors";
import MyText from "./MyText";
import Types from "./Types";

export default function PokemonCard({url, navigation}) {
    const {isLoading, error, data} = useFetchData(url);

    if (isLoading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator color={appColor.border}/>
            </View>
        )
    }

    const goToPokemon = () => {
        navigation.navigate('Pokemon', {data});
    }

    return (
        <Pressable
            onPress={goToPokemon}
            style={({pressed}) => [
                {
                    ...styles.container,
                    backgroundColor: pressed ? 'rgb(210, 230, 255)' : cardBg[data.types[0].type.name],
                },
            ]}
        >
            <MyText>{data.name}</MyText>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{uri: data.sprites['front_default']}}
                />
            </View>
            <Types types={data.types}/>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 160,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: 5,
        borderWidth: 1,
        borderColor: appColor.border,
    },
    imageContainer: {
        borderRadius: 20,
        backgroundColor: '#fff',
        width: '80%',
        height: '60%'
    },
    image: {
        width: '100%',
        height: '100%'
    }
})
