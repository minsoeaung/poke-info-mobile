import { ReactNode } from 'react';
import { Text, TextStyle } from 'react-native';

import { colors } from '../constants/colors';
import { fonts } from '../constants/fonts';

type Props = {
    style?: TextStyle;
    children: string | number | ReactNode;
    numberOfLines?: number;
};

export default function MyText(props: Props) {
    const { style, children, numberOfLines } = props;

    return (
        <Text
            {...props}
            style={{ color: colors.background, fontFamily: fonts.fontDotGothic, ...style }}
            numberOfLines={numberOfLines ? numberOfLines : 0}
        >
            {children}
        </Text>
    );
}
