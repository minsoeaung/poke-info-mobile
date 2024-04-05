import { getHeaderTitle } from '@react-navigation/elements';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { StyleSheet, TouchableHighlight, View } from 'react-native';

import MyText from './MyText';
import { colors } from '../constants/colors';

import { AntDesign } from '@expo/vector-icons';

type Props = {
    headerProps: NativeStackHeaderProps;
};

const MyHeader = ({ headerProps }: Props) => {
    const { navigation, route, options, back } = headerProps;
    const title = getHeaderTitle(options, route.name);

    const goBack = () => !!back && navigation.goBack();

    return (
        <View style={styles.container}>
            <TouchableHighlight onPress={goBack}>
                <View style={[styles.headerLeft, options.headerStyle]}>
                    <MyText style={styles.titleText} numberOfLines={1}>
                        {back && <AntDesign name="back" size={24} color="white" />}
                        {' '}
                        {title}
                    </MyText>
                </View>
            </TouchableHighlight>
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
        backgroundColor: colors.background,
    },
    headerLeft: {
        backgroundColor: 'tomato',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        overflow: 'hidden',
        paddingHorizontal: 20,
        flexDirection: 'row',
        fontSize: 24,
    },
    titleText: {
        fontSize: 24,
        paddingVertical: 5,
        letterSpacing: 1,
        textTransform: 'capitalize',
        color: colors.headerText,

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
        paddingRight: 15,
    },
});

export default MyHeader;
