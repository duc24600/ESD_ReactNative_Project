import React from "react";
import { View, Text, StyleSheet } from "react-native";

export type Props = {
    content: string
};

const HeaderText = (props : Props) => {
    return (
        <View>
            <Text style={styles.text}>{props.content}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontFamily: 'Inter',
        fontWeight: 'bold',
        color: '#565E6CFF',
        margin: 20
    }
});

export default HeaderText;