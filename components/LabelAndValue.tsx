import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

import MyText from './MyText';
import { app } from '../constants/colors';

type Props = {
    label: string;
    value: ReactNode;
};

const LabelAndValue = ({ label, value }: Props) => {
    return (
        <View style={styles.container}>
            <MyText style={styles.label}>{label}</MyText>
            <View style={styles.value}>
                <MyText style={{ color: app.lightColor }}>{'-  '}</MyText>
                {value}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
    },
    label: {
        flex: 2,
        color: app.lightColor,
        // color: 'tomato',
        textTransform: 'capitalize',
        fontSize: 13,
    },
    value: {
        flex: 3,
        display: 'flex',
        flexDirection: 'row',
        color: app.lightColor,
    },
});

export default LabelAndValue;
