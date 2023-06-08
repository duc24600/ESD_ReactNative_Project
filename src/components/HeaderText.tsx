import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export type Props = {
    content: string
};

const HeaderText : React.FC<Props> = ({content}) => {
    return (
        <View>
            <Text>{content}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {

    }
});

export default HeaderText;