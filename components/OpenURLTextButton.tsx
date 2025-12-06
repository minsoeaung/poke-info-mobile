import { useCallback } from 'react';
import { Alert, Linking, Pressable, StyleSheet } from 'react-native';

import MyText from './MyText';

type Props = {
    url: string;
    children: string;
};

const OpenURLTextButton = ({ url, children }: Props) => {
    const handlePress = useCallback(async () => {
        await Linking.openURL(url);
    }, [url]);

    return (
        <Pressable onPress={handlePress}>
            <MyText style={styles.text}>{children}</MyText>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    text: {
        color: 'tomato',
        textDecorationLine: 'underline',
        fontSize: 16,
    },
});

export default OpenURLTextButton;
