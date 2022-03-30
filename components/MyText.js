import {Text} from 'react-native';

export default function MyText(props) {
    return <Text style={{fontFamily: 'DotGothic16_400Regular'}} {...props}>{props.children}</Text>
}
