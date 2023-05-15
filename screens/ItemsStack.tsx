import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import AbilityDetail from './AbilityDetail';
import ItemDetail from './ItemDetail';
import ItemList from './ItemList';
import PokemonDetail from './PokemonDetail';
import TypeDetail from './TypeDetail';
import MyHeader from '../components/MyHeader';
import { StackParamList } from '../types';

const Stack = createNativeStackNavigator<StackParamList>();

export const ItemsStack: React.FC = () => {
    return (
        <Stack.Navigator
            initialRouteName="ItemList"
            screenOptions={{
                header: props => <MyHeader headerProps={props} />,
                animation: 'fade_from_bottom',
            }}
        >
            <Stack.Screen name="ItemList" component={ItemList} options={{ title: 'Items' }} />
            <Stack.Screen name="ItemDetail" component={ItemDetail} />
            <Stack.Screen name="AbilityDetail" component={AbilityDetail} />
            <Stack.Screen name="PokemonDetail" component={PokemonDetail} />
            <Stack.Screen name="TypeDetail" component={TypeDetail} />
        </Stack.Navigator>
    );
};
