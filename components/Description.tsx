import React from 'react';
import { StyleSheet, View } from 'react-native';

import MyText from './MyText';
import { colors } from '../constants/colors';

type DescriptionProps = {
    label: string;
    value: JSX.Element;
    noBorder?: boolean;
    labelFlex?: number;
    valueFlex?: number;
};

export default function Description({ label, value, noBorder, labelFlex = 4, valueFlex = 5 }: DescriptionProps) {
    return (
        <View
            style={[
                styles.types,
                {
                    borderBottomWidth: noBorder ? 0 : 0.5,
                    borderColor: colors.background,
                },
            ]}
        >
            <View style={{ flex: labelFlex }}>
                <MyText style={styles.label}>{label}</MyText>
            </View>
            <View style={{ flex: valueFlex }}>{value}</View>
        </View>
    );
}

const styles = StyleSheet.create({
    types: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
    },
    label: {
        color: colors.text,
        letterSpacing: 1,
    },
});
