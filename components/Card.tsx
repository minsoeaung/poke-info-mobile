import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

import { appColor } from '../constants/colors';
import MyText from './MyText';

const Card = ({ children, title, titleBgColor }: { children: ReactNode; title?: string; titleBgColor?: string }) => {
    if (!children) return null;

    return (
        <View style={styles.container}>
            {!!title && (
                <MyText style={StyleSheet.flatten([styles.title, { backgroundColor: titleBgColor }])}>{title}</MyText>
            )}
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: appColor.secondary,
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginBottom: 15,
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
});

export default Card;
