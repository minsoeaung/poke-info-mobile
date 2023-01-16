import React from 'react';
import { FlatList, Image, Pressable, StyleSheet, View } from 'react-native';

import { app } from '../constants/colors';
import getFormattedName from '../utils/getFormattedName';
import MyText from './MyText';
import SmallGreyText from './SmallGreyText';

type Props<T> = {
    data: T[];
    onPressItem: (item: T) => void;
    size?: 'small' | 'medium' | 'large';
    spriteExtractor?: (item: T) => string | null;
    extraExtractor?: (item: T) => string | null;
    listRef?: React.LegacyRef<FlatList<T>> | null;
};

export default function PressableItemList<T extends { name: string }>({
    data,
    onPressItem,
    size = 'medium',
    spriteExtractor,
    extraExtractor,
    listRef,
}: Props<T>) {
    return (
        <View style={styles.listContainer}>
            <FlatList
                ref={listRef}
                data={data}
                keyExtractor={key => key.name}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                ListEmptyComponent={() => <MyText style={styles.emptyText}>Empty!</MyText>}
                renderItem={({ item }) => (
                    <Pressable onPress={() => onPressItem(item)}>
                        {({ pressed }) => {
                            const sprite = spriteExtractor ? spriteExtractor(item) : null;
                            const extra = extraExtractor ? extraExtractor(item) : null;

                            return (
                                <View
                                    style={[
                                        styles.listItem,
                                        {
                                            paddingVertical: paddingVerticals[size],
                                        },
                                    ]}
                                >
                                    <View style={styles.spriteNameExtra}>
                                        {sprite && (
                                            <Image
                                                style={[
                                                    styles.sprite,
                                                    {
                                                        width: spriteSize[size],
                                                        height: spriteSize[size],
                                                    },
                                                ]}
                                                source={{
                                                    uri: sprite,
                                                }}
                                            />
                                        )}
                                        <MyText
                                            style={StyleSheet.flatten([
                                                styles.name,
                                                {
                                                    color: pressed ? 'tomato' : 'black',
                                                    marginLeft: sprite ? 50 : 0,
                                                },
                                            ])}
                                        >
                                            {getFormattedName(item.name)}
                                        </MyText>
                                        {extra && (
                                            <View style={styles.extra}>
                                                <SmallGreyText text={extra} />
                                            </View>
                                        )}
                                    </View>
                                    <MyText
                                        style={{
                                            color: pressed ? 'tomato' : 'black',
                                        }}
                                    >
                                        {'>'}
                                    </MyText>
                                </View>
                            );
                        }}
                    </Pressable>
                )}
                keyboardShouldPersistTaps="handled"
            />
        </View>
    );
}

const paddingVerticals = {
    small: 15,
    medium: 20,
    large: 25,
};

const spriteSize = {
    small: 30,
    medium: 35,
    large: 40,
};

const styles = StyleSheet.create({
    listContainer: {},
    listItem: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    separator: {
        borderBottomColor: app.darkColor,
        borderBottomWidth: 0.5,
    },
    emptyText: {
        paddingVertical: 50,
        textAlign: 'center',
    },
    spriteNameExtra: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    sprite: {
        resizeMode: 'cover',
        position: 'absolute',
    },
    name: {
        letterSpacing: 1,
    },
    extra: {
        marginLeft: 10,
    },
});
