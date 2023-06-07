import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import ListItem from "../components/ListItem";

function List(): JSX.Element {
    const [isLoading, setLoading] = useState(true);
    const [movies, setMovies] = useState<Movie[]>([]);

    const getMovies = async () => {
        try {
            const response = await fetch('https://reactnative.dev/movies.json');
            const json = await response.json();
            setMovies(json.movies);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <View style={styles.listView}>
            <View style={styles.list}>
                <Text style={styles.textHeader}>THIS IS FLAT LIST SCREEN</Text>
            </View>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList data={movies} renderItem={({ item }) => ListItem(item)} />
            )}
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