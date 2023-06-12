import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { SvgProps } from "react-native-svg";

type Props = {
    placeHolder?: string,
    isPassword: boolean,
};

const Input = (props: Props) => {
    return (
            <TextInput
                placeholder={props.placeHolder}
                secureTextEntry={props.isPassword}
                style={styles.input}
            />
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    input: {
        height: 40,
        borderWidth: 0,
        padding: 10,
        fontSize: 14,
        flex: 1
    },
    label: {
        fontSize: 15,
        fontWeight: 'bold'
    }
});

export default Input;