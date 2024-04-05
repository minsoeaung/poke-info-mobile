import { FlashList } from '@shopify/flash-list';
import { Image } from 'expo-image';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import MyText from './MyText';
import SmallGreyText from './SmallGreyText';
import { colors } from '../constants/colors';
import getFormattedName from '../utils/getFormattedName';
import hairlineWidth = StyleSheet.hairlineWidth;

type Props<T> = {
    data: T[];
    onPressItem: (item: T) => void;
    size?: 'small' | 'medium' | 'large';
    spriteExtractor?: (item: T) => string | null;
    extraExtractor?: (item: T) => string | null;
    listRef?: React.LegacyRef<FlashList<T>> | null;
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
            <FlashList
                ref={listRef}
                data={data}
                keyExtractor={key => key.name}
                ListEmptyComponent={() => <MyText style={styles.emptyText}>None!</MyText>}
                estimatedItemSize={54}
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
                                                contentFit="cover"
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
                                                accessibilityLabel={`Image of ${item.name}`}
                                                recyclingKey={`front_default_${item.name}`}
                                                transition={200}
                                            />
                                        )}
                                        <MyText
                                            style={StyleSheet.flatten([
                                                styles.name,
                                                {
                                                    color: pressed ? 'tomato' : colors.cardText,
                                                    marginLeft: sprite ? 50 : 5,
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
                                            color: pressed ? 'tomato' : colors.cardText,
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
    listContainer: {
        flex: 1,
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: hairlineWidth,
        borderBottomColor: 'black',
        paddingHorizontal: 15,
    },
    emptyText: {
        paddingVertical: 50,
        textAlign: 'center',
        color: colors.cardText,
    },
    spriteNameExtra: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    sprite: {
        position: 'absolute',
    },
    name: {},
    extra: {
        marginLeft: 10,
    },
});
