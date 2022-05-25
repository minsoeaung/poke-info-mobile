import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Pressable } from 'react-native';

import MyText from '../components/MyText';
import { appColor } from '../constants/colors';
import { fonts } from '../constants/fonts';
import { NativeStackParamList } from '../types';
import AbilityDetail from './AbilityDetail';
import PokeDex from './PokeDex';
import PokemonDetail from './PokemonDetail';
import TypeDetail from './TypeDetail';

const Stack = createNativeStackNavigator<NativeStackParamList>();

// @ts-ignore
const customBackButton = ({ navigation }) => {
    return {
        headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
                <MyText
                    style={{
                        fontSize: 24,
                        color: 'tomato',
                    }}>
                    {'<  '}
                </MyText>
            </Pressable>
        ),
    };
};

export const PokeDexStack: React.FC = () => {
    return (
        <Stack.Navigator
            initialRouteName="PokeDex"
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
            <Stack.Screen name="PokeDex" component={PokeDex} />
            <Stack.Screen
                name="PokemonDetail"
                component={PokemonDetail}
                options={customBackButton}
            />
            <Stack.Screen
                name="TypeDetail"
                component={TypeDetail}
                options={customBackButton}
            />
            <Stack.Screen
                name="AbilityDetail"
                component={AbilityDetail}
                options={customBackButton}
            />
        </Stack.Navigator>
    );
};
