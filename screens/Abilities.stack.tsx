import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import ScreenBackButton from '../components/ScreenBackButton';
import { appColor } from '../constants/colors';
import { fonts } from '../constants/fonts';
import AbilityDetail from './AbilityDetail';
import AbilityList from './AbilityList';
import PokemonDetail from './PokemonDetail';
import TypeDetail from './TypeDetail';

const Stack = createNativeStackNavigator();

export const AbilitiesStack: React.FC = () => {
    return (
        <Stack.Navigator
            initialRouteName="AbilityList"
            screenOptions={{
                headerStyle: {
                    backgroundColor: appColor.headerBg,
                },
                headerTintColor: appColor.headerFont,
                headerTitleStyle: {
                    fontFamily: fonts.fontDotGothic,
                    fontSize: 22,
                },
            }}>
            <Stack.Screen
                name="AbilityList"
                component={AbilityList}
                options={{ title: 'Abilities' }}
            />
            <Stack.Screen
                name="AbilityDetail"
                component={AbilityDetail}
                options={ScreenBackButton}
            />
            <Stack.Screen
                name="PokemonDetail"
                component={PokemonDetail}
                options={ScreenBackButton}
            />
            <Stack.Screen
                name="TypeDetail"
                component={TypeDetail}
                options={ScreenBackButton}
            />
        </Stack.Navigator>
    );
};
