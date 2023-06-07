import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ListItem from "../components/ListItem";

type Item = Movie | undefined;

let data = new Array<Item>;
fetch('https://reactnative.dev/movies.json')
    .then(response => response.json())
    .then(json => {
        json.movies.map((item: Item) => {
            data.push(item);
        });
    })
    .catch((error) => {
        console.log(error);
    });

function List(): JSX.Element {
    return (
        <View style={styles.listView}>
            <View style={styles.list}>
                <Text style={styles.textHeader}>THIS IS FLAT LIST SCREEN</Text>
            </View>
            <FlatList data={data} renderItem={({item}) => ListItem(item)}/>
        </View>
    );
}
const styles = StyleSheet.create({
    listView: {
        flex: 1,
    },
    list: {
        alignItems: 'center',
        backgroundColor: '#cc3333'
    },
    textHeader: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFFFFF"
    }
});
export default List;