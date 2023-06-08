import React from "react";
import { TextInput, View } from "react-native";

type Props = {
    label : string, 
    placeHolder? : string, 
    isPassword : boolean,
    leftImage? : string
};

const Input : React.FC<Props> = ({label, placeHolder, isPassword, leftImage}) => {
    return (
        <View>
            <TextInput inlineImageLeft={leftImage} aria-label={label} placeholder={placeHolder} secureTextEntry={isPassword}/>
        </View>
    );
}

export default Input;