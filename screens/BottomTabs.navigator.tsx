import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';

import { appColor } from '../constants/colors';
import { fonts } from '../constants/fonts';
import { AbilitiesStack } from './Abilities.stack';
import { ItemsStack } from './Items.stack';
import { PokeDexStack } from './PokeDex.stack';
import AboutStack from './About.stack';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: React.FC = () => {
    return (
        <BottomTabs.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: appColor.headerBg,
                    paddingBottom: 5,
                    borderTopWidth: 0.5,
                    borderTopColor: appColor.border,
                },
                tabBarLabelStyle: {
                    fontFamily: fonts.fontDotGothic,
                },
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'PokeDexTab') {
                        iconName = 'pokemon-go';
                    } else if (route.name === 'AbilitiesTab') {
                        iconName = 'alpha-a-box-outline';
                    } else if (route.name === 'ItemsTab') {
                        iconName = 'toolbox-outline';
                    } else if (route.name === 'AboutTab') {
                        iconName = 'alert-octagon-outline';
                    }

                    return (
                        <Ionicons
                            name={iconName || ''}
                            size={size}
                            color={color}
                        />
                    );
                },
                tabBarActiveTintColor: appColor.tabBarActive,
                tabBarInactiveTintColor: 'gray',
            })}>
            <BottomTabs.Screen
                name="PokeDexTab"
                component={PokeDexStack}
                options={{ title: 'PokeDex' }}
            />
            <BottomTabs.Screen
                name="AbilitiesTab"
                component={AbilitiesStack}
                options={{ title: 'Abilities' }}
            />
            <BottomTabs.Screen
                name="ItemsTab"
                component={ItemsStack}
                options={{ title: 'Items' }}
            />
            <BottomTabs.Screen
                name="AboutTab"
                component={AboutStack}
                options={{ title: 'About' }}
            />
        </BottomTabs.Navigator>
    );
};
