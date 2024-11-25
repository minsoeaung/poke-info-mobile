import { FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons } from '@expo/vector-icons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Pressable, StyleSheet, View } from 'react-native';

import MyText from './MyText';
import { colors } from '../constants/colors';

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

                const iconStyles = StyleSheet.flatten([
                    styles.icon,
                    {
                        backgroundColor: isFocused ? colors.text : colors.background,
                        color: isFocused ? colors.background : colors.text,
                        paddingHorizontal: 15,
                        borderRadius: 10,
                    },
                ]);

                return (
                    <Pressable
                        key={label}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.tab}
                    >
                        {route.name === 'PokeDexStack' && <MaterialIcons style={iconStyles} name="catching-pokemon" />}
                        {route.name === 'MovesStack' && (
                            <MaterialCommunityIcons style={iconStyles} name="lightning-bolt" />
                        )}
                        {route.name === 'AbilitiesStack' && <FontAwesome6 style={iconStyles} name="dumbbell" />}
                        {route.name === 'ItemsStack' && <Octicons style={iconStyles} name="tools" />}
                        {route.name === 'AboutStack' && <Ionicons style={iconStyles} name="settings" />}
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
        backgroundColor: colors.background,
    },
    tab: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        color: colors.text,
        fontSize: 20,
        marginBottom: 5,
    },
    label: {
        color: colors.text,
        fontSize: 12,
    },
});

export default MyTabBar;
