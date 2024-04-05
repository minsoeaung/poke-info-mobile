import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import MyText from './MyText';
import { colors } from '../constants/colors';

type Props = {
    onPress: () => void;
};

const ClearInputButton = ({ onPress }: Props) => {
    return (
        <Pressable style={styles.xParent} onPress={onPress}>
            {({ pressed }) => (
                <MyText style={StyleSheet.flatten([styles.x, { color: pressed ? 'tomato' : colors.cardText }])}>
                    X
                </MyText>
            )}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    xParent: {
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    x: {
        fontSize: 20,
    },
});

export default ClearInputButton;
