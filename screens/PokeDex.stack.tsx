import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import ScreenBackButton from '../components/ScreenBackButton';
import { appColor } from '../constants/colors';
import { fonts } from '../constants/fonts';
import { NativeStackParamList } from '../types';
import AbilityDetail from './AbilityDetail';
import PokeDex from './PokeDex';
import PokemonDetail from './PokemonDetail';
import TypeDetail from './TypeDetail';

const Stack = createNativeStackNavigator<NativeStackParamList>();

export const PokeDexStack: React.FC = () => {
    return (
        <Stack.Navigator
            initialRouteName="PokeDex"
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
            <Stack.Screen name="PokeDex" component={PokeDex} />
            <Stack.Screen name="PokemonDetail" component={PokemonDetail} options={ScreenBackButton} />
            <Stack.Screen name="TypeDetail" component={TypeDetail} options={ScreenBackButton} />
            <Stack.Screen name="AbilityDetail" component={AbilityDetail} options={ScreenBackButton} />
        </Stack.Navigator>
    );
};
