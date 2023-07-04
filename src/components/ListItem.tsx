import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Item = Movie | undefined;

function ItemElement(item: Item): JSX.Element {
    return (
        <View style={styles.itemContainer}>
            <View>
                <Text style={styles.name}>{item?.title}</Text>
                <Text>{item?.releaseYear}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        padding: 10
    },
    itemContent: {
        marginHorizontal: 10,
    },
    thumbnail: {
        width: 100,
        height: 100,
        borderRadius: 20,
        borderColor: "#1974d2",
        borderWidth: 2
    },
    name: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: "bold",
        color: "#000000"
    },
});

export default ItemElement;