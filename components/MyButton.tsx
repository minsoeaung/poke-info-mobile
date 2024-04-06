import { ReactNode } from 'react';
import { Pressable, StyleSheet, View, ViewStyle } from 'react-native';

type Props = {
    children: ReactNode;
    onPress: () => void;
    styles?: ViewStyle;
};

export const MyButton = ({ children, onPress, styles }: Props) => {
    return (
        <Pressable onPress={onPress}>
            {({ pressed }) => (
                <View
                    style={StyleSheet.flatten([
                        {
                            borderWidth: 2,
                            borderColor: pressed ? 'tomato' : 'transparent',
                        },
                        styles,
                    ])}
                >
                    {children}
                </View>
            )}
        </Pressable>
    );
};
