import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

import MyText from './MyText';
import { colors } from '../constants/colors';

type Props = {
    children: ReactNode;
    title?: string;
    titleBgColor?: string;
    titleColor?: string;
    childrenGap?: number;
};

const cardBorderRadius = 0;

const Card = ({ title, titleBgColor = 'whitesmoke', children, titleColor = 'black', childrenGap = 10 }: Props) => {
    return (
        <View style={styles.container}>
            {title && <CardTitle titleBgColor={titleBgColor} titleColor={titleColor} title={title} />}
            <CardBody childrenGap={childrenGap}>{children}</CardBody>
        </View>
    );
};

export const CardTitle = ({
    titleBgColor = 'whitesmoke',
    titleColor = 'black',
    title,
    marginTop,
}: {
    titleBgColor?: string;
    titleColor?: string;
    marginTop?: number;
    title: string;
}) => {
    return (
        <MyText
            style={StyleSheet.flatten([
                styles.title,
                {
                    backgroundColor: titleBgColor,
                    color: titleColor,
                    marginTop,
                },
            ])}
            fontWeight="medium"
        >
            {title}
        </MyText>
    );
};

export const CardBody = ({ childrenGap = 10, children }: { childrenGap?: number; children: ReactNode }) => {
    return <View style={[styles.children, { gap: childrenGap }]}>{children}</View>;
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.card,
        borderRadius: cardBorderRadius,
        overflow: 'hidden',
    },
    title: {
        fontSize: 20,
        lineHeight: 24,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderTopLeftRadius: cardBorderRadius,
        borderTopRightRadius: cardBorderRadius,
        overflow: 'hidden',
    },
    children: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        gap: 10,
        color: colors.cardText,
        backgroundColor: colors.card,

        borderBottomLeftRadius: cardBorderRadius,
        borderBottomRightRadius: cardBorderRadius,
        overflow: 'hidden',
    },
});

export default Card;
