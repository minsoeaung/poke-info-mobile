import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AbilitiesStack } from './AbilitiesStack';
import AboutStack from './AboutStack';
import { ItemsStack } from './ItemsStack';
import PokeDexStack from './PokeDexStack';
import MyTabBar from '../components/MyTabBar';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: React.FC = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <BottomTabs.Navigator
                tabBar={props => <MyTabBar {...props} />}
                screenOptions={() => ({ headerShown: false })}
            >
                <BottomTabs.Screen name="PokeDexStack" component={PokeDexStack} options={{ title: 'PokeDex' }} />
                <BottomTabs.Screen name="AbilitiesStack" component={AbilitiesStack} options={{ title: 'Abilities' }} />
                <BottomTabs.Screen name="ItemsStack" component={ItemsStack} options={{ title: 'Items' }} />
                <BottomTabs.Screen name="AboutStack" component={AboutStack} options={{ title: 'About' }} />
            </BottomTabs.Navigator>
        </SafeAreaView>
    );
};
