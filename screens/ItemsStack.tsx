import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import MyHeader from '../components/MyHeader';
import { appColor } from '../constants/colors';
import { fonts } from '../constants/fonts';
import AbilityDetail from './AbilityDetail';
import ItemDetail from './ItemDetail';
import ItemList from './ItemList';
import PokemonDetail from './PokemonDetail';
import TypeDetail from './TypeDetail';

const Stack = createNativeStackNavigator();

export const ItemsStack: React.FC = () => {
    return (
        <Stack.Navigator
            initialRouteName="ItemList"
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
            <Stack.Screen name="ItemList" component={ItemList} options={{ title: 'Items' }} />
            <Stack.Screen name="ItemDetail" component={ItemDetail} />
            <Stack.Screen name="AbilityDetail" component={AbilityDetail} />
            <Stack.Screen name="PokemonDetail" component={PokemonDetail} />
            <Stack.Screen name="TypeDetail" component={TypeDetail} />
        </Stack.Navigator>
    );
};
