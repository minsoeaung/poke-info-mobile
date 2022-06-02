import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import MyText from './MyText';

type Props = {
    func: () => void;
};

const ClearInputButton = ({ func }: Props) => {
    return (
        <Pressable style={styles.xParent} onPress={() => func()}>
            {({ pressed }) => (
                <MyText
                    style={StyleSheet.flatten([
                        styles.x,
                        { color: pressed ? 'tomato' : 'grey' },
                    ])}>
                    X
                </MyText>
            )}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    xParent: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 5,
    },
    x: {
        width: 16,
        height: 16,
    },
});

export default ClearInputButton;
