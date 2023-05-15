import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

import MyText from './MyText';
import { app } from '../constants/colors';

type Props = {
    title: string;
    titleBgColor: string;
    children: ReactNode;
    titleColor?: string;
    noElevation?: boolean;
};

const TitleAndContent = ({ title, titleBgColor, children, titleColor = app.darkColor, noElevation = false }: Props) => {
    return (
        <View style={[styles.container, { borderColor: titleBgColor, elevation: noElevation ? 0 : 10 }]}>
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
            <View style={styles.children}>{children}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 0.3,
        backgroundColor: app.darkColor,
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        paddingHorizontal: 10,
        paddingVertical: 5,
        elevation: 5,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        letterSpacing: 1,
    },
    children: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        gap: 10,
        // borderBottomLeftRadius: 10,
        // borderBottomRightRadius: 10,
    },
});

export default TitleAndContent;
