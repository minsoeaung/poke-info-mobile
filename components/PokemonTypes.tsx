import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PokeAPI } from 'pokeapi-types';
import { Pressable, StyleSheet, View } from 'react-native';

import { typeColor } from '../constants/colors';
import { NativeStackParamList } from '../types';
import getFormattedName from '../utils/getFormattedName';
import MyText from './MyText';

type Props = {
    types: PokeAPI.PokemonType[];
    isInScreen?: boolean;
};

export default function PokemonTypes({ types, isInScreen = false }: Props) {
    const navigation = useNavigation<NativeStackNavigationProp<NativeStackParamList>>();

    if (isInScreen) {
        return (
            <View style={styles.typeContainer}>
                {types.map(({ type }) => (
                    <Pressable
                        key={type.name}
                        onPress={() => {
                            navigation.push('TypeDetail', {
                                name: type.name,
                            });
                        }}>
                        {({ pressed }) => (
                            <MyText
                                style={{
                                    backgroundColor: pressed ? 'rgb(130,183,255)' : typeColor[type.name],
                                    paddingHorizontal: 10,
                                    paddingVertical: 7,
                                    borderRadius: 5,
                                    color: 'white',
                                    marginRight: 15,
                                    elevation: 5,
                                }}>
                                {getFormattedName(type.name) + ' >'}
                            </MyText>
                        )}
                    </Pressable>
                ))}
            </View>
        );
    }

    return (
        <View style={styles.typeContainer}>
            {types.map((type, index) => (
                <MyText
                    key={type.type.name}
                    style={{
                        backgroundColor: typeColor[type.type.name],
                        paddingHorizontal: 5,
                        paddingVertical: 2,
                        borderBottomLeftRadius: index === 0 ? 5 : 0,
                        borderTopLeftRadius: index === 0 ? 5 : 0,
                        borderTopRightRadius: index === types.length - 1 ? 5 : 0,
                        borderBottomRightRadius: index === types.length - 1 ? 5 : 0,
                        color: 'white',
                        fontSize: 10,
                    }}>
                    {type.type.name}
                </MyText>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    typeContainer: {
        flexDirection: 'row',
    },
});
