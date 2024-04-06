import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

import MyText from './MyText';
import { colors } from '../constants/colors';

import hairlineWidth = StyleSheet.hairlineWidth;

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
                  titleBgColor = 'whitesmoke',
                  children,
                  titleColor = 'black',
                  noElevation = false,
                  childrenGap = 10,
              }: Props) => {
    return (
        <View
            style={[
                styles.container,
                {
                    borderColor: titleBgColor,
                },
            ]}
        >
            {title && (
                <MyText
                    style={StyleSheet.flatten([
                        styles.title,
                        {
                            backgroundColor: titleBgColor,
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
        overflow: 'hidden',
        borderRadius: 5,
        backgroundColor: colors.card,
    },
    title: {
        fontSize: 20,
        paddingHorizontal: 20,
        paddingVertical: 5,
    },
    children: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        gap: 10,
        color: colors.cardText,
    },
});

export default Card;
