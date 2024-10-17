import { useCallback } from 'react';
import { Alert, Linking, Pressable, StyleSheet } from 'react-native';

import MyText from './MyText';

type Props = {
    url: string;
    children: string;
};

const OpenURLTextButton = ({ url, children }: Props) => {
    const handlePress = useCallback(async () => {
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
        }
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
    },
});

export default OpenURLTextButton;
