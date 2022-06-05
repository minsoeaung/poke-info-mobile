import { StyleSheet, View } from 'react-native';

import MyText from '../components/MyText';
import { appColor } from '../constants/colors';

const About = () => {
    return (
        <View style={styles.container}>
            <View style={styles.boxWrap}>
                <MyText style={styles.description}>
                    Pokémon images and names Ⓒ 1995-2022 Nintendo/Game Freak.
                </MyText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: appColor.appBg,
    },
    boxWrap: {
        marginBottom: 10,
        backgroundColor: appColor.headerBg,
        borderRadius: 10,
        borderWidth: 0.5,
        paddingHorizontal: 10,
    },
    boxTitle: {
        fontSize: 20,
        padding: 10,
        color: '#000',
    },
    description: {
        padding: 10,
    },
    footer: {
        marginBottom: 10,
    },
});

export default About;
