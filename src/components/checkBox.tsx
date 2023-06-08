import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import UnChecked from "../resources/square.svg";
import Checked from "../resources/check-square.svg";
type Props = {
    label: string
}

const CheckBox = (props : Props) => {
    const [isChecked, setChecked] = useState(false);
    const onPress = () => {
        setChecked(!isChecked);
    }
    return (
        <View>
            {isChecked ? (<Checked onPress={onPress}/>) : (<UnChecked onPress={onPress}/>)}
            <Text>{props.label}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    checkBox: {
        
    },
    container: {
        flex: 1,
    }
});

export default CheckBox;