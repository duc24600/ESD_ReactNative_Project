import React from "react";
import { Text, View } from "react-native";
import HeaderText from "../components/HeaderText";
import LoginInput from "../components/LoginInput";

function Login() : JSX.Element {
    return (
        <View>
            <HeaderText content="Đăng nhập" />
            <LoginInput placeHolder="Tên đăng nhập" label="Tên đăng nhập" isPassword={false}/>
            <LoginInput placeHolder="Mật khẩu" label="Mật khẩu" isPassword={true}/>
        </View>
    );
}

export default Login;