import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Constants from 'expo-constants';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { AbilitiesStack } from './AbilitiesStack';
import AboutStack from './AboutStack';
import { ItemsStack } from './ItemsStack';
import PokeDexStack from './PokeDexStack';
import MyTabBar from '../components/MyTabBar';
import { colors } from '../constants/colors';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: React.FC = () => {
    return (
        <View style={styles.main}>
            <BottomTabs.Navigator
                tabBar={props => <MyTabBar {...props} />}
                screenOptions={() => ({ headerShown: false })}
                sceneContainerStyle={{ backgroundColor: colors.background }}
            >
                <BottomTabs.Screen name="PokeDexStack" component={PokeDexStack} options={{ title: 'PokeDex' }} />
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
        paddingTop: Constants.statusBarHeight,
        backgroundColor: colors.background,
    },
});
