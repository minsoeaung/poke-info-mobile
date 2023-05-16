import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import AbilityDetail from './AbilityDetail';
import PokeDex from './PokeDex';
import PokemonDetail from './PokemonDetail';
import TypeDetail from './TypeDetail';
import MyHeader from '../components/MyHeader';
import { StackParamList } from '../types';
import { CardStyleInterpolators } from '@react-navigation/stack';

const Stack = createSharedElementStackNavigator<StackParamList>();

const PokeDexStack: React.FC = () => {
    return (
        <Stack.Navigator
            initialRouteName="PokeDex"
            screenOptions={{
                header: props => <MyHeader headerProps={props} />,
                cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
            detachInactiveScreens={false}
        >
            <Stack.Screen name="PokeDex" component={PokeDex} />
            <Stack.Screen
                name="PokemonDetail"
                component={PokemonDetail}
                sharedElements={(route, otherRoute, showing) => {
                    if (['PokeDex', 'TypeDetail'].includes(otherRoute.name) && showing) {
                        const { name } = route.params; // No type safety here
                        return [
                            {
                                id: `pokemon.sprite.${name}`,
                                animation: 'move',
                                resize: 'auto',
                            },
                        ];
                    }
                }}
            />
            <Stack.Screen name="TypeDetail" component={TypeDetail} />
            <Stack.Screen name="AbilityDetail" component={AbilityDetail} />
        </Stack.Navigator>
    );
};

export default PokeDexStack;
