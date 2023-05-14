import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

import MyText from './MyText';

type Props = {
    femalePercent: number;
    malePercent: number;
};

const Gender = ({ malePercent, femalePercent }: Props) => {
    return (
        <View style={styles.container}>
            <Ionicons name="male-outline" color="black" />
            <MyText style={StyleSheet.flatten([styles.txt, styles.male])}>{malePercent}%</MyText>
            <Ionicons name="female-outline" color="black" />
            <MyText style={StyleSheet.flatten([styles.txt, styles.female])}>{femalePercent}%</MyText>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 10,
    },
    male: {
        marginRight: 10,
    },
    female: {},
    txt: {
        letterSpacing: 2,
    },
});

export default Gender;
