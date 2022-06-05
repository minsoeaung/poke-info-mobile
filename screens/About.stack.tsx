import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { appColor } from '../constants/colors';
import { fonts } from '../constants/fonts';
import About from './About';

const Stack = createNativeStackNavigator();

const AboutStack: React.FC = () => {
    return (
        <Stack.Navigator
            initialRouteName="About"
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
                name="About"
                component={About}
                options={{ title: 'About' }}
            />
        </Stack.Navigator>
    );
};

export default AboutStack;
