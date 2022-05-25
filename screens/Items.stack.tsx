import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { appColor } from '../constants/colors';
import { fonts } from '../constants/fonts';
import ItemList from './ItemList';

const Stack = createNativeStackNavigator();

export const ItemsStack: React.FC = () => {
    return (
        <Stack.Navigator
            initialRouteName="ItemList"
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
                name="ItemList"
                component={ItemList}
                options={{ title: 'Items' }}
            />
        </Stack.Navigator>
    );
};
