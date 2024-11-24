import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet } from 'react-native';

type Props = {
    damageClass: string;
};
export const MoveDamageClass = ({ damageClass }: Props) => {
    if (damageClass === 'physical') {
        return <Image source={require('../assets/move-physical.png')} style={styles.img} contentFit="contain" />;
    } else if (damageClass === 'status') {
        return <Image source={require('../assets/move-status.png')} style={styles.img} contentFit="contain" />;
    } else {
        return <Image source={require('../assets/move-status.png')} style={styles.img} contentFit="contain" />;
    }
};

const styles = StyleSheet.create({
    img: {
        width: 20,
        height: 20,
    },
});
