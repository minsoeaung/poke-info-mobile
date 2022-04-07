import {FlatList, Pressable, StyleSheet, View} from 'react-native';
import {appColor} from "../constants/colors";
import abilities from "../constants/abilities";
import MyText from "../components/MyText";
import getFormattedName from "../utils/getFormattedName";

const length = abilities.length;

export default function Abilities({navigation}) {
    const renderItem = ({item, index}) => (
        <Pressable onPress={() => navigation.navigate('Ability', {name: item.name, url: item.url})}>
            {({pressed}) => (
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderBottomWidth: index === length - 1 ? 0 : 1,
                        borderColor: 'tomato',
                        paddingVertical: 20,
                        marginHorizontal: 10,
                    }}
                >
                    <MyText style={{color: pressed ? 'tomato' : 'black'}}>{getFormattedName(item.name)}</MyText>
                    <MyText style={{color: pressed ? 'tomato' : 'black'}}>{'>'}</MyText>
                </View>
            )}
        </Pressable>
    );

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <FlatList
                    data={abilities}
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
        backgroundColor: appColor.appBg
    },
    card: {
        flex: 1,
        backgroundColor: appColor.headerBg,
        borderRadius: 10,
        borderWidth: 0.5,
    },
})
