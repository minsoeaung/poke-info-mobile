import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, View } from 'react-native';

import MyText from './MyText';
import SmallGreyText from './SmallGreyText';
import { app } from '../constants/colors';
import { AbilityType, StackParamList } from '../types';
import getFormattedName from '../utils/getFormattedName';

type Props = {
    abilities: AbilityType[];
};

export default function PokemonAbilities({ abilities }: Props) {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

    const goToAbilityDetailScreen = (name: string) => {
        navigation.push('AbilityDetail', { name });
    };

    return (
        <View style={styles.container}>
            {abilities.map((ability, index) => (
                <Pressable
                    key={ability.name}
                    style={styles.pressable}
                    onPress={() => goToAbilityDetailScreen(ability.name)}
                >
                    {({ pressed }) => (
                        <>
                            <MyText
                                style={StyleSheet.flatten([
                                    styles.abilityName,
                                    {
                                        marginTop: index === 0 ? 0 : 5,
                                        borderColor: pressed ? 'tomato' : app.darkColor,
                                    },
                                ])}
                            >
                                {getFormattedName(ability.name)}
                            </MyText>
                            <View>
                                <SmallGreyText text={` Slot ${ability.slot}`} />
                                {ability.isHidden && <SmallGreyText text=" ( hidden )" />}
                            </View>
                        </>
                    )}
                </Pressable>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        gap: 5,
    },
    pressable: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    abilityName: {
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 10,
        borderWidth: 1,
        color: app.lightColor,
        backgroundColor: app.abilityColor,
        elevation: 5,
    },
});
