import { Text, TextStyle } from 'react-native';

import { appColor } from '../constants/colors';
import { fonts } from '../constants/fonts';

type Props = {
    style?: TextStyle;
    children: string | number;
    numberOfLines?: number;
};

export default function MyText(props: Props) {
    const { style, children, numberOfLines } = props;

    return (
        <Text
            {...props}
            style={{ color: appColor.primary, ...style, fontFamily: fonts.fontDotGothic }}
            numberOfLines={numberOfLines ? numberOfLines : 0}>
            {children}
        </Text>
    );
}
