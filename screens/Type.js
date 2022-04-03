import {Pressable, ScrollView, StyleSheet, View} from 'react-native';
import MyText from "../components/MyText";
import {useEffect} from "react";
import useFetchData from "../hooks/useFetchData";
import LoadingText from "../components/LoadingText";
import Description from "../components/Description";
import {appColor, typeBg} from "../constants/colors";

export default function Type({route, navigation}) {
    const {name, url} = route.params;
    const {isLoading, data} = useFetchData(url);

    useEffect(() => {
        navigation.setOptions({title: name})
    }, []);

    if (isLoading) {
        return <LoadingText/>
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.dmgRelationContainer}>
                <MyText style={styles.relationTitle}>Attack</MyText>
                <Description
                    label='2x damage'
                    value={<Types types={data.damage_relations.double_damage_to} navigation={navigation}/>}
                />
                <Description
                    label='0.5x damage'
                    value={<Types types={data.damage_relations.half_damage_to} navigation={navigation}/>}
                    noBorder={!data.damage_relations.no_damage_to.length}
                />
                {!!data.damage_relations.no_damage_to.length && (
                    <Description
                        label='no damage'
                        value={<Types types={data.damage_relations.no_damage_to} navigation={navigation}/>}
                        noBorder
                    />
                )}
            </View>

            <View style={styles.dmgRelationContainer}>
                <MyText style={styles.relationTitle}>Defense</MyText>
                <Description
                    label='2x damage'
                    value={<Types types={data.damage_relations.double_damage_from} navigation={navigation}/>}
                />
                <Description
                    label='0.5x damage'
                    value={<Types types={data.damage_relations.half_damage_from} navigation={navigation}/>}
                    noBorder={!data.damage_relations.no_damage_from.length}
                />
                {!!data.damage_relations.no_damage_from.length && (
                    <Description
                        label='no damage'
                        value={<Types types={data.damage_relations.no_damage_from} navigation={navigation}/>}
                        noBorder
                    />
                )}
            </View>
        </ScrollView>
    )
}

function Types({types, navigation}) {
    return (
        <View style={styles.typeContainer}>
            {types.map(type => (
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
                                marginRight: 5,
                                elevation: 5,
                                marginTop: 5
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

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: appColor.appBg,
    },
    typeContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    dmgRelationContainer: {
        marginBottom: 10,
        backgroundColor: appColor.headerBg,
        borderRadius: 10,
        borderWidth: 0.5
    },
    relationTitle: {
        fontSize: 20,
        margin: 10,
        color: '#000'
    }
})
