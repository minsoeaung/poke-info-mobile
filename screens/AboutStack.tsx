import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import MyHeader from '../components/MyHeader';
import { appColor } from '../constants/colors';
import { fonts } from '../constants/fonts';
import About from './About';

const Stack = createNativeStackNavigator();

const AboutStack: React.FC = () => {
    return (
        <Stack.Navigator
            initialRouteName="About"
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
            <Stack.Screen name="About" component={About} options={{ title: 'About' }} />
        </Stack.Navigator>
    );
};

export default AboutStack;
