import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import config from "../utils/config";

const LoginScreen = ( {navigation, setSignedIn} ) => {
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errortext, setErrortext] = useState("");

    const handleLogin = async () => {
        setErrortext("");
        if (!userName) {
            alert("Please fill username");
            return;
        }
        if (!userPassword) {
            alert("Please fill Password");
            return;
        }
        setLoading(true);
        try {
            console.log(userName, userPassword);
            let response = await fetch(config.auth_ip + "login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: userName,
                    password: userPassword,
                }),
            });
            let responseJson = await response.status;
            console.log(responseJson);
            if (responseJson == 200) {
                //Hide Loader
                setLoading(false);
                console.log(responseJson);
                setSignedIn(true);
                if (responseJson) {
                    AsyncStorage.setItem("user_id", userName);
                    // navigation.navigate("DrawerNavigator");
                    
                } else {
                    console.log("Please check your username id or password");
                }
            } else if (responseJson == 500) {
                alert("Server Error!!");
            } else if (responseJson == 404) {
                alert("User not found !!");
            } else if (responseJson == 401) {
                alert("Password Invalid !!");
            } else {
                alert("Some other error !!");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log("Dismiss keyboard");
        }} >
            <View style={styles.container}>
                <StatusBar style="inverted" />
                <Text style={styles.logo}>Aqua-Questers</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Username"
                        placeholderTextColor="#ecf0f1"
                        onChangeText={(text) => setUserName(text)}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Password"
                        placeholderTextColor="#ecf0f1"
                        onChangeText={(text) => setUserPassword(text)}
                    />
                </View>
                {errortext != "" ? (
                    <Text style={styles.errorTextStyle}>{errortext}</Text>
                ) : null}
                {/* <TouchableOpacity>
                <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity> */}
                <TouchableOpacity
                    style={styles.loginBtn}
                    onPress={() => handleLogin()}
                >
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.signupBtn}
                    onPress={() => navigation.navigate("RegisterScreen")}
                >
                    <Text style={styles.signuptext}>Signup</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0e0e0e",
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        fontWeight: "600",
        fontSize: 45,
        color: "#15f4ee",
        marginBottom: 40,
    },
    inputView: {
        width: "80%",
        backgroundColor: "#0e0e0e",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#15f4ee",
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20,
    },
    inputText: {
        height: 80,
        color: "white",
    },
    forgot: {
        color: "white",
        fontSize: 16,
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#15f4ee",
        // #48dbfb
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10,
    },
    signupBtn: {
        width: "80%",
        backgroundColor: "#0e0e0e",
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "#15f4ee",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 0,
        marginBottom: 10,
    },
    loginText: {
        color: "#000000",
        fontSize: 22,
        fontWeight: "600",
    },
    signuptext: {
        color: "#FFFFFF",
        fontSize: 20,
    },
    errorTextStyle: {
        color: "red",
        textAlign: "center",
        fontSize: 14,
    },
});

export default LoginScreen;