import { StyleSheet, View } from 'react-native';

import MyText from './MyText';
import { colors } from '../constants/colors';

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
                        backgroundColor: titleBgColor + colors.transparency,
                        color: colors.background,
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
        backgroundColor: 'whitesmoke',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        overflow: 'hidden',
    },
    title: {
        fontSize: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        textShadowColor: 'rgba(255, 255, 255, 1)',
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 1,
    },
});

export default TitleOnlyCard;
