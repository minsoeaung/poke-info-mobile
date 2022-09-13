import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import MyHeader from '../components/MyHeader';
import About from './About';

const Stack = createNativeStackNavigator();

const AboutStack: React.FC = () => {
    return (
        <Stack.Navigator
            initialRouteName="About"
            screenOptions={{
                header: props => <MyHeader headerProps={props} />,
            }}>
            <Stack.Screen name="About" component={About} options={{ title: 'About' }} />
        </Stack.Navigator>
    );
};

export default AboutStack;
