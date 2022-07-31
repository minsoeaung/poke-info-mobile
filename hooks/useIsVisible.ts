import { useCallback, useState } from 'react';
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const initialPosition = -65;

const useIsVisible = () => {
    const [isVisible, setIsVisible] = useState(false);
    const top = useSharedValue(initialPosition);
    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: top.value }],
        };
    });

    const show = useCallback(() => {
        setIsVisible(true);
        top.value = withTiming(10);
    }, []);

    const hide = useCallback(() => {
        setIsVisible(false);
        top.value = withTiming(initialPosition);
    }, []);

    const toggle = () => {
        if (top.value === initialPosition) {
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
