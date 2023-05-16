import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, View } from 'react-native';

import MyText from './MyText';
import { app, typeColor } from '../constants/colors';
import { StackParamList } from '../types';

type Props = {
    types: string[];
};

const shouldUseDark = ['grass', 'electric', 'steel', 'ice', 'ground', 'bug', 'rock'];

export default function PokemonTypes({ types }: Props) {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

    return (
        <View style={styles.typeContainer}>
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
                            style={{
                                backgroundColor: typeColor[type],
                                paddingHorizontal: 10,
                                paddingVertical: 7,
                                borderRadius: 10,
                                color: shouldUseDark.includes(type) ? app.darkColor : app.lightColor,
                                marginRight: 15,
                                elevation: 10,
                                textTransform: 'capitalize',
                                borderWidth: 1,
                                borderColor: pressed ? app.lightColor : app.darkColor,
                            }}
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
    typeContainer: {
        flexDirection: 'row',
    },
});
