import { MaterialIcons } from '@expo/vector-icons';
import { getHeaderTitle } from '@react-navigation/elements';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, View } from 'react-native';

import MyText from './MyText';
import { app } from '../constants/colors';

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
                            <MaterialIcons
                                name="arrow-back-ios"
                                style={StyleSheet.flatten([
                                    styles.back,
                                    { color: pressed ? '#00FFFF' : app.lightColor },
                                ])}
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
        backgroundColor: 'tomato',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        fontSize: 22,
    },
    titleText: {
        fontSize: 22,
        paddingVertical: 3,
        letterSpacing: 1,
        textTransform: 'capitalize',
        color: app.lightColor,

        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 1.5, height: 1.5 },
        textShadowRadius: 1,
    },
    back: {
        fontSize: 25,
        paddingRight: 20,
        paddingVertical: 5,
        color: 'tomato',

        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 1.5, height: 1.5 },
        textShadowRadius: 1,
    },
    headerRight: {
        paddingRight: 15,
    },
});

export default MyHeader;
