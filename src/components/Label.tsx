import React from "react";
import { StyleSheet, Text } from "react-native";

type Props = {
    content: string
};

const Label = (props : Props) => {
    return (
        <Text style={styles.label}>{props.content}</Text>
    )
};

const styles = StyleSheet.create({
    label: {
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 22,
        color: '#323842FF',
        fontFamily: 'Inter'
    }
});

export default Label;