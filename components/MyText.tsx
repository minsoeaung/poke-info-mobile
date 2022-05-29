import { Text, TextStyle, ViewStyle } from 'react-native';

import { fonts } from '../constants/fonts';

type Props = {
    style?: ViewStyle & TextStyle;
    children: string | number;
};

export default function MyText(props: Props) {
    const { style, children } = props;

    return (
        <Text {...props} style={{ ...style, fontFamily: fonts.fontDotGothic }}>
            {children}
        </Text>
    );
}
