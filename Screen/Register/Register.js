import React, { Component } from 'react'
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import firestore from '@react-native-firebase/firestore';
import styles from './Styles'


class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            password: "",
            repassword: ""
        }
    }
    registerUser = () => {
        console.log("INI REGISTER")
        auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((respose) => {
            console.log('user dibuat!');
            console.log("response" + respose)

            firestore()
                .collection('users')
                .doc(this.state.email)
                .set({
                    name: this.state.name,
                    email: this.state.email
                })
                .then(() => {
                    this.props.navigation.navigate("Dashboard")
                    console.log('user ditambahkan!');
                })
                .catch((error) => {
                    Alert.alert("Berhasil!")
                    this.props.navigation.navigate("Login")
                });
            navigation.goBack();
        })
        .catch((error) => {
            if (error.code === 'auth/email-already-in-use') {
                console.log('email sudah digunakan!')
            }
            if (error.code === 'auth/invalid-email') {
                console.log('email tidak cocok!')
            }
            console.log(error);
        });
    }

    render() {
        return (
            <View style={styles.container}>
            <KeyboardAwareScrollView style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    placeholder='nama'
                    onChangeText={(name) => this.setState({ name: name })}
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    placeholder='email'
                    onChangeText={(email) => this.setState({ email: email })}
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    placeholder='password'
                    secureTextEntry
                    onChangeText={(password) => this.setState({ password: password })}
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    placeholder='repassword'
                    secureTextEntry
                    onChangeText={(repassword) => this.setState({ repassword: repassword })}
                />
                <TouchableOpacity style={styles.button} onPress={this.registerUser}>
                    <Text style={styles.buttonTitle}>Register</Text>
                </TouchableOpacity>
            </KeyboardAwareScrollView>
        </View>
        )
    }
}
export default Register;