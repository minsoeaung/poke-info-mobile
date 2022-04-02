import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PokeDex from "./screens/PokeDex";
import Abilities from "./screens/Abilities";
import AppLoading from 'expo-app-loading';
import {DotGothic16_400Regular, useFonts} from '@expo-google-fonts/dotgothic16';
import Pokemon from "./screens/Pokemon";
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import {appColor} from "./constants/colors";
import MyText from "./components/MyText";
import {Pressable} from "react-native";

const Tab = createBottomTabNavigator();
const PokeDexStack = createNativeStackNavigator();

const PokeDexStackScreen = () => (
    <PokeDexStack.Navigator
        initialRouteName="PokeDex"
        screenOptions={{
            headerStyle: {
                backgroundColor: appColor.headerBg,
            },
            headerTintColor: appColor.headerFont,
            headerTitleStyle: {
                fontFamily: 'DotGothic16_400Regular',
            }
        }}
    >
        <PokeDexStack.Screen name="PokeDex" component={PokeDex} options={{title: 'PokeDex'}}/>
        <PokeDexStack.Screen
            name="Pokemon"
            component={Pokemon}
            options={({navigation, route}) => ({
                headerLeft: props => (
                    <Pressable onPress={() => navigation.goBack()}>
                        <MyText
                            style={{
                                fontFamily: 'DotGothic16_400Regular',
                                fontSize: 24,
                                color: 'tomato',
                            }}
                        >
                            {'<   '}
                        </MyText>
                    </Pressable>
                )
            })}
        />
    </PokeDexStack.Navigator>
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
                })}
            >
                <Tab.Screen
                    name="PokeDex"
                    component={PokeDexStackScreen}
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

