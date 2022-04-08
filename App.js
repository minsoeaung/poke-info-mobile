import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PokeDex from "./screens/PokeDex";
import AbilityList from "./screens/AbilityList";
import AppLoading from 'expo-app-loading';
import {DotGothic16_400Regular, useFonts} from '@expo-google-fonts/dotgothic16';
import PokemonDetail from "./screens/PokemonDetail";
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import {appColor} from "./constants/colors";
import MyText from "./components/MyText";
import {Pressable} from "react-native";
import TypeDetail from "./screens/TypeDetail";
import AbilityDetail from "./screens/AbilityDetail";
import ItemList from "./screens/ItemList";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const PokeDexStackScreen = () => (
    <Stack.Navigator
        initialRouteName="PokeDex"
        screenOptions={{
            headerStyle: {
                backgroundColor: appColor.headerBg,
            },
            headerTintColor: appColor.headerFont,
            headerTitleStyle: {
                fontFamily: 'DotGothic16_400Regular',
                fontSize: 22
            },
        }}
    >
        <Stack.Screen name="PokeDex" component={PokeDex} options={{title: 'PokeDex'}}/>
        <Stack.Screen
            name="PokemonDetail"
            component={PokemonDetail}
            options={({navigation}) => ({
                headerLeft: () => (
                    <Pressable onPress={() => navigation.goBack()}>
                        <MyText
                            style={{
                                fontSize: 24,
                                color: 'tomato',
                            }}
                        >
                            {'<  '}
                        </MyText>
                    </Pressable>
                )
            })}
        />
        <Stack.Screen
            name='TypeDetail'
            component={TypeDetail}
            options={({navigation}) => ({
                headerLeft: () => (
                    <Pressable onPress={() => navigation.goBack()}>
                        <MyText
                            style={{
                                fontSize: 24,
                                color: 'tomato',
                            }}
                        >
                            {'<  '}
                        </MyText>
                    </Pressable>
                )
            })}
        />
        <Stack.Screen
            name="AbilityDetail"
            component={AbilityDetail}
            options={({navigation}) => ({
                headerLeft: () => (
                    <Pressable onPress={() => navigation.goBack()}>
                        <MyText
                            style={{
                                fontSize: 24,
                                color: 'tomato',
                            }}
                        >
                            {'<  '}
                        </MyText>
                    </Pressable>
                )
            })}
        />
    </Stack.Navigator>
);

const AbilityStackScreen = () => (
    <Stack.Navigator
        initialRouteName="AbilityList"
        screenOptions={{
            headerStyle: {
                backgroundColor: appColor.headerBg,
            },
            headerTintColor: appColor.headerFont,
            headerTitleStyle: {
                fontFamily: 'DotGothic16_400Regular',
                fontSize: 22
            },
        }}
    >
        <Stack.Screen name="Abilities" component={AbilityList} options={{title: 'Abilities'}}/>
        <Stack.Screen
            name="AbilityDetail"
            component={AbilityDetail}
            options={({navigation}) => ({
                headerLeft: () => (
                    <Pressable onPress={() => navigation.goBack()}>
                        <MyText
                            style={{
                                fontSize: 24,
                                color: 'tomato',
                            }}
                        >
                            {'<  '}
                        </MyText>
                    </Pressable>
                )
            })}
        />
        <Stack.Screen
            name="PokemonDetail"
            component={PokemonDetail}
            options={({navigation}) => ({
                headerLeft: () => (
                    <Pressable onPress={() => navigation.goBack()}>
                        <MyText
                            style={{
                                fontSize: 24,
                                color: 'tomato',
                            }}
                        >
                            {'<  '}
                        </MyText>
                    </Pressable>
                )
            })}
        />
        <Stack.Screen
            name='TypeDetail'
            component={TypeDetail}
            options={({navigation}) => ({
                headerLeft: () => (
                    <Pressable onPress={() => navigation.goBack()}>
                        <MyText
                            style={{
                                fontSize: 24,
                                color: 'tomato',
                            }}
                        >
                            {'<  '}
                        </MyText>
                    </Pressable>
                )
            })}
        />
    </Stack.Navigator>
);

const ItemStackScreen = () => (
    <Stack.Navigator
        initialRouteName="ItemList"
        screenOptions={{
            headerStyle: {
                backgroundColor: appColor.headerBg,
            },
            headerTintColor: appColor.headerFont,
            headerTitleStyle: {
                fontFamily: 'DotGothic16_400Regular',
                fontSize: 22
            },
        }}
    >
        <Stack.Screen name="ItemList" component={ItemList} options={{title: 'Items'}}/>
    </Stack.Navigator>
)

export default function App() {
    let [fontsLoaded] = useFonts({DotGothic16_400Regular});

    if (!fontsLoaded) {
        return <AppLoading/>;
    }

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: appColor.headerBg,
                        paddingBottom: 5,
                        borderTopWidth: 0.2,
                        borderTopColor: appColor.border
                    },
                    tabBarLabelStyle: {
                        fontFamily: 'DotGothic16_400Regular'
                    },
                    tabBarIcon: ({color, size}) => {
                        let iconName;

                        if (route.name === 'PokeDexTab') {
                            iconName = 'pokemon-go';
                        } else if (route.name === 'AbilitiesTab') {
                            iconName = 'alpha-a-box-outline';
                        } else if (route.name === 'ItemsTab') {
                            iconName = 'toolbox-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color}/>;
                    },
                    tabBarActiveTintColor: appColor.tabBarActive,
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen
                    name="PokeDexTab"
                    component={PokeDexStackScreen}
                    options={{title: 'PokeDex'}}
                />
                <Tab.Screen
                    name="AbilitiesTab"
                    component={AbilityStackScreen}
                    options={{title: 'Abilities'}}
                />
                <Tab.Screen
                    name="ItemsTab"
                    component={ItemStackScreen}
                    options={{title: 'Items'}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

