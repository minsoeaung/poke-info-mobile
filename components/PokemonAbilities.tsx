import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, View } from 'react-native';

import MyText from './MyText';
import SmallGreyText from './SmallGreyText';
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
                    style={styles.ability}
                    onPress={() => goToAbilityDetailScreen(ability.name)}
                >
                    {({ pressed }) => (
                        <>
                            <MyText
                                style={{
                                    backgroundColor: pressed ? 'rgb(130,183,255)' : '#2f4f4f',
                                    marginTop: index === 0 ? 0 : 5,
                                    paddingHorizontal: 10,
                                    paddingVertical: 7,
                                    borderRadius: 10,
                                    color: 'white',
                                    elevation: 5,
                                }}
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
        alignItems: 'flex-start',
    },
    ability: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
