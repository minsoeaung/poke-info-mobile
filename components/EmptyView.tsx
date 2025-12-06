import { Feather } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

import MyText from './MyText';
import { colors } from '../constants/colors';

type Props = {
    text?: string;
};

export const EmptyView = ({ text }: Props) => {
    return (
        <View style={styles.container}>
            <Feather name="activity" size={20} color="white" />
            <MyText style={styles.text}>{text || 'None!'}</MyText>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    text: {
        color: colors.text,
    },
});
