import { useRef, useState } from 'react';
import { Keyboard, TextInput } from 'react-native';
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const INITIAL_TOP_OFFSET = -65;

const useIsSearchVisible = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<TextInput>(null);

    const top = useSharedValue(INITIAL_TOP_OFFSET);

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: top.value }],
        };
    });

    const show = () => {
        setIsVisible(true);
        top.value = withTiming(10);
        ref?.current?.focus();
    };

    const hide = () => {
        setIsVisible(false);
        top.value = withTiming(INITIAL_TOP_OFFSET);
        Keyboard.dismiss();
    };

    const toggle = () => {
        if (top.value === INITIAL_TOP_OFFSET) {
            show();
        } else {
            hide();
        }
    };

    return {
        ref,
        animatedStyles,
        isVisible,
        toggle,
    };
};

export default useIsSearchVisible;
