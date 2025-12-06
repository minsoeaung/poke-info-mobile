import { FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons } from '@expo/vector-icons';
import { createBottomTabNavigator, useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AbilitiesStack } from './AbilitiesStack';
import AboutStack from './AboutStack';
import { ItemsStack } from './ItemsStack';
import { MovesStack } from './MovesStack';
import PokeDexStack from './PokeDexStack';
import { colors } from '../constants/colors';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: React.FC = () => {
    const { top } = useSafeAreaInsets();
    return (
        <View style={[styles.main, { paddingTop: top }]}>
            <BottomTabs.Navigator
                screenOptions={({ route }) => {
                    return {
                        tabBarIcon: ({ color, focused, size }) => {
                            if (route.name === 'PokeDexStack') {
                                return <MaterialIcons size={size} color={color} name="catching-pokemon" />;
                            } else if (route.name === 'MovesStack') {
                                return <MaterialCommunityIcons size={size} color={color} name="lightning-bolt" />;
                            } else if (route.name === 'AbilitiesStack') {
                                return <FontAwesome6 size={size} color={color} name="dumbbell" />;
                            } else if (route.name === 'ItemsStack') {
                                return <Octicons size={size} color={color} name="tools" />;
                            } else if (route.name === 'AboutStack') {
                                return <Ionicons size={size} color={color} name="settings" />;
                            }
                        },
                        headerShown: false,
                        tabBarStyle: {
                            position: 'absolute',
                        },
                        tabBarBackground: () => (
                            <BlurView
                                tint="dark"
                                experimentalBlurMethod="dimezisBlurView"
                                intensity={35}
                                style={StyleSheet.absoluteFill}
                            />
                        ),
                    };
                }}
                sceneContainerStyle={{ backgroundColor: colors.background }}
            >
                <BottomTabs.Screen name="PokeDexStack" component={PokeDexStack} options={{ title: 'PokeDex' }} />
                <BottomTabs.Screen name="MovesStack" component={MovesStack} options={{ title: 'Moves' }} />
                <BottomTabs.Screen name="AbilitiesStack" component={AbilitiesStack} options={{ title: 'Abilities' }} />
                <BottomTabs.Screen name="ItemsStack" component={ItemsStack} options={{ title: 'Items' }} />
                <BottomTabs.Screen name="AboutStack" component={AboutStack} options={{ title: 'Settings' }} />
            </BottomTabs.Navigator>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: colors.background,
    },
});
