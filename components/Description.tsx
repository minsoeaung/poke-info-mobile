import React from 'react';
import { StyleSheet, View } from 'react-native';

import MyText from './MyText';

type DescriptionProps = {
    label: string;
    value: JSX.Element;
    noBorder?: boolean;
    labelFlex?: number;
    valueFlex?: number;
};

export default function Description({
    label,
    value,
    noBorder,
    labelFlex = 2,
    valueFlex = 3,
}: DescriptionProps) {
    return (
        <View
            style={{
                ...styles.types,
                borderBottomWidth: noBorder ? 0 : 1,
                borderColor: 'tomato',
            }}>
            <View style={{ flex: labelFlex }}>
                <MyText style={styles.secondary}>{label}</MyText>
            </View>
            <View style={{ flex: valueFlex }}>{value}</View>
        </View>
    );
}

const styles = StyleSheet.create({
    types: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        marginHorizontal: 10,
    },
    secondary: {
        color: 'grey',
    },
});
