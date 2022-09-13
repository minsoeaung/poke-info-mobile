import { getHeaderTitle } from '@react-navigation/elements';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, View } from 'react-native';

import { app } from '../constants/colors';
import { fonts } from '../constants/fonts';
import MyText from './MyText';

type Props = {
    headerProps: NativeStackHeaderProps;
};

const MyHeader = ({ headerProps }: Props) => {
    const { navigation, route, options, back } = headerProps;
    const title = getHeaderTitle(options, route.name);

    const goBack = () => !!back && navigation.goBack();

    return (
        <View style={styles.container}>
            <Pressable onPress={goBack}>
                {({ pressed }) => (
                    <View style={[styles.headerLeft, options.headerStyle]}>
                        {back && (
                            <MyText
                                style={StyleSheet.flatten([
                                    styles.backText,
                                    { color: pressed ? 'tomato' : app.darkColor },
                                ])}>
                                {'<'}
                            </MyText>
                        )}
                        <MyText style={styles.titleText} numberOfLines={1}>
                            {title}
                        </MyText>
                    </View>
                )}
            </Pressable>
            {typeof options.headerRight === 'function' && (
                // @ts-ignore
                <View style={styles.headerRight}>{options.headerRight()}</View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 56,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: app.darkColor,
    },
    headerLeft: {
        backgroundColor: app.lightColor,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        fontFamily: fonts.fontDotGothic,
        fontSize: 22,
    },
    titleText: {
        fontSize: 25,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    backText: {
        fontSize: 25,
        paddingRight: 20,
        paddingVertical: 5,
    },
    headerRight: {
        paddingRight: 15,
    },
});

export default MyHeader;
