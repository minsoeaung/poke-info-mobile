import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

import MyText from './MyText';
import { colors } from '../constants/colors';

type Props = {
    label: ReactNode;
    value: ReactNode;
};

const LabelAndValue = ({ label, value }: Props) => {
    return (
        <View style={styles.container}>
            <MyText style={styles.label}>{label}</MyText>
            <View style={styles.value}>
                <MyText style={{ color: colors.cardText }}>{'-  '}</MyText>
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
        fontSize: 14,
        color: colors.cardText,
    },
    value: {
        flex: 3,
        display: 'flex',
        flexDirection: 'row',
    },
});

export default LabelAndValue;
