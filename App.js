import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PokeDex from "./screens/PokeDex";
import Abilities from "./screens/Abilities";
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import {appColor} from "./constants/colors";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;

                        if (route.name === 'PokeDex') {
                            iconName = 'pokemon-go';
                        } else if (route.name === 'Abilities') {
                            iconName = 'alpha-a-box-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color}/>;
                    },
                    tabBarActiveTintColor: appColor.headerTint,
                    tabBarInactiveTintColor: 'gray',
                    headerStyle: {
                        backgroundColor: appColor.background,
                        borderBottomWidth: 1.5,
                        borderBottomColor: appColor.border
                    },
                    headerTintColor: '#10162f',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    },
                    tabBarStyle: {
                        backgroundColor: appColor.background,
                        borderTopWidth: 1.5,
                        borderTopColor: appColor.border
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

