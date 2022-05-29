import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Pressable } from 'react-native';

import { NativeStackParamList } from '../types';
import MyText from './MyText';

type Props = NativeStackScreenProps<NativeStackParamList>;

const ScreenBackButton = ({ navigation }: Props) => {
    return {
        headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
                {({ pressed }) => (
                    <MyText
                        style={{
                            fontSize: 24,
                            color: pressed ? 'black' : 'tomato',
                        }}>
                        {'<  '}
                    </MyText>
                )}
            </Pressable>
        ),
    };
};

export default ScreenBackButton;
