import AntDesign from '@expo/vector-icons/AntDesign';
import { getHeaderTitle } from '@react-navigation/elements';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, View } from 'react-native';

import MyText from './MyText';
import { app } from '../constants/colors';
import { fonts } from '../constants/fonts';

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
                            <AntDesign
                                name="back"
                                style={StyleSheet.flatten([styles.back, { color: pressed ? 'tomato' : app.darkColor }])}
                            />
                        )}
                        <MyText style={styles.titleText} numberOfLines={1}>
                            {title}
                        </MyText>
                    </View>
                )}
            </Pressable>
            {typeof options.headerRight === 'function' && (
                <View style={styles.headerRight}>{options.headerRight({ canGoBack: !!back })}</View>
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
        letterSpacing: 1,
    },
    back: {
        fontSize: 25,
        paddingRight: 20,
        paddingVertical: 5,
    },
    headerRight: {
        paddingRight: 15,
    },
});

export default MyHeader;
