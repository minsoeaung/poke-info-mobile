import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import MyHeader from '../components/MyHeader';
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
                header: props => <MyHeader headerProps={props} />,
                headerStyle: {
                    backgroundColor: appColor.secondary,
                },
                headerTintColor: appColor.headerFont,
                headerTitleStyle: {
                    fontFamily: fonts.fontDotGothic,
                    fontSize: 22,
                },
            }}>
            <Stack.Screen name="AbilityList" component={AbilityList} options={{ title: 'Abilities' }} />
            <Stack.Screen name="AbilityDetail" component={AbilityDetail} />
            <Stack.Screen name="PokemonDetail" component={PokemonDetail} />
            <Stack.Screen name="TypeDetail" component={TypeDetail} />
        </Stack.Navigator>
    );
};
