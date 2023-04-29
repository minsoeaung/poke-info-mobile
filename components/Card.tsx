import { ReactNode } from 'react';
import { ColorValue, StyleSheet, View } from 'react-native';

import MyText from './MyText';
import { app } from '../constants/colors';

type Props = {
    children: ReactNode;
    title?: string;
    titleBgColor?: ColorValue;
    cardBgColor?: ColorValue;
};

const Card = ({ children, title, titleBgColor, cardBgColor }: Props) => {
    if (!children) return null;

    return (
        <View style={[styles.container, { backgroundColor: cardBgColor ? cardBgColor : app.lightColor }]}>
            {!!title && (
                <MyText
                    style={StyleSheet.flatten([
                        styles.title,
                        { backgroundColor: titleBgColor ? titleBgColor : app.lightColor },
                    ])}
                >
                    {title}
                </MyText>
            )}
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: app.lightColor,
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginBottom: 15,
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginBottom: 5,
    },
});

export default Card;
