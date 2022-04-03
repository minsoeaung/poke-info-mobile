import {View} from 'react-native';
import MyText from "../components/MyText";
import {useEffect} from "react";

export default function Type({route, navigation}) {
    const {name, url} = route.params;

    useEffect(() => {
        navigation.setOptions({title: name})
    }, []);

    return (
        <View>
            <MyText>{url}</MyText>
        </View>
    )
}
