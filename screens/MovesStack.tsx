import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import AbilityDetail from './AbilityDetail';
import PokemonDetail from './PokemonDetail';
import TypeDetail from './TypeDetail';
import MyHeader from '../components/MyHeader';
import { StackParamList } from '../types';
import MoveDetail from './MoveDetail';
import MoveList from './MoveList';

const Stack = createNativeStackNavigator<StackParamList>();

export const MovesStack: React.FC = () => {
    return (
        <Stack.Navigator
            initialRouteName="MoveList"
            screenOptions={{
                header: props => <MyHeader headerProps={props} />,
                animation: 'fade',
            }}
        >
            <Stack.Screen name="MoveList" component={MoveList} options={{ title: 'Moves' }} />
            <Stack.Screen name="AbilityDetail" component={AbilityDetail} />
            <Stack.Screen name="PokemonDetail" component={PokemonDetail} />
            <Stack.Screen name="TypeDetail" component={TypeDetail} />
            <Stack.Screen name="MoveDetail" component={MoveDetail} />
        </Stack.Navigator>
    );
};
