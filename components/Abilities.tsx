import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PokeAPI } from 'pokeapi-types';
import { Pressable, StyleSheet, View } from 'react-native';

import { NativeStackParamList } from '../types';
import MyText from './MyText';
import SmallGreyText from './SmallGreyText';

export default function Abilities({
    abilities,
}: {
    abilities: PokeAPI.PokemonAbility[];
}) {
    const navigation =
        useNavigation<NativeStackNavigationProp<NativeStackParamList>>();

    const goToAbility = (name: string, url: string) => {
        navigation.push('AbilityDetail', { name, url });
    };

    return (
        <View style={{ alignItems: 'flex-start' }}>
            {abilities.map((ability, index) => (
                <Pressable
                    key={ability.ability.name}
                    style={styles.button}
                    onPress={() =>
                        goToAbility(ability.ability.name, ability.ability.url)
                    }>
                    {({ pressed }) => (
                        <>
                            <MyText
                                style={{
                                    backgroundColor: pressed
                                        ? 'rgb(130,183,255)'
                                        : '#2f4f4f',
                                    marginTop: index === 0 ? 0 : 5,
                                    paddingHorizontal: 10,
                                    paddingVertical: 7,
                                    borderRadius: 5,
                                    color: 'white',
                                    elevation: 5,
                                }}>
                                {ability.ability.name}
                            </MyText>
                            <View>
                                <SmallGreyText
                                    text={`  Slot: ${ability.slot}`}
                                />
                                {ability.is_hidden && (
                                    <SmallGreyText text=" (Hidden)" />
                                )}
                            </View>
                        </>
                    )}
                </Pressable>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
