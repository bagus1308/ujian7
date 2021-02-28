import React, { Component, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import styles from './Styles'

const Login = ({ navigation }) => {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const loginUser = () => {
        console.log('INI LOGIN')
        auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                console.log('user sign in');
                console.log("response" + response)
                console.log(response.user.email)
                navigation.navigate("Dashboard", {
                    dataID: email
                })
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('email sudah terpakai!')
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('email tidak cocok!')
                }
                console.log(error);
            });

    }

    const goToRegistration = () => {
        navigation.navigate('Register')
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    placeholder='email'
                    onChangeText={txtEmail => setEmail(txtEmail)}
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    placeholder='password'
                    secureTextEntry
                    onChangeText={txtPassword => setPassword(txtPassword)}
                />
                <TouchableOpacity   style={styles.button} onPress={() => loginUser()}>
                    <Text style={styles.buttonTitle}>Login</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Registrasi Disini<Text style={{ color: '#00a7f5' }} onPress={() => goToRegistration()}>Daftar</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );

}

export default Login;

