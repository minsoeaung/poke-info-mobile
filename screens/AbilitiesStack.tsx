import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import AbilityDetail from './AbilityDetail';
import AbilityList from './AbilityList';
import PokemonDetail from './PokemonDetail';
import TypeDetail from './TypeDetail';
import MyHeader from '../components/MyHeader';
import { NativeStackParamList } from '../types';

const Stack = createNativeStackNavigator<NativeStackParamList>();

export const AbilitiesStack: React.FC = () => {
    return (
        <Stack.Navigator
            initialRouteName="AbilityList"
            screenOptions={{
                header: props => <MyHeader headerProps={props} />,
            }}
        >
            <Stack.Screen name="AbilityList" component={AbilityList} options={{ title: 'Abilities' }} />
            <Stack.Screen name="AbilityDetail" component={AbilityDetail} />
            <Stack.Screen name="PokemonDetail" component={PokemonDetail} />
            <Stack.Screen name="TypeDetail" component={TypeDetail} />
        </Stack.Navigator>
    );
};
