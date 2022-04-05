import {Dimensions, Image, ScrollView, StyleSheet, View} from "react-native";
import {useEffect} from "react";
import {appColor, cardBg} from "../constants/colors";
import Types from "../components/Types";
import Description from "../components/Description";
import Abilities from "../components/Abilities";
import MyText from "../components/MyText";
import getHeightInFeetAndInches from "../utils/getHeightInFeetAndInches";
import getWeightInLbs from '../utils/getWeightInLbs';
import useFetchData from "../hooks/useFetchData";
import LoadingText from "../components/LoadingText";
import getFormattedName from "../utils/getFormattedName";

export default function Pokemon({route, navigation}) {
    const {data, name, url} = route.params;

    useEffect(() => {
        navigation.setOptions({title: data ? getFormattedName(data.name) : getFormattedName(name)})
    }, []);

    if (data) {
        return <PokemonDetail data={data} navigation={navigation}/>
    } else {
        return <PokemonWithFetching url={url} navigation={navigation}/>
    }
}

function PokemonWithFetching({url, navigation}) {
    const {isLoading, data} = useFetchData(url);

    if (isLoading) {
        return <LoadingText/>
    }

    return (
        <PokemonDetail data={data} navigation={navigation}/>
    )
}

function PokemonDetail({data, navigation}) {
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
                <View style={styles.descriptionContainer}>
                    <Description
                        label='type'
                        value={<Types types={data.types} navigation={navigation} isBig/>}
                    />
                    <Description
                        label='abilities'
                        value={<Abilities abilities={data.abilities} navigation={navigation}/>}
                    />
                    <Description label='height' value={<MyText>{getHeightInFeetAndInches(data.height)}</MyText>}/>
                    <Description label='weight' value={<MyText>{getWeightInLbs(data.weight)}</MyText>}/>
                    <Description label='base-experience' value={<MyText>{data.base_experience}</MyText>}/>
                    {data.stats.map(({base_stat, stat}) => (
                        <Description label={stat.name} value={<MyText>{base_stat}</MyText>} noBorder/>
                    ))}
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
        marginBottom: 20,
    },
    image: {
        width: Dimensions.get('window').width - 1,
        height: Dimensions.get('window').width - 1,
        flex: 1,
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    descriptionContainer: {
        borderWidth: 0.5,
        borderRadius: 10,
        backgroundColor: appColor.headerBg,
        marginBottom: 10,
    }
})
