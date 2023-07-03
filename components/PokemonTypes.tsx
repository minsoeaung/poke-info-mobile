import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, View } from 'react-native';

import MyText from './MyText';
import { app, typeColor } from '../constants/colors';
import { StackParamList } from '../types';

type Props = {
    types: string[];
};

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
                                    borderColor: pressed ? 'tomato' : 'transparent',
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
        gap: 10,
    },
    typeText: {
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 7,
        textTransform: 'capitalize',
        borderWidth: 2,

        color: app.lightColor,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 1.3, height: 1.3 },
        textShadowRadius: 1,
    },
});
