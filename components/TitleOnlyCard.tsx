import { StyleSheet, View } from 'react-native';

import MyText from './MyText';
import { app } from '../constants/colors';

type Props = {
    borderColor: string;
    title: string;
    titleBgColor: string;
};

const TitleOnlyCard = ({ borderColor, title, titleBgColor }: Props) => {
    return (
        <View style={[styles.container, { borderColor }]}>
            <MyText
                style={StyleSheet.flatten([
                    styles.title,
                    {
                        backgroundColor: titleBgColor + app.transparency,
                        color: app.darkColor,
                    },
                ])}
            >
                {title}
            </MyText>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: StyleSheet.hairlineWidth,
        backgroundColor: app.darkColor,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    title: {
        fontSize: 18,
        paddingHorizontal: 10,
        paddingVertical: 5,
        elevation: 5,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        letterSpacing: 1,
        textTransform: 'capitalize',
    },
});

export default TitleOnlyCard;
