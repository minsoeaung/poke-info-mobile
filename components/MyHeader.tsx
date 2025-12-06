import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { getHeaderTitle } from '@react-navigation/elements';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { StyleSheet, TouchableHighlight, TouchableOpacity, View } from 'react-native';

import MyText from './MyText';
import { colors } from '../constants/colors';
import { fonts } from '../constants/fonts';
import { BlurView } from 'expo-blur';

type Props = {
    headerProps: NativeStackHeaderProps;
};

const MyHeader = ({ headerProps }: Props) => {
    const { navigation, route, options, back } = headerProps;
    const title = getHeaderTitle(options, route.name);

    const goBack = () => !!back && navigation.goBack();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={goBack} style={[styles.headerLeft, options.headerStyle]}>
                {back && <AntDesign name="arrow-left" size={24} color="white" />}
                <MyText style={styles.titleText} numberOfLines={1}>
                    {title}
                </MyText>
            </TouchableOpacity>
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
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    headerLeft: {
        flex: 1,
        height: '100%',
        paddingLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    titleText: {
        fontSize: 24,
        lineHeight: 28,
        textTransform: 'uppercase',
        color: colors.headerText,
        letterSpacing: 1,
        fontFamily: fonts.NotoSans_700Bold,

        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 1, height: 1 },
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
        height: '100%',
        paddingRight: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MyHeader;
