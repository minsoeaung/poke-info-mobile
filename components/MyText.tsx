import { ReactNode } from 'react';
import { Text, TextStyle } from 'react-native';

import { colors } from '../constants/colors';
import { fonts } from '../constants/fonts';

type Props = {
    style?: TextStyle;
    children: string | number | ReactNode;
    numberOfLines?: number;
    fontWeight?: 'regular' | 'medium' | 'bold';
};

const fontWeightToFamily: Record<Exclude<Props['fontWeight'], undefined>, string> = {
    regular: fonts.NotoSans_400Regular,
    medium: fonts.NotoSans_600SemiBold,
    bold: fonts.NotoSans_700Bold,
};

export default function MyText(props: Props) {
    const { style, children, numberOfLines, fontWeight = 'regular' } = props;

    return (
        <Text
            {...props}
            style={{
                color: 'white',
                fontFamily: fontWeightToFamily[fontWeight],
                fontWeight,
                fontSize: 14,
                lineHeight: 25,
                ...style,
            }}
            numberOfLines={numberOfLines ? numberOfLines : 0}
        >
            {children}
        </Text>
    );
}
