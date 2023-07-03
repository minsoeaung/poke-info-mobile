import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

import MyText from './MyText';
import { app } from '../constants/colors';

type Props = {
    children: ReactNode;
    title?: string;
    titleBgColor?: string;
    titleColor?: string;
    noElevation?: boolean;
    childrenGap?: number;
};

const Card = ({
    title,
    titleBgColor = app.lightColor,
    children,
    titleColor = app.darkColor,
    noElevation = false,
    childrenGap = 10,
}: Props) => {
    return (
        <View
            style={[
                styles.container,
                {
                    borderColor: titleBgColor,
                    elevation: noElevation ? 0 : 10,
                },
            ]}
        >
            {title && (
                <MyText
                    style={StyleSheet.flatten([
                        styles.title,
                        {
                            backgroundColor: titleBgColor + app.transparency,
                            color: titleColor,
                        },
                    ])}
                >
                    {title}
                </MyText>
            )}
            <View style={[styles.children, { gap: childrenGap }]}>{children}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: app.grey + app.transparency,
        overflow: 'hidden',
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        paddingHorizontal: 20,
        paddingVertical: 3,
        elevation: 5,
        letterSpacing: 1,
        textTransform: 'capitalize',

        textShadowColor: 'rgba(255, 255, 255, 1)',
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 1,
    },
    children: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        gap: 10,
    },
});

export default Card;
