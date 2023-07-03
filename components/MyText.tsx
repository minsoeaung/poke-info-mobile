import { ReactNode } from 'react';
import { Text, TextStyle } from 'react-native';

import { app } from '../constants/colors';
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
            style={{ color: app.darkColor, fontFamily: fonts.audioWide, ...style }}
            numberOfLines={numberOfLines ? numberOfLines : 0}
        >
            {children}
        </Text>
    );
}
