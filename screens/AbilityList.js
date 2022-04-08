import {FlatList, Pressable, StyleSheet, TextInput, View} from 'react-native';
import {appColor} from "../constants/colors";
import abilities from "../constants/abilities";
import MyText from "../components/MyText";
import {useState} from "react";

export default function AbilityList({navigation}) {
    const [data, setData] = useState(abilities);

    const onChangeText = value => filterTheData(value);

    const filterTheData = query => {
        if (!query) {
            setData(abilities);
        } else {
            setData(abilities.filter(ability => ability.name.toLowerCase().includes(query.toLowerCase())));
        }
    }

    const renderItem = ({item, index}) => (
        <Pressable onPress={() => navigation.navigate('AbilityDetail', {name: item.name, url: item.url})}>
            {({pressed}) => (
                <View style={{...styles.ability, borderBottomWidth: index === data.length - 1 ? 0 : 1}}>
                    <MyText style={{color: pressed ? 'tomato' : 'black'}}>{item.name}</MyText>
                    <MyText style={{color: pressed ? 'tomato' : 'black'}}>{'>'}</MyText>
                </View>
            )}
        </Pressable>
    );

    return (
        <View style={styles.container}>
            <View style={styles.searchBoxContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    placeholder='Filter the list'
                />
            </View>
            <View style={styles.abilitiesContainer}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.name}
                    itemHeight={50}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: appColor.appBg,
        paddingBottom: 60
    },
    abilitiesContainer: {
        backgroundColor: appColor.headerBg,
        borderRadius: 10,
        borderWidth: 0.5,
    },
    ability: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: 'tomato',
        paddingVertical: 20,
        marginHorizontal: 10,
    },
    searchBoxContainer: {
        backgroundColor: appColor.headerBg,
        borderRadius: 10,
        borderWidth: 0.5,
        marginBottom: 10
    },
    input: {
        height: 40,
        padding: 10,
        fontFamily: 'DotGothic16_400Regular'
    }
})
