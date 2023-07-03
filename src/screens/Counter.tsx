import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

function Counter(): JSX.Element {
    const [count, setCount] = useState(0);
    return (
        <View>
            <Text style={styles.textHeader}>THIS IS COUNTER SCREEN</Text>
            <Text>You have pressed {count} times</Text>
            <Button title="Press me" onPress={() => setCount(count + 1)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textHeader: {
        fontSize: 18,
        fontWeight: "bold",
    }
});

export default Counter;