import {Dimensions, Image, ScrollView, StyleSheet, View} from "react-native";
import {useEffect} from "react";
import {appColor, cardBg} from "../constants/colors";
import MyText from "../components/MyText";
import Types from "../components/Types";

export default function Pokemon({route, navigation}) {
    const {data} = route.params;

    useEffect(() => {
        navigation.setOptions({title: data.name})
    }, []);

    return (
        <View style={{...styles.container, backgroundColor: cardBg[data.types[0].type.name]}}>
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: data.sprites.other['official-artwork']['front_default']
                        }}
                    />
                </View>
                <View style={styles.types}>
                    <View style={{flex: 1}}>
                        <MyText>Type</MyText>
                    </View>
                    <View style={{flex: 3, borderLeftWidth: 1, borderLeftColor: appColor.border}}>
                        <Types types={data.types} isBig/>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10
    },
    imageContainer: {
        width: Dimensions.get('window').width - 70,
        height: Dimensions.get('window').width - 70,
        backgroundColor: appColor.headerBg,
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').width) / 2,
        elevation: 5,
        flex: 1,
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 20
    },
    image: {
        width: Dimensions.get('window').width - 1,
        height: Dimensions.get('window').width - 1,
        flex: 1,
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    types: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: appColor.headerBg,
        paddingLeft: 10,
        paddingVertical: 10,
        borderRadius: 15,
    }
})
