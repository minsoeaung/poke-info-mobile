import {Pressable, View} from "react-native";
import MyText from "./MyText";
import SmallGreyText from "./SmallGreyText";

export default function Abilities({abilities, navigation}) {
    const goToAbility = (name, url) => () => {
        navigation.push('AbilityDetail', {name, url});
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
                            <View>
                                <SmallGreyText text={`  Slot: ${ability.slot}`}/>
                                {ability.is_hidden && <SmallGreyText text=' (Hidden)'/>}
                            </View>
                        </>
                    )}
                </Pressable>
            ))}
        </View>
    )
}
