import { StyleSheet, View } from 'react-native';

import MyText from './MyText';
import getFormattedName from '../utils/getFormattedName';

type Props = {
    borderColor: string;
    title: string;
    titleBgColor: string;
};

const TitleOnlyCard = ({ borderColor, title, titleBgColor }: Props) => {
    return (
        <View style={[styles.container, { borderColor, backgroundColor: titleBgColor }]}>
            <MyText
                style={StyleSheet.flatten([
                    styles.title,
                    {
                        color: 'black',
                    },
                ])}
                fontWeight="medium"
            >
                {getFormattedName(title)}
            </MyText>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'whitesmoke',
        overflow: 'hidden',
    },
    title: {
        fontSize: 20,
        lineHeight: 24,
        paddingHorizontal: 20,
        paddingVertical: 5,

        textShadowColor: 'rgba(255, 255, 255, 1)',
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 1,
    },
});

export default TitleOnlyCard;
