import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, View } from 'react-native';

import MyText from './MyText';
import { PokemonTypeIcon } from './PokemonTypeIcon';
import { colors, typeColor } from '../constants/colors';
import { StackParamList } from '../types';

type Props = {
    types: (keyof typeof typeColor)[];
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
                        <View
                            style={[
                                styles.type,
                                {
                                    backgroundColor: typeColor[type],
                                    borderColor: pressed ? 'tomato' : 'transparent',
                                },
                            ]}
                        >
                            <PokemonTypeIcon name={type} size={lineHeight} />
                            <MyText style={styles.typeText}>{type}</MyText>
                        </View>
                    )}
                </Pressable>
            ))}
        </View>
    );
}

const lineHeight = 20;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
    type: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 3,
        paddingLeft: 5,
        paddingRight: 10,
        paddingVertical: 1,
        borderRadius: 5,
        borderWidth: 2,
    },
    typeText: {
        textTransform: 'capitalize',
        color: colors.typeText,
        fontSize: 14,
        lineHeight,

        textShadowColor: 'rgba(0, 0, 0, 0.9)',
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 3,
    },
});
