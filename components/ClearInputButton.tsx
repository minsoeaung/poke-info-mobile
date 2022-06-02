import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import MyText from './MyText';

type Props = {
    setValue: React.Dispatch<React.SetStateAction<string>>;
};

const ClearInputButton = ({ setValue }: Props) => {
    return (
        <Pressable style={styles.xParent} onPress={() => setValue('')}>
            {({ pressed }) => (
                <MyText
                    style={StyleSheet.flatten([
                        styles.x,
                        { color: pressed ? 'tomato' : 'black' },
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
