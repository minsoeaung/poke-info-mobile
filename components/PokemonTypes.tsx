import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, View } from 'react-native';

import MyText from './MyText';
import { app, typeColor } from '../constants/colors';
import { StackParamList } from '../types';

type Props = {
    types: string[];
    isInScreen?: boolean;
};

const goodContrastColors = {
    grass: app.darkColor,
    electric: app.darkColor,
    steel: app.darkColor,
};

export default function PokemonTypes({ types, isInScreen = false }: Props) {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

    if (isInScreen) {
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
                                    backgroundColor: pressed ? 'rgb(130,183,255)' : typeColor[type],
                                    paddingHorizontal: 10,
                                    paddingVertical: 7,
                                    borderRadius: 10,
                                    color: goodContrastColors[type] ? goodContrastColors[type] : app.lightColor,
                                    marginRight: 15,
                                    elevation: 10,
                                    textTransform: 'capitalize',
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

    return (
        <View style={styles.typeContainer}>
            {types.map((type, index) => (
                <MyText
                    key={type}
                    style={{
                        backgroundColor: typeColor[type],
                        paddingHorizontal: 5,
                        paddingVertical: 2,
                        borderBottomLeftRadius: index === 0 ? 5 : 0,
                        borderTopLeftRadius: index === 0 ? 5 : 0,
                        borderTopRightRadius: index === types.length - 1 ? 5 : 0,
                        borderBottomRightRadius: index === types.length - 1 ? 5 : 0,
                        color: goodContrastColors[type] ? goodContrastColors[type] : app.lightColor,
                        fontSize: 10,
                    }}
                >
                    {type}
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
