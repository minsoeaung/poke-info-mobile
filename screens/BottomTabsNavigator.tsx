import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';

import { appColor } from '../constants/colors';
import { fonts } from '../constants/fonts';
import { AbilitiesStack } from './AbilitiesStack';
import AboutStack from './AboutStack';
import { ItemsStack } from './ItemsStack';
import PokeDexStack from './PokeDexStack';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: React.FC = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <BottomTabs.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: appColor.primary,
                        paddingBottom: 5,
                        borderTopWidth: 0.5,
                        borderTopColor: appColor.border,
                    },
                    tabBarLabelStyle: {
                        fontFamily: fonts.fontDotGothic,
                    },
                    tabBarIcon: ({ color, size }) => {
                        let iconName;

                        if (route.name === 'PokeDexStack') {
                            iconName = 'pokemon-go';
                        } else if (route.name === 'AbilitiesStack') {
                            iconName = 'alpha-a-box-outline';
                        } else if (route.name === 'ItemsStack') {
                            iconName = 'toolbox-outline';
                        } else if (route.name === 'AboutStack') {
                            iconName = 'alert-octagon-outline';
                        }

                        return <Ionicons name={iconName || ''} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: appColor.secondary,
                })}>
                <BottomTabs.Screen name="PokeDexStack" component={PokeDexStack} options={{ title: 'PokeDex' }} />
                <BottomTabs.Screen name="AbilitiesStack" component={AbilitiesStack} options={{ title: 'Abilities' }} />
                <BottomTabs.Screen name="ItemsStack" component={ItemsStack} options={{ title: 'Items' }} />
                <BottomTabs.Screen name="AboutStack" component={AboutStack} options={{ title: 'About' }} />
            </BottomTabs.Navigator>
        </SafeAreaView>
    );
};
