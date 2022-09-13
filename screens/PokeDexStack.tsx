import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import MyHeader from '../components/MyHeader';
import { NativeStackParamList } from '../types';
import AbilityDetail from './AbilityDetail';
import PokeDex from './PokeDex';
import PokemonDetail from './PokemonDetail';
import TypeDetail from './TypeDetail';

const Stack = createNativeStackNavigator<NativeStackParamList>();

const PokeDexStack: React.FC = () => {
    return (
        <Stack.Navigator
            initialRouteName="PokeDex"
            screenOptions={{
                header: props => <MyHeader headerProps={props} />,
            }}>
            <Stack.Screen name="PokeDex" component={PokeDex} />
            <Stack.Screen name="PokemonDetail" component={PokemonDetail} />
            <Stack.Screen name="TypeDetail" component={TypeDetail} />
            <Stack.Screen name="AbilityDetail" component={AbilityDetail} />
        </Stack.Navigator>
    );
};

export default PokeDexStack;
