import {Text} from 'react-native';

export default function MyText(props) {
    const {style} = props;

    return (
        <Text
            {...props}
            style={{...style, fontFamily: 'DotGothic16_400Regular'}}
        >
            {props.children}
        </Text>
    )
}
