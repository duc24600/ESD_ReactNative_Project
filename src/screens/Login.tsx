import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HeaderText from "../components/HeaderText";
import LoginInput from "../components/LoginInput";
import User from "../resources/username.svg";
import Password from "../resources/password.svg";
import Domain from "../resources/domain.svg";
import Dropdown from "../resources/dropdown.svg";
import Label from "../components/Label";
import CheckBox from "../components/CheckBox";
import { useNavigation } from "@react-navigation/native";


function Login(): JSX.Element {
    
    const navigation = useNavigation();

    const handleLogin = () => { 
        navigation.navigate("Home" as never);
    };

    return (
        <View>
            <View style={styles.titleContainer}>
                <Image style={styles.image} source={require("../resources/hpt-logo.png")} />
                <Text style={styles.title}>Quản lý tài sản</Text>
            </View>
            <View>
                <HeaderText content="Đăng nhập" />
                <View style={styles.container}>
                    <Label content="Domain" />
                    <View style={styles.textBoxContainer}>
                        <Domain height={16} width={16} />
                        <LoginInput placeHolder="Chọn domain" isPassword={false} />
                        <Dropdown height={16} width={16} />
                    </View>
                </View>
                <View style={styles.container}>
                    <Label content="Tài khoản" />
                    <View style={styles.textBoxContainer}>
                        <User height={16} width={16} />
                        <LoginInput placeHolder="Nhập tài khoản" isPassword={false} />
                    </View>
                </View>
                <View style={styles.container}>
                    <Label content="Mật khẩu" />
                    <View style={styles.textBoxContainer}>
                        <Password height={16} width={16} />
                        <LoginInput placeHolder="Nhập mật khẩu" isPassword={true} />
                    </View>
                </View>
                <CheckBox label="Ghi nhớ tài khoản"/>
            </View>
            <TouchableOpacity 
                style={styles.button}
                onPress={handleLogin}>
                <Text>Đăng nhập</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: 20,
        marginRight: 20,
        marginLeft: 20
    },
    titleContainer: {
        alignItems: 'center',
    },
    textBoxContainer: {
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        marginTop: 30,
        marginBottom: 20,
        height: 70,
        width: 150,
        resizeMode: 'stretch'
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#323842FF'
    },
    button: {
        alignItems: 'center',
        color: '#FFFFFFFF',
        backgroundColor: '#00BDD6FF',
        padding: 10,
        margin: 20
    }
});

export default Login;