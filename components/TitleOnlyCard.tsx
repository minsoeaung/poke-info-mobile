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
        backgroundColor: app.darkColor,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden',
    },
    title: {
        fontSize: 18,
        paddingHorizontal: 20,
        paddingVertical: 3,
        letterSpacing: 1,
        elevation: 5,
        textTransform: 'capitalize',

        textShadowColor: 'rgba(255, 255, 255, 1)',
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 1,
    },
});

export default TitleOnlyCard;
