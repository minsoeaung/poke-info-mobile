import { useState } from 'react';
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const INITIAL_TOP_OFFSET = -65;

const useIsVisible = () => {
    const [isVisible, setIsVisible] = useState(false);

    const top = useSharedValue(INITIAL_TOP_OFFSET);

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: top.value }],
        };
    });

    const show = () => {
        setIsVisible(true);
        top.value = withTiming(10);
    };

    const hide = () => {
        setIsVisible(false);
        top.value = withTiming(INITIAL_TOP_OFFSET);
    };

    const toggle = () => {
        if (top.value === INITIAL_TOP_OFFSET) {
            show();
        } else {
            hide();
        }
    };

    return {
        animatedStyles,
        isVisible,
        toggle,
    };
};

export default useIsVisible;
