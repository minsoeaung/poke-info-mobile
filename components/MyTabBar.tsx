import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Pressable, StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';

import { appColor } from '../constants/colors';
import MyText from './MyText';

const icons: { [key: string]: string } = {
    PokeDexStack: 'pokemon-go',
    AbilitiesStack: 'alpha-a-box-outline',
    ItemsStack: 'toolbox-outline',
    AboutStack: 'alert-octagon-outline',
};

const MyTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
    return (
        <View style={styles.tabBarContainer}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label: string = options.title || '';

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <Pressable
                        key={label}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.tab}>
                        <Ionicons
                            name={icons[route.name] || ''}
                            style={StyleSheet.flatten([
                                styles.icon,
                                {
                                    backgroundColor: isFocused ? appColor.secondary : appColor.primary,
                                    color: isFocused ? appColor.primary : appColor.secondary,
                                    paddingHorizontal: 15,
                                    borderRadius: 10,
                                },
                            ])}
                        />
                        <MyText style={styles.label}>{label}</MyText>
                    </Pressable>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    tabBarContainer: {
        height: 56,
        flexDirection: 'row',
        backgroundColor: appColor.primary,
    },
    tab: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        color: appColor.secondary,
        fontSize: 20,
        marginBottom: 5,
    },
    label: {
        color: appColor.secondary,
        fontSize: 12,
    },
});

export default MyTabBar;
