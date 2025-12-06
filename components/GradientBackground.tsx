import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';

export const GradientBackground = () => {
    return (
        <>
            <LinearGradient
                colors={[
                    'rgba(20, 40, 80, 1)', // top dark blue
                    'rgba(10, 25, 55, 1)', // middle navy
                    'rgba(20, 30, 60, 1)', // bottom slightly purple
                ]}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={StyleSheet.absoluteFill}
            />
            <LinearGradient
                colors={['rgba(255,255,255,0.12)', 'rgba(255,255,255,0)']}
                style={{
                    position: 'absolute',
                    width: 400,
                    height: 400,
                    borderRadius: 200,
                    top: 200,
                    left: -50,
                }}
            />
        </>
    );
};
