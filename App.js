import React, { Component } from 'react'
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Screen/Login/Login'
import Register from './Screen/Register/Register'
import Dashboard from './Screen/Dashboard/Dasboard'
import SuratIzin from './Screen/SuratIzin/SuratIzin'
import CheckIn from './Screen/CheckIn/CheckIn'
import CheckOut from './Screen/CheckOut.js/CheckOut'

const Stack = createStackNavigator();


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      isLoggedin: false
    }
  }

  // componentDidMount() {
  //   auth().onAuthStateChanged((userData) => {
  //     console.log("user" + JSON.stringify(userData))
  //     if (userData === null) {
  //       this.setState({ isLoggedin: false })
  //     } else {
  //       this.setState({ user: userData, isLoggedin: false })
  //     }
  //   });
  // }


  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator>
        {this.state.isLoggedin ? <></> : <Stack.Screen name="Login" component={Login} />}
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="CheckIn" component={CheckIn} />
        <Stack.Screen name="CheckOut" component={CheckOut} />
        <Stack.Screen name="History" component="" />
        <Stack.Screen name="SuratIzin" component={SuratIzin} />
        
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
}
