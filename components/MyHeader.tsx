import { getHeaderTitle } from '@react-navigation/elements';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, View } from 'react-native';

import { appColor } from '../constants/colors';
import MyText from './MyText';

type Props = {
    headerProps: NativeStackHeaderProps;
};

const MyHeader = ({ headerProps }: Props) => {
    const { navigation, route, options, back } = headerProps;
    const title = getHeaderTitle(options, route.name);

    const goBack = () => !!back && navigation.goBack();

    return (
        <View style={styles.headerContainer}>
            <View style={styles.titleContainer}>
                {back && (
                    <Pressable onPress={goBack}>
                        {({ pressed }) => (
                            <View style={styles.backBox}>
                                <MyText
                                    style={StyleSheet.flatten([
                                        styles.back,
                                        { color: pressed ? 'tomato' : appColor.primary },
                                    ])}>
                                    {'<'}
                                </MyText>
                            </View>
                        )}
                    </Pressable>
                )}
                <View style={styles.box}>
                    <MyText style={styles.title}>{title}</MyText>
                </View>
            </View>
            {typeof options.headerRight === 'function' && (
                // @ts-ignore
                <View style={styles.headerRight}>{options.headerRight()}</View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        height: 56,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: appColor.primary,
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    backBox: {
        backgroundColor: appColor.secondary,
    },
    box: {
        backgroundColor: appColor.secondary,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    title: {
        fontSize: 25,
        paddingHorizontal: 30,
        paddingVertical: 5,
    },
    back: {
        fontSize: 25,
        paddingHorizontal: 20,
        paddingVertical: 5,
    },
    headerRight: {
        paddingRight: 15,
    },
});

export default MyHeader;
