import {Pressable, View} from "react-native";
import MyText from "./MyText";

export default function Abilities({abilities, navigation}) {
    const goToAbility = (name, url) => () => {
        navigation.push('Ability', {name, url});
    }

    return (
        <View style={{alignItems: 'flex-start'}}>
            {abilities.map((ability, index) => (
                <Pressable
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                    onPress={goToAbility(ability.ability.name, ability.ability.url)}
                >
                    {({pressed}) => (
                        <>
                            <MyText
                                style={{
                                    backgroundColor: pressed
                                        ? 'rgb(130,183,255)'
                                        : '#2f4f4f',
                                    paddingHorizontal: 10,
                                    paddingVertical: 7,
                                    borderRadius: 5,
                                    color: 'white',
                                    marginTop: index === 0 ? 0 : 5,
                                    elevation: 5
                                }}
                            >
                                {ability.ability.name}
                            </MyText>
                            <MyText>{ability.is_hidden && ' (Hidden)'}</MyText>
                        </>
                    )}
                </Pressable>
            ))}
        </View>
    )
}
