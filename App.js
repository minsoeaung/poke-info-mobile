import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PokeDex from "./screens/PokeDex";
import Abilities from "./screens/Abilities";
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import {appColor} from "./constants/colors";
import AppLoading from 'expo-app-loading';
import {DotGothic16_400Regular, useFonts} from '@expo-google-fonts/dotgothic16';

const Tab = createBottomTabNavigator();

export default function App() {
    let [fontsLoaded] = useFonts({DotGothic16_400Regular});

    if (!fontsLoaded) {
        return <AppLoading/>;
    }

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({color, size}) => {
                        let iconName;

                        if (route.name === 'PokeDex') {
                            iconName = 'pokemon-go';
                        } else if (route.name === 'Abilities') {
                            iconName = 'alpha-a-box-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color}/>;
                    },
                    tabBarActiveTintColor: appColor.tabBarActive,
                    tabBarInactiveTintColor: 'gray',
                    headerStyle: {
                        backgroundColor: appColor.headerBg,
                        borderBottomWidth: 1,
                        borderBottomColor: appColor.border,
                    },
                    headerTintColor: appColor.headerFont,
                    headerTitleStyle: {
                        fontFamily: 'DotGothic16_400Regular'
                    },
                    tabBarStyle: {
                        backgroundColor: appColor.headerBg,
                        borderTopWidth: 1,
                        borderTopColor: appColor.border,
                        paddingBottom: 5
                    },
                    tabBarLabelStyle: {
                        fontFamily: 'DotGothic16_400Regular'
                    }
                })}
            >
                <Tab.Screen
                    name="PokeDex"
                    component={PokeDex}
                    options={{title: 'PokeDex'}}
                />
                <Tab.Screen
                    name="Abilities"
                    component={Abilities}
                    options={{title: 'Abilities'}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

