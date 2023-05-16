import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, View } from 'react-native';

import MyText from './MyText';
import { app, typeColor } from '../constants/colors';
import { StackParamList } from '../types';

type Props = {
    types: string[];
};

const shouldUseDark = ['grass', 'steel', 'electric', 'steel', 'ice', 'ground', 'bug', 'fairy', 'normal'];

export default function PokemonTypes({ types }: Props) {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

    return (
        <View style={styles.container}>
            {types.map(type => (
                <Pressable
                    key={type}
                    onPress={() => {
                        navigation.push('TypeDetail', {
                            name: type,
                        });
                    }}
                >
                    {({ pressed }) => (
                        <MyText
                            style={StyleSheet.flatten([
                                styles.typeText,
                                {
                                    backgroundColor: typeColor[type],
                                    color: shouldUseDark.includes(type) ? app.darkColor : app.lightColor,
                                    borderColor: pressed ? 'tomato' : app.darkColor,
                                    borderWidth: 1.5,
                                },
                            ])}
                        >
                            {type}
                        </MyText>
                    )}
                </Pressable>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 5,
    },
    typeText: {
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 10,
        elevation: 10,
        textTransform: 'capitalize',
        borderWidth: 1,
    },
});
