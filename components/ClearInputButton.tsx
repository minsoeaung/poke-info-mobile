import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import MyText from './MyText';

type Props = {
    onPress: () => void;
};

const ClearInputButton = ({ onPress }: Props) => {
    return (
        <Pressable style={styles.xParent} onPress={onPress}>
            {({ pressed }) => (
                <MyText style={StyleSheet.flatten([styles.x, { color: pressed ? 'tomato' : 'grey' }])}>X</MyText>
            )}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    xParent: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 6,
    },
    x: {
        width: 16,
        height: 16,
    },
});

export default ClearInputButton;
